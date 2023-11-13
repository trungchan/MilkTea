import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import {addNewAccount} from "../Container/API/AccountAPI"
import { Button } from "antd";


function registerItem() {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async () => {
   // ngan reload lai trang, submit form
   const dataAccount = {email, phone, userName, password};
   console.log(addNewAccount(dataAccount));
   

  }
  return (
    
      <>
        <h4
          className="fw-normal my-4 pb-3 text-center"
          style={{ letterSpacing: "1px" }}
        >
          Register
        </h4>
        <MDBInput
          wrapperClass="mb-4"
          label="Username"
          id="formControlLg"
          type="text"
          size="lg"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <MDBInput
          wrapperClass="mb-4"
          label="Email"
          id="formControlLg"
          type="email"
          size="lg"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="formControlLg"
          type="password"
          size="lg"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // ref={inputRefPassword}
        />
        {/* <MDBInput
          wrapperClass="mb-4"
          label="Confirm Password"
          id="formControlLgConfirm"
          type="password"
          size="lg"
          ref={inputRefPassword}
        /> */}
       
        <MDBInput
          wrapperClass="mb-4"
          label="Phone Number"
          id="formControlLg"
          type="tel"
          size="lg"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="d-grid ">
                <Button className='button-color' onClick={handleSubmit}>Register</Button>
            </div>
      </>
    
  );
}

export default registerItem;
