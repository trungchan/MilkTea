// import { createTheme } from '@mui/material/styles';

// const theme1 = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     // Add more color configurations if necessary
//   },
//   // Add other theme configurations
// });

// export default theme1;


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage/Home.jsx";
import Login from "./login/login.jsx";

// ... (other imports)

import { createTheme } from '@mui/material/styles'; // Import createTheme here
import { Provider } from "react-redux";
import { storeRedux } from "./Redux/StoreRedux/Store.jsx";
import { ThemeProvider } from "@emotion/react";

const theme1 = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    // Add more color configurations if necessary
  },
  // Add other theme configurations
});

//  cấu hình các đường dẫn trình duyện trong web
const router = createBrowserRouter([
  // ... (router configurations)
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <ThemeProvider theme={theme1}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

export default theme1; // Export your theme for usage elsewhere
