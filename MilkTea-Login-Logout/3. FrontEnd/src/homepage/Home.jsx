import React, { useState } from "react";
import { Outlet, useNavigate, useLoaderData, Link } from "react-router-dom";
import { Layout, Button, Space, Input, Row, Col, Image, Flex } from "antd";
import Logo from "../assets/Logo.webp";
import Footers from "./footer";
import {
  DownOutlined,
  PhoneOutlined,
  ShoppingTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
// import Cart from "../Pages/Cart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionFetchListProductThunk } from "../Redux/Action/ProductAction";

const { Header } = Layout;
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
          search: value,
        },
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        dispatch(actionFetchListProductThunk(res.data.content));
        // dispatch(setData(res.data.content));
        navigate("/product");
      })
      .catch((error) => {
        console.error("Error fetching product list: ", error);
      });
  };

  const loginclick = () => {
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/");
  };

  const productOnclick = () => {
    navigate("/product");
  };
  //Tiến làm
  const cart = () => {
    navigate("/cart");
  };
  const homepage = () => {
    navigate("/");
  };

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
            <Col>
              <PhoneOutlined
                style={{ color: "white", fontSize: "20px" }}
                className="mx-2"
              />
            </Col>
            <Col span={12}>
              <div style={{ color: "white", fontSize: "16px" }}>
                Hotline: 0999999999
              </div>
            </Col>
            <Col span={3} />
            <Col>
              <Search
                placeholder="Nhập tên tìm kiếm"
                allowClear
                size="large"
                onSearch={searchProductList}
              />
            </Col>

            {/* -------------------- Tiến làm-------------------- */}
            <Flex wrap="wrap" gap="small">
              {role === "ADMIN" && (
                <h3>
                  <Link to={"/admin"}>
                    <RiUserSettingsLine
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </Link>
                </h3>
              )}
              <h2>
                <Link to={"/cart"}>
                  <ShoppingTwoTone
                    style={{ color: "white", fontSize: "30px" }}
                  />{" "}
                </Link>
              </h2>
            </Flex>

            <Col span={2}>
              {/* <Dropdown menu={menuProps}> */}
              {id ? (
                <div style={{ color: "white", fontSize: "16px" }}>{userName}</div>
              ) : (
                <Button onClick={loginclick}>
                  <Space>
                    {/* Login */}
                    <DownOutlined
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </Space>
                </Button>
              )}
              {/* </Dropdown> */}
            </Col>
            <Col span={0.1}>
              {id && (
                <h2 onClick={logout} 
                style={{ cursor: "pointer" }}
                >
                  <IoIosLogOut style={{ color: "white", fontSize: "30px" }} />
                </h2>
              )}
            </Col>
          </Row>
        </Header>
        <div className="home-page">
          <Row>
            <Col span={2} />

            <Col span={2} onClick={homepage} className="header-text">
              <h5 style={{ cursor: "pointer" }}>Home</h5>
            </Col>
            <Col span={2} onClick={productOnclick} className="header-text">
              <h5 style={{ cursor: "pointer" }}>Sản phẩm</h5>
            </Col>
            <Col span={2} className="header-text">
              <h5>Ưu đãi</h5>
            </Col>
            <Col span={3} className="header-text">
              <h5>Khóa học</h5>
            </Col>
            <Col span={4}>
              <Image src={Logo} />
            </Col>
            <Col span={2} className="header-text">
              <h5>Tin tức</h5>
            </Col>
            <Col span={2} className="header-text">
              <h5>Liên hệ</h5>
            </Col>
            <Col span={3} className="header-text">
              <h5>Hệ thống cửa hàng</h5>
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
