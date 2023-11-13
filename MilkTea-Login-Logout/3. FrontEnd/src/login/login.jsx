import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./index.js";
import { useState } from "react";
import LoginItem from "./loginItem";
import RegisterItem from "./registerItem";
import imgLogin from "../assets/Login.jpg";

import "./login.css";

const Login3 = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    
    <MDBContainer className="my-5">
      <MDBCard className="">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={imgLogin}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBCardImage
                  src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/logo.png?1695629614469"
                  alt="icon Quantrimang.com"
                  width="50"
                  height="50"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0 mx-2">TeaSip</span>
              </div>
              {isRegistering ? <RegisterItem /> : <LoginItem />}
              
              {isRegistering ? (
                <p
                  className="mb-5 pb-lg-2"
                  style={{
                    color: "#393f81",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  Already have an account?{" "}
                  <a
                    href="#!"
                    style={{ color: "#393f81" }}
                    onClick={() => setIsRegistering(false)}
                  >
                    Login here
                  </a>
                </p>
              ) : (
                <p
                  className="mb-5 pb-lg-2"
                  style={{
                    color: "#393f81",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  Dont have an account?{" "}
                  <a
                    href="#!"
                    style={{ color: "#393f81" }}
                    onClick={() => setIsRegistering(true)}
                  >
                    Register here
                  </a>
                </p>
              )}
              <div className="d-flex flex-row justify-content-start">
                <h2 href="#!" className="small text-muted me-1">
                  Terms of use.
                </h2>
                <h2 href="#!" className="small text-muted">
                  Privacy policy
                </h2>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
    
  );
};

export default Login3;
