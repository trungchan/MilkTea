import React, { useEffect, useState } from 'react';
import { Table, Button, Input, Rate, message, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { actionCloseForm, actionShowForm } from '../../../Redux/Action/UpdateOrderDetailsFormAction';
import ModalUpdate from '../ProductPreview/ModalUpdate';
import axios from 'axios';
import { actionDeleteProductReviewAPI, actionFetchProductReviewAPI } from '../../../Redux/Action/ProductPreviewAction';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
function ResultFormProductPreview(props) {
  //Declare 
  let dispatch = useDispatch();
  let listProductPreview = useSelector((state) => state.productpreview.listProductPreview);
  let [editItem, setUpdateEditItem] = useState(null);
  let [dataSource, setDataSource] = useState([]);
  let totalPages = useSelector((state) => state.productpreview.totalPages);
  let currentPage = useSelector((state) => state.productpreview.currentPage);
  let pageSizeAPI = useSelector((state) => state.productpreview.pageSize);
  let total = useSelector((state) => state.productpreview.total);
  let [totalElement, setTotalElements] = useState('');
  //Message
  let [messageApi, contextHolder] = message.useMessage();

  let [pageSize, setPageSize] = useState(5);
  let [page, setPage] = useState(currentPage);
  let [totalPage, setTotalPage] = useState(1);
  let [searchedText, setSearchedText] = useState("");
  let customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };


  //----------End Declare ----------

  //useEffect
  useEffect(() => {
    dispatch(actionFetchProductReviewAPI(page, pageSize));
  }, [dispatch, page, pageSize]);

  useEffect(() => {
    setTotalPage(totalPages);
  }, [totalPages]);

  useEffect(() => {
    setDataSource(listProductPreview);
  }, [listProductPreview]);

  useEffect(() => {

    let fetchProductList = () => {
      axios
        .get("http://localhost:8080/api/v1/ProductReviews", {
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

    dispatch(actionFetchProductReviewAPI(page, pageSize));
    fetchProductList();
  }, [dispatch, page, pageSize]);
  //--------End useEffect---------

  //Function
  const handlePageChange = (page, pageSize) => {
    setPage(page);
  };

  let fetchReview = () => {
    dispatch(actionFetchProductReviewAPI(page, pageSize));
  }
  let onHandDelete = (id, page, pageSize) => {
    Modal.confirm({
      title: "Bạn có muốn Xóa Sản phẩm này?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch(actionDeleteProductReviewAPI(id))
          .then(() => {

            fetchReview();
            messageApi.open({
              type: 'success',
              content: 'Bình Luận Đã  Bị Xóa',

            });
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
    });


  }
  let onhandleEdit = (orderDetailsItem) => {

    setUpdateEditItem({ ...orderDetailsItem });

  }
  //----------End Function ----------
  let columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Account ID',
      dataIndex: 'accountId',

    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'productsProductName',

    },
    {
      title: 'Đánh Giá',
      dataIndex: 'rating',
      render: (rating) => (
        // <Rate disabled defaultValue={rating} />

        <Rate disabled defaultValue={rating} character={({ index }) => customIcons[index + 1]} />

      )

    },
    {
      title: 'Nội Dung Đánh Giá',
      dataIndex: 'reviewText',
    },
    {
      title: 'Ngày Đánh Giá',
      dataIndex: 'reviewDate',
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
    let searchTextLowerCase = searchedText.toLowerCase();
    return (
      (record?.reviewText?.toString()?.toLowerCase().includes(searchTextLowerCase)) ||
      (record?.reviewDate?.toString()?.toLowerCase().includes(searchTextLowerCase)) ||
      (record?.productsProductName?.toString()?.toLowerCase().includes(searchTextLowerCase)) ||
      (record?.rating?.toString()?.toLowerCase().includes(searchTextLowerCase))
    );
  });


  return (
    <>
      <h1>List Reviews</h1>
      <Input.Search placeholder="Search here ..." style={{ marginBottom: 8 }} onSearch={(value) => { setSearchedText(value) }} />
      {contextHolder}
      <Table columns={columns} dataSource={filteredDataSource}
        pagination={{
          pageSize: pageSizeAPI,
          total: totalElement,
          onChange: handlePageChange,
          showSizeChanger: false,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        rowKey="id"
      ></Table>
      <ModalUpdate editItem={editItem} />


    </>
  );
}


export default ResultFormProductPreview;
