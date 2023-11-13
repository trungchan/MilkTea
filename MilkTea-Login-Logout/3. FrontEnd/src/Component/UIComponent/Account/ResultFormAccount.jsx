import React, { useEffect, useState } from 'react';
import { Table, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import { actionFetchListOrderDetailsAPI } from '../../../Redux/Action/OrderDetailsAction';
// import ReactPaginate from 'react-paginate';
import { actionDeleteaccountAPI, actionFetchAccountAPI } from '../../../Redux/Action/AccountAction';
import { actionCloseForm, actionShowForm } from '../../../Redux/Action/UpdateOrderDetailsFormAction';

import axios from 'axios';
import ModalUpdate from './ModalUpdate';
// import { fetchAllUsers } from '../../../Redux/Action/AccountActionRedux';
// import { fetchAllUsers } from '../../../Redux/Action/AccountActionRedux';

function ResultFormAccount(props) {
  //Declare 
  let dispatch = useDispatch();
  let [editItem,setUpdateEditItem]=useState(null);
  let [dataSource, setDataSource] = useState([]);
  let listAccountAPI=useSelector((state)=>state.account.listAccount);
  // let totalPages = useSelector((state) => state.orderDetails.totalPages);
  // let currentPage = useSelector((state) => state.orderDetails.currentPage);
  // let pageSizeAPI = useSelector((state) => state.orderDetails.pageSize);
  // let total = useSelector((state) => state.orderDetails.total);
  // let [pageSize,setPageSize]=useState(5);
  // let [page, setPage] = useState(currentPage);
  // let [totalPage, setTotalPage] = useState(1);
  let [searchedText,setSearchedText]=useState("");


  //----------End Declare ----------

  //useEffect
  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(actionFetchAccountAPI());
  }, [dispatch]);
  // useEffect(() => {
  //   setTotalPage(totalPages);
  // }, [totalPages]);

  useEffect(() => {
    if (listAccountAPI) {
      setDataSource(listAccountAPI);
    }
  }, [listAccountAPI]);

  //--------End useEffect---------
  
  //Function
  // const handlePageChange = (page, pageSize) => {
  //   setPage(page);
  // };
  
  
  let onHandDelete = (id) => {
    dispatch(actionDeleteaccountAPI(id));
  }
  let onhandleEdit = (orderDetailsItem) => {
    dispatch(actionShowForm(orderDetailsItem));
    setUpdateEditItem({...orderDetailsItem});
  }
  //----------End Function ----------
  let columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
     
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      
    },
    {
      title: 'Phone ',
      dataIndex: 'phone',
      
    },
    {
      title: 'Ngày Tạo',
      dataIndex: 'date',
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    // {
    //   title: 'Edit',
    //   render: (text, record) => (
    //     <Button type="primary" onClick={() => onhandleEdit(record)}>Edit</Button>
    //   ),
    // },
    // {
    //   title: 'Delete',
    //   render: (text, record) => (
    //     <Button type="primary" onClick={() => onHandDelete(record.id)} >Delete</Button>
    //   ),
    // },
  ]
  let filteredDataSource = dataSource.filter((record) => {
    return (
      record.userName.includes(searchedText) || 
      (record.email.toString()).includes(searchedText) ||     
      (record.phone.toString()).includes(searchedText) ||
      (record.role.toString()).includes(searchedText)   ||  
      (record.date.toString()).includes(searchedText)      
    );
  });

  return (
    <>
    {/* -------------------------------Tiến làm 13/11/2023---------------------------------------- */}
    <h1>List Accounts</h1>
    {/* -------------------------------Tiến làm 13/11/2023---------------------------------------- */}
    <Input.Search placeholder="Search here ..." style={{marginBottom: 8}} onSearch={(value) => {setSearchedText(value)}} />
    <Table columns={columns} dataSource={filteredDataSource} 
        // pagination={{
        //   pageSize: pageSizeAPI,
        //   total: totalPages * pageSizeAPI,
        //   onChange: handlePageChange,
        //   showSizeChanger: false,
        //   showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        // }}
        rowKey="id"
      ></Table>
      <ModalUpdate editItem={editItem} />
      
      
      
    </>
  );
}


export default ResultFormAccount;
