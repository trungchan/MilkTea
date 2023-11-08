import React from "react";
import { Outlet, useNavigate, useLoaderData, Link, } from "react-router-dom";
import { Layout, Button, Space, Input, Row, Col, Image, Flex } from "antd";
import Logo from "../assets/Logo.webp";
import Footers from "./footer";
import {  ShoppingTwoTone, UserOutlined } from "@ant-design/icons";
import { RiUserSettingsLine } from "react-icons/ri";
// import Cart from "../Pages/Cart";

const { Header } = Layout;



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


  const loginclick = () => {
    navigate('/login');


  }

  const productOnclick = () => {
    navigate('/product');


  }
  const cart = () => {
    navigate('/cart');


  }
  const homepage = () => {
    navigate('/');


  }

  const menuProps = {
    items,
  };




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
                <Input placeholder="Tìm kiếm sản phẩm" />
              </Col>
            </Col>
            <Flex wrap="wrap" gap="small">
            <h3><Link to={'/admin'}><RiUserSettingsLine /></Link></h3>
            
            
            <h2><Link to={'/cart'}><ShoppingTwoTone /> </Link></h2>

            </Flex>
              
            

          
            <Col span={2}>
              {/* <Dropdown menu={menuProps}> */}
              <Button onClick={loginclick} >
                <Space>
                  Login
                  {/* <DownOutlined /> */}
                </Space>
              </Button>
              {/* </Dropdown> */}
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
