import React, { useState } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/UserAPI";
import { loginApi } from "../product/api";
import axios from "axios";
import { Button } from "antd";
function loginItem() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // Khai báo Hook useNavigate
  const navigate = useNavigate();
  
  const loginBody = { userName, password };
  const handleLogin = () => {
    const data = axios
      .post(loginApi, loginBody)
      .then((res) => {
        console.log(res);
        // Lưu token vào localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("user", res.data.userName);
        alert("Đăng nhập thành công");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h4
        className="fw-normal my-4 pb-3 text-center"
        style={{ letterSpacing: "1px" }}
      >
        Sign into your account
      </h4>
      <MDBInput
        wrapperClass="mb-4"
        id="formControlLg"
        size="lg"
        label="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="formControlLg"
        type="password"
        size="lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <div className="d-grid p-2 ">
                <Button className='button-color' onClick={handleLogin}>Sign in</Button>
            </div>
      {/* <MDBBtn
        className="mb-4 px-5"
        color="dark"
        size="lg"
        onClick={handleLogin}
      >
        Login
      </MDBBtn> */}
      <a
        href="#!"
        className="small text-muted mb-3"
        style={{ display: "block", textAlign: "center" }}
      >
        Forgot password?
      </a>
    </>
  );
}

export default loginItem;
