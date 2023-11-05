import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage/Home.jsx";
import Login from "./login/login.jsx";

import "./homepage/Home.css";

import Product from "./product/product.jsx";

import ErrorPage from "./error/error-page.jsx";
import Content from "./homepage/content.jsx";

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
    <RouterProvider router={router} />
  </React.StrictMode>
);
