import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage/Home.jsx";
import Login from "./login/login.jsx";

import "./homepage/Home.css";

import Product from "./product/product.jsx";

import ErrorPage from "./error/error-page.jsx";
import Content from "./homepage/content.jsx";
import { Provider } from "react-redux";
import { storeRedux } from "./Redux/StoreRedux/Store.jsx";

import ProductDetail from "./Pages/ProductDetail.jsx";
import AdminPage from "./Pages/AdminPage.jsx";
import App from "./App.jsx";
import ResultFormProduct from "./Component/UIComponent/Product/ResultFormProduct.jsx";
import ResultFormOrder from "./Component/UIComponent/OrderListComponent/ResultFormOrder.jsx";
import ResultFormAccount from "./Component/UIComponent/Account/ResultFormAccount.jsx";
import ResultFormProductPreview from "./Component/UIComponent/ProductPreview/ResultFormProductPreview.jsx";
import Cart from "./Pages/Cart.jsx";
import Payment from "./Pages/Payment.jsx";

//  cấu hình các đường dẫn trình duyện trong web
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // báo lỗi khi không tìm thấy trang
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Content /> },
      {
        path: "/content",
        element: <Content />,
        // loader: contentLoader,
      },

      {
        path: "/product",
        element: <Product />,
      }, {
        path: "/ProductDetail/:productid",
        element: <ProductDetail />,
      },
      {
        path:"/cart",
         element:<Cart />,
      },
      {
        path:"/payment",
         element:<Payment />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "admin/*",
        element: <AdminPage />,
        children: [
          { path: "productadmin", element: <ResultFormProduct /> },
          { path: "orderdetails", element: <ResultFormOrder /> },
          { path: "account", element: <ResultFormAccount /> },
          { path: "review", element: <ResultFormProductPreview /> }
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
 
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
    <RouterProvider router={router} />
    </Provider>
   
    
    
  </React.StrictMode>
);
