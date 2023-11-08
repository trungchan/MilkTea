import React, {useEffect, useState} from 'react';
import "../style/slidebar.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { CoffeeOutlined, ShoppingCartOutlined, StarOutlined, TeamOutlined} from "@ant-design/icons";
import ResultFormOrder from '../Component/UIComponent/OrderListComponent/ResultFormOrder';
import { Menu } from 'antd';

function Slidebar(props) {
  const location = useLocation();
    const [activeTab, setActiveTab] = useState("product");
    let  [selectedKeys, setSelectedKeys] = useState("/");
    const handleTabChange = (event) => {
      setActiveTab(event.target.value);
    };
    
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
    let  navigate = useNavigate();

    return (
      <div className="SideMenu">
        <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Product",
            icon: <CoffeeOutlined />,
            key: "productadmin",
          },
          {
            label: "Order",
            key: "orderdetails",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Account",
            key: "account",
            icon: <TeamOutlined />,
          },
          {
            label: "Review",
            key: "review",
            icon: <StarOutlined /> ,
          },
        ]}
      ></Menu>
        {/* <ul>
          <li>
            <a href="#" onClick={handleTabChange} value="product">Sản phẩm</a>
          </li>
          <li>
            <a href="#" onClick={handleTabChange} value="order">Đơn hàng</a>
          </li>
          
          <li>
            <a href="#" onClick={handleTabChange} value="user">Người dùng</a>
          </li>
         
        </ul> */}
      </div>
    );
   
}

export default Slidebar;