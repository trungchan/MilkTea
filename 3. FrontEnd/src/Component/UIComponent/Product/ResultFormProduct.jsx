import React, { useEffect, useState } from 'react';
import { Table, Button, Input, Alert, Modal,message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { actionShowForm } from './../../../Redux/Action/UpdateOrderDetailsFormAction';
import ModalUpdate from './ModalUpdate';
import axios from 'axios';
import { actionDeleteProductAPI, actionFetchProductAPI } from '../../../Redux/Action/ProductAction';
import { actionFetchCategoryAPI } from '../../../Redux/Action/CategoryAction';
import ButtonCreateNewProduct from './ButtonCreateNewProduct';
import '../../../style/productform.css';
function ResultFormProduct(props) {
  //Declare 
  let dispatch = useDispatch();
  let listProductAPI = useSelector((state) => state.product.listProduct);
  let [editItem, setUpdateEditItem] = useState(null);
  let [dataSource, setDataSource] = useState([]);
  let totalPages = useSelector((state) => state.product.totalPages);
  let currentPage = useSelector((state) => state.product.currentPage);
  let pageSizeAPI = useSelector((state) => state.product.pageSize);
  let [totalElement,setTotalElements]=useState('');
  let listCategoryAPI = useSelector((state) => state.category.listCategory);
  let [messageApi, contextHolder] = message.useMessage();

  let total = useSelector((state) => state.product.total);
  let [pageSize, setPageSize] = useState(5);
  let [page, setPage] = useState(currentPage);
  let [totalPage, setTotalPage] = useState(1);
  let [searchedText, setSearchedText] = useState("");
  let [successUpdate, setSuccessUpdate] = useState(null);
  let [successMessage, setSuccessMessage] = useState(null);
  let [messageAPI, contextHolder1] = message.useMessage(null);
  let [messageCreate, contextCreate] = message.useMessage(null);
 
  const [shouldRefreshData, setShouldRefreshData] = useState(false);
  //----------End Declare ----------
 
  //useEffect
  useEffect(() => {
    
    dispatch(actionFetchProductAPI(page, pageSize));
  }, [dispatch, page, pageSize]);


  useEffect(() => {
    setTotalPage(totalPages);
  }, [totalPages]);

  useEffect(() => {
    setDataSource(listProductAPI);
  }, [listProductAPI]);

  useEffect(() => {
    dispatch(actionFetchCategoryAPI());
  }, [dispatch]);

  useEffect(()=>{
    fetchProduct();
  },[])

  useEffect(() => {
    
    let fetchProductList = () => {
      axios
        .get("http://localhost:8080/api/v1/products", {
          headers: {
            
            "content-type": "application/json",
          },
        })
        .then((res) => {
          setTotalElements(res.data.totalElements);
        })
        .catch((error) => {
          
          console.error('Error fetching product list: ', error);
        });
    };
   
    dispatch(actionFetchProductAPI(page, pageSize));
    fetchProductList(); 
  }, [dispatch,page, pageSize]);
  //--------End useEffect---------

  //-----------------------Function----------------------
  let createSuccess=()=>{
    messageCreate.open({
      type: 'success',
      content: 'Tạo sản phẩm thành công!',
     
    });
  }
  let success = () => {
    messageAPI.open({
      type: 'success',
      content: 'Cập nhật thành công!',
     
    });
  };

let handleCreateSuccess=()=>{
  createSuccess();
}
  let handleUpdateSucces=()=>{
    success();
   
  }
  let showSuccessMessage = (message) => {
    setSuccessMessage(message);
  };

  let handlePageChange = (page, pageSize) => {
    setPage(page);
  };

let fetchProduct=()=>{
  dispatch(actionFetchProductAPI(page, pageSize));
}

let onHandDelete = (id) => {
  Modal.confirm({
    title: "Bạn có muốn Xóa Sản phẩm này?",
    okText: "Yes",
    okType: "danger",
    onOk: () => {
      dispatch(actionDeleteProductAPI(id))
        .then(() => {
          
          fetchProduct();
          messageApi.open({
            type: 'success',
            content: 'Sản Phẩm Đã Xóa',
            
          });
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  });
  
};

  let onhandleEdit = (productItem) => {
    dispatch(actionShowForm(productItem));
    setUpdateEditItem({ ...productItem });
    
  }
  
  //----------End Function ----------
  let columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'name',
      // filterValue:[searchedText],
      // onFilter:(value,record)=>{
      //   return record.name.includes(value);
      // }
    },
    {
      title: 'Mô Tả',
      dataIndex: 'description',
      // filterValue:[searchedText],
      // onFilter:(value,record)=>{
      //   return record.quantity.includes(value);
      // }
    },
    {
      title: 'Giá Size M',
      dataIndex: 'priceM',
      render: (text) => (
        text.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
      ),
      // filterValue:[searchedText],
      // onFilter:(value,record)=>{
      //   return record.size.includes(value);
      // }
    },
    {
      title: 'Giá Size L',
      dataIndex: 'priceL',
      render: (text) => (
        text.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
      ),
      // filterValue:[searchedText],
      // onFilter:(value,record)=>{
      //   return record.size.includes(value);
      // }
    },
    {
      title: 'Loại',
      dataIndex: 'categories',
      // filterValue:[searchedText],
      // onFilter:(value,record)=>{
      //   return record.size.includes(value);
      // }
    },
    {
      title: 'Edit',
      render: (text, record) => (
        <Button type="primary" onClick={() => onhandleEdit(record)}>Edit</Button>
      ),
    },
    {
      title: 'Delete',
      render: (text, record) => (
        <Button type="primary" onClick={() => onHandDelete(record.id)} >Delete</Button>
      ),
    },
  ]
  let filteredDataSource = dataSource.filter((record) => {
    let  searchTextLowerCase = searchedText.toLowerCase();
  
    return (
      (record?.name?.toString()?.toLowerCase().includes(searchTextLowerCase)) ||
      (record?.priceM?.toString()?.toLowerCase().includes(searchTextLowerCase)) ||
      (record?.priceL?.toString()?.toLowerCase().includes(searchTextLowerCase)) ||
      (record?.categories?.toString()?.toLowerCase().includes(searchTextLowerCase))
    );
  });
  
 
  return (
    <>
    <div className="searchContainer">
    <h1>List Products</h1> 
      <ButtonCreateNewProduct listCategoryAPI={listCategoryAPI}  className="createButton"  onShowSuccessMessage={showSuccessMessage} onHandleCreate={handleCreateSuccess}/>
      <Input.Search placeholder="Search here ..." style={{ marginBottom: 8 }} onSearch={(value) => { setSearchedText(value) }} />
            {contextCreate}
            {contextHolder1}
             {contextHolder}
      <Table key={shouldRefreshData ? 'refreshedKey' : 'normalKey'} columns={columns} dataSource={filteredDataSource}
        pagination={{
          pageSize: pageSizeAPI,
          total: totalElement,
          onChange: handlePageChange,
          showSizeChanger: false,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        rowKey="id"
      ></Table>
      <ModalUpdate editItem={editItem} listProductAPI={listProductAPI} listCategoryAPI={listCategoryAPI} refreshData={() => setShouldRefreshData(!shouldRefreshData)}  
       onhandleUpdateSucces={handleUpdateSucces}
      />
      

    </div>
    </>
    
  );
}


export default ResultFormProduct;
