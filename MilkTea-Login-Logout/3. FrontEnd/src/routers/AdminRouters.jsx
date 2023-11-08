import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ResultFormOrder from '../Component/UIComponent/OrderListComponent/ResultFormOrder';
import ResultFormAccount from '../Component/UIComponent/Account/ResultFormAccount';
import ResultFormProduct from '../Component/UIComponent/Product/ResultFormProduct';
import ResultFormProductPreview from '../Component/UIComponent/ProductPreview/ResultFormProductPreview';

function AdminRouters(props) {
    return (
        <Routes>
            <Route index element={<ResultFormProduct />} />
            <Route path="productadmin" element={<ResultFormProduct />} />
            <Route path="orderdetails" element={<ResultFormOrder />} />
            <Route path="account" element={<ResultFormAccount />} />
            <Route path="review" element={<ResultFormProductPreview />} />
        </Routes>
    );
}

export default AdminRouters;
