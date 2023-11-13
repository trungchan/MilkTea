import React, { useEffect, useState } from 'react';
import ResultFormItem from './ResultFormItem';
import { Table, Button, Input, Modal, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchListOrderDetailsAPI } from '../../../Redux/Action/OrderDetailsAction';
import ReactPaginate from 'react-paginate';
import { actionFetchDeleteOrderDetailsAPIbyID } from '../../../Redux/Action/OrderDetailsAction';
import { actionCloseForm, actionShowForm } from './../../../Redux/Action/UpdateOrderDetailsFormAction';
import ModalUpdate from './ModalUpdate';
import axios from 'axios';
import "./../../../style/orderDetailForm.css";
function ResultFormOrder(props) {
  //Declare 
  let dispatch = useDispatch();
  let listOrderDetailsAPI = useSelector((state) => state.orderDetails.listOrderDetails);
  let [editItem, setUpdateEditItem] = useState(null);
  let [dataSource, setDataSource] = useState([]);
  let totalPages = useSelector((state) => state.orderDetails.totalPages);
  let currentPage = useSelector((state) => state.orderDetails.currentPage);
  let pageSizeAPI = useSelector((state) => state.orderDetails.pageSize);
  let total = useSelector((state) => state.orderDetails.total);
  let [pageSize, setPageSize] = useState(5);
  let [page, setPage] = useState(currentPage);
  let [totalPage, setTotalPage] = useState(1);
  let [searchedText, setSearchedText] = useState("");
  let [messageApi, contextHolder] = message.useMessage();
  let [totalElement, setTotalElements] = useState('');

  //----------End Declare ----------

  //useEffect
  useEffect(() => {
    dispatch(actionFetchListOrderDetailsAPI(page, pageSize));
  }, [dispatch, page, pageSize]);

  useEffect(() => {
    setTotalPage(totalPages);
  }, [totalPages]);

  useEffect(() => {
    setDataSource(listOrderDetailsAPI);
  }, [listOrderDetailsAPI]);

  useEffect(() => {

    let fetchProductList = () => {
      axios
        .get("http://localhost:8080/api/v1/Orderdetails", {
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

    dispatch(actionFetchListOrderDetailsAPI(page, pageSize));
    fetchProductList();
  }, [dispatch, page, pageSize]);
  console.log(totalElement);
  //--------End useEffect---------

  //Function
  const handlePageChange = (page, pageSize) => {
    setPage(page);
  };

  let fecthOrderDetails = () => {
    dispatch(actionFetchListOrderDetailsAPI(page, pageSize));
  }
  let onHandDelete = (id) => {
    Modal.confirm({
      title: "Bạn có muốn Xóa Sản phẩm này?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch(actionFetchDeleteOrderDetailsAPIbyID(id))
          .then(() => {


            messageApi.open({
              type: 'success',
              content: 'Sản Phẩm Đã Xóa',

            });
            fecthOrderDetails();
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
    });

  }
  let onhandleEdit = (orderDetailsItem) => {
    dispatch(actionShowForm(orderDetailsItem));
    setUpdateEditItem({ ...orderDetailsItem });
  }
  //----------End Function ----------
  let columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'productsName',
      
    },
    {
      title: 'Số Lượng',
      dataIndex: 'quantity',
     
    },
    {
      title: 'Kích Thước',
      dataIndex: 'size',
     
    },
    {
      title: 'Giá Tiền',
      dataIndex: 'unitPrice',
      render: (text) => (
        text.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
      ),
    },
    // {
    //   title: 'Edit',
    //   render: (text, record) => (
    //     <Button type="primary" onClick={() => onhandleEdit(record)}>Edit</Button>
    //   ),
    // },
    {
      title: 'Delete',
      render: (text, record) => (
        <Button type="primary" onClick={() => onHandDelete(record.id)} >Delete</Button>
      ),
    },
  ]
  let filteredDataSource = dataSource.filter((record) => {
    return (
      record.productsName.includes(searchedText) ||
      (record.quantity.toString()).includes(searchedText) ||
      (record.size.toString()).includes(searchedText)
    );
  });

  return (
    <>
      <h1>List Orders</h1>
      <div className="searchContainer">
        <Input.Search placeholder="Search here ..." style={{ marginBottom: 8 }} onSearch={(value) => { setSearchedText(value) }} className='searchInput' />
        {contextHolder}
        <Table columns={columns} dataSource={filteredDataSource}
          summary={() => (
            <Table.Summary >
              {/* <Table.Summary.Row> */}
              <Table.Summary.Cell index={3} colSpan={26}> <p className="totalAmout">{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p></Table.Summary.Cell>
              {/* </Table.Summary.Row> */}
            </Table.Summary>
          )}
          pagination={{
            pageSize: pageSizeAPI,
            total: totalElement,
            onChange: handlePageChange,
            showSizeChanger: false,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
          rowKey="id"
        ></Table>
        <ModalUpdate editItem={editItem} listOrderDetailsAPI={listOrderDetailsAPI} />

      </div>


    </>
  );
}


export default ResultFormOrder;
