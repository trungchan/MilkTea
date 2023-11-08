import React, { useState } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/UserAPI";

function loginItem() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log("user::", userName);
  console.log("password", password);
  // Khai báo Hook useNavigate
  const navigate = useNavigate();
  const loginBody = { userName, password };
  const handleLogin = () => {
    loginRequest(loginBody)
      .then((res) => {
        console.log("res::", res);
        const token = res.token;
        const role = res.role;
        const userID = res.id;
        // Lưu token vào localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("id", userID);
        alert("Đăng nhập thành công");
        navigate("/");
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
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
      <MDBBtn
        className="mb-4 px-5"
        color="dark"
        size="lg"
        onClick={handleLogin}
      >
        Login
      </MDBBtn>
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
