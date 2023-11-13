import React, { useState }  from "react";
import { Outlet, useNavigate, useLoaderData, Link, } from "react-router-dom";
import { Layout, Button, Space, Input, Row, Col, Image, Flex } from "antd";
import Logo from "../assets/Logo.webp";
import Footers from "./footer";
import { ShoppingTwoTone, UserOutlined } from "@ant-design/icons";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
// import Cart from "../Pages/Cart";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionFetchListProductThunk } from "../Redux/Action/ProductAction";

const { Header} = Layout;
const { Search } = Input;



function Homepage() {
  const items = [
    {
      label: "Đăng nhập",
      key: "1",
    },
    {
      label: "Đăng ký",
      key: "2",
    },
    {
      label: "Đăng xuất",
      key: "3",
      danger: true,
    },
  ];

  // lấy dữ liệu vào đường dẫn chính

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let searchProductList = (value) => {
    axios
      .get("http://localhost:8080/api/v1/products?page=0&size=5", {
        params: {
          search: value
        },
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch(actionFetchListProductThunk(res.data.content));
        // dispatch(setData(res.data.content));
        navigate('/product')
      })
      .catch((error) => {
        
        console.error('Error fetching product list: ', error);
      });
  };

  const loginclick = () => {
    navigate('/login');
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate('/');
  }

  const productOnclick = () => {
    navigate('/product');
  }
  //Tiến làm
  const cart = () => {
    navigate('/cart');


  }
  const homepage = () => {
    navigate('/');
  }

  const menuProps = {
    items,
  };
  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("user");



  return (
    <div>
      <Layout>
        <Header className="headerStyle">
          <Row className="headerStyle" justify="space-around" align="middle">
            <Col span={2}>
              <Image src={Logo} />
            </Col>
            <Col span={8}>
              <h4>Trà sữa siêu nhân</h4>
            </Col>
            <Col span={8}>
              <Col span={8}>
              <Search
      placeholder="Tìm kiếm sản phẩm"
      onSearch={searchProductList}
      style={{
        width: 200,
      }}
    />
              </Col>
            </Col>
            {/* -------------------- Tiến làm-------------------- */}
            <Flex wrap="wrap" gap="small">
              {role === 'ADMIN' && (
                <h3><Link to={'/admin'}><RiUserSettingsLine /></Link></h3>
              )}
              <h2><Link to={'/cart'}><ShoppingTwoTone /> </Link></h2>

            </Flex>

            <Col span={2}>
              {/* <Dropdown menu={menuProps}> */}
              {id ? userName : (
                <Button onClick={loginclick} >
                  <Space>
                    Login
                    {/* <DownOutlined /> */}
                  </Space>
                </Button>
              )}
              {/* </Dropdown> */}
            </Col>
            <Col span={0.1}>
              {id && (
                <h2 onClick={logout} style={{ cursor: "pointer" }}><IoIosLogOut /></h2>
              )}
            </Col>
          </Row>
        </Header>
        <div className="home-page">
          <Row  >
            <Col span={2} />
            <Col span={2} onClick={homepage}>
              <h5 style={{ cursor: "pointer" }}>Home</h5>
            </Col>
            <Col span={2} onClick={productOnclick}>
              <h5 style={{ cursor: "pointer" }}>Sản phẩm</h5>
            </Col>
            <Col span={2}>
              <h5>Ưu đãi</h5>
            </Col>
            <Col span={2}>
              <h5>Khóa học</h5>
            </Col>
          </Row>
        </div>
        <div id="detail">

          <Outlet />
        </div>
        <div>
          <Footers />
        </div>
      </Layout>
    </div>
  );
}
export default Homepage;
