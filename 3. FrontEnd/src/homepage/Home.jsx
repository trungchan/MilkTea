import React from "react";
import { Outlet, useNavigate, useLoaderData, } from "react-router-dom";
import { Layout,  Button, Space, Input, Row, Col, Image } from "antd";
import Logo from "../assets/Logo.webp";
// import { Outlet } from "react-router-dom";
// import Footers from "./footer";

const { Header} = Layout;



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
            <Col span={2} />
            <Col span={2}>
              <h5>Giỏ hàng</h5>
            </Col>
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
            <h5>Home</h5>
          </Col>
          <Col span={2} onClick={productOnclick}>
            <h5>Sản phẩm</h5>
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

          <Outlet/>
        </div>
      </Layout>
    </div>
  );
}
export default Homepage;
