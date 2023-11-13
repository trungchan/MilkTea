import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../Pages/Cart';

import Product from "./product/product.jsx";
import ProductDetail from '../Pages/ProductDetail';
import AdminPage from '../Pages/AdminPage';
import ResultFormProduct from '../Component/UIComponent/Product/ResultFormProduct';
import ResultFormProductPreview from '../Component/UIComponent/ProductPreview/ResultFormProductPreview';
import ResultFormOrder from '../Component/UIComponent/OrderListComponent/ResultFormOrder';
import ResultFormAccount from '../Component/UIComponent/Account/ResultFormAccount';
import Homepage from '../homepage/Home';
import Content from '../homepage/content';
import Login3 from '../login/login';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='Homepage' />} />
      <Route path="Homepage" element={<Homepage />} />

      <Route path="content" element={<Content />} />
      <Route path="product" element={<Product />} />
      <Route path="login" element={<Login3 />} />

      <Route path="Product" element={<Product />} />
      <Route path="/ProductDetail/:productid" element={<ProductDetail />} />
      <Route path="admin" element={<AdminPage />} />

      <Route path="cart" element={<Cart />} />
      {/* --------------------Adminpage-------------------- */}
      <Route path="admin/*" element={<AdminPage />}>
        <Route path="productadmin" element={<ResultFormProduct />} />
        <Route path="orderdetails" element={<ResultFormOrder />} />
        <Route path="account" element={<ResultFormAccount />} />
        <Route path="review" element={<ResultFormProductPreview />} />
      </Route>
    </Routes>

  );
}

export default Routers;

