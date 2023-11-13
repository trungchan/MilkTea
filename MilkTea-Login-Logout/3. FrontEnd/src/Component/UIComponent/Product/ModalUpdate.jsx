import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Modal, Select,message } from 'antd';
import { actionCloseForm } from '../../../Redux/Action/UpdateOrderDetailsFormAction';
import { actionFetchProductAPI, actionUpdateProductAPI } from '../../../Redux/Action/ProductAction';
import axios from 'axios';

function ModalUpdate(props) {
  let { editItem, listProductAPI, listCategoryAPI,refreshData,successMessageUpdate,onhandleUpdateSucces } = props;
  let showform = useSelector((state) => state.updateorderdetailsForm.showForm) || false;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  let currentPage = useSelector((state) => state.product.currentPage);
  let pageSize = useSelector((state) => state.product.pageSize);
  let [listCategoryAPINopage,setListCategoryAPINopage]=useState([]);
  let [page, setPage] = useState(currentPage);
  let [productsName, setProductsname] = useState("");
  let [description, setDescription] = useState("");
  let [priceM, setPriceM] = useState("");
  let [priceL, setPriceL] = useState("");
  let [category, setCategory] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [messageAPI, contextHolder2] = message.useMessage(null);
  let [idProduct,setIdProduct]=useState("");
 


  useEffect(() => {
    let fetchProductList = () => {
      axios
        .get("http://localhost:8080/api/v1/categories?page=0&size=9999", {
          headers: {
            // Authorization: "Basic " + btoa("Username1:123456"),
            "content-type": "application/json",
          },
        })
        .then((res) => {
          setListCategoryAPINopage(res.data.content);
        })
        .catch((error) => {
          
          console.error('Error fetching product list: ', error);
        });
    };
  
    fetchProductList(); 
  }, []);

  useEffect(() => {
    if (editItem) {
     
      setIdProduct(editItem.id);
      setProductsname(editItem.name);
      setDescription(editItem.description);
      setPriceM(editItem.priceM);
      setPriceL(editItem.priceL);
      let category = listCategoryAPINopage.find(item => item.name===editItem.categories);
      setCategory(category.id);
      setImageUrl(editItem.imageUrl);
    }
  }, [editItem]);
  

  let handleOk = () => {
    // Add your logic to handle OK button action here
  };

  let handleCancel = () => {
    dispatch(actionCloseForm());
  };
  let fetchProduct=()=>{
    dispatch(actionFetchProductAPI(page, pageSize));
  }
  let handleUpdate = () => {
    dispatch(actionUpdateProductAPI(idProduct,{
      
      name: productsName,
      description: description,
      priceM: priceM,
      priceL: priceL,
      categoryId: category,
      imageUrl:imageUrl,
      
      
    })).then(res => {
      
      onhandleUpdateSucces(); 
      refreshData(fetchProduct());
    })
    
    dispatch(actionCloseForm());

  };

  return (
    <Modal
      title="Update Product"
      open={showform}
      onOk={handleUpdate}
      onCancel={handleCancel}
      okButtonProps={{ disabled: false }}
      cancelButtonProps={{ disabled: false }}
    >
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Tên Sản Phẩm">
          <Input value={productsName} onChange={(event) => setProductsname(event.target.value)} />
        </Form.Item>
        <Form.Item label="Mô Tả">
          <Input value={description} onChange={(event) => setDescription(event.target.value)} />
        </Form.Item>
        <Form.Item label="Giá Size M">
          <Input value={priceM} onChange={(event) => setPriceM(event.target.value)} />
        </Form.Item>
        <Form.Item label="Giá Size L">
          <Input value={priceL} onChange={(event) => setPriceL(event.target.value)} />
        </Form.Item>
        <Form.Item label="Hình Ảnh">
          <Input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
        </Form.Item>
        <Form.Item label="Loại">
          <Select value={category} onChange={(value) => setCategory(value)}>
            {listCategoryAPI.map((category, index) => (
              <Select.Option key={index} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form >
    </Modal>
  );
}

export default ModalUpdate;
