import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Modal, Select } from 'antd';
import { actionCloseForm } from '../../../Redux/Action/UpdateOrderDetailsFormAction';
import { actionFetchProductAPI, actionUpdateProductAPI } from '../../../Redux/Action/ProductAction';

function ModalUpdate(props) {
  let { editItem, listProductAPI, listCategoryAPI,refreshData } = props;
  let showform = useSelector((state) => state.updateorderdetailsForm.showForm) || false;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  let currentPage = useSelector((state) => state.product.currentPage);
  let pageSize = useSelector((state) => state.product.pageSize);

  let [page, setPage] = useState(currentPage);
  let [productsName, setProductsname] = useState("");
  let [description, setDescription] = useState("");
  let [priceM, setPriceM] = useState("");
  let [priceL, setPriceL] = useState("");
  let [category, setCategory] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  
  let [idProduct,setIdProduct]=useState("");
 


  useEffect(() => {
    if (editItem) {
     
      setIdProduct(editItem.id);
      setProductsname(editItem.name);
      setDescription(editItem.description);
      setPriceM(editItem.priceM);
      setPriceL(editItem.priceL);
      let category = listCategoryAPI.find(item => item.CategoryId === editItem.CategoryId);
      // setCategory(editItem.categories);
      console.log(listCategoryAPI);
      const categoryId =category;
      console.log(categoryId.id);
            setCategory(editItem.categories);
      console.log(editItem);
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
      console.log('update product', res);
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
