import React, { useEffect, useState, useRef } from "react";
// import { useEffect, useState } from "react";
import { Button, Col, Pagination, Row } from "antd";
import { Card, List, Image } from "antd";
import ReactPaginate from "react-paginate";
// import {envApi} from './api'
import { productApi } from "./api";
// axios call api
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchProductAPI } from "../Redux/Action/ProductAction";
function product() {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const pageSize = 8;

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
 

  useEffect(() => {
    axios.get(`${productApi}?page=1&pageSize=9999`).then((res) => {
      setTotalProducts(res.data.totalElements);
      setTotalPages(Math.ceil(res.data.totalElements / pageSize));
    });
    callApi(current, pageSize);
  }, [current]); 

  const callApi = (page, pageSize) => {
    axios
      .get(`${productApi}?page=${page}&pageSize=${pageSize}`)
      .then((res) => {
        setData(res.data.content);
      })
      .catch((err) => console.log(err));
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrent(pageNumber);
  };

  let handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


//Phần có thể Bạn Thích trong Product Details
let listProductAPI = useSelector(state => state.product.listProduct);

let dispatch = useDispatch();

useEffect(() => {
  dispatch(actionFetchProductAPI(current, pageSize));
}, [dispatch, current, pageSize]);
//Kết thức phần có thể Bạn Thích trong Product Details

  return (
    <div>

      <Row>

        <Col span={20} offset={2}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 4 }}
            renderItem={(item) => (
              <Row style={{ paddingBottom: '10%' }}>
                <Col span={20}>
                  <Row justify="center">
                    <Image className="image-css" src={item.imageUrl} />
                  </Row>
                </Col>
                <Col span={20}>
                  <Row justify="center">
                    <Link to={`/ProductDetail/${item.id}`} onClick={handleScrollUp}>
                      <h4 className="h3-css" align="center">
                        {item.name}
                      </h4>
                    </Link>
                  </Row>
                </Col>
                <Col span={20}>
                  <Row justify="center">
                    <h5>Giá: {item.priceM.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
                  </Row>
                </Col>

              </Row>

            )}
          />
          <Row justify="center">
          <Pagination
              current={current}
              onChange={handlePageChange}
              pageSize={pageSize}
              total={totalProducts}
            />
          </Row>

        </Col>


      </Row>

    </div>
  );
}
export default product;
