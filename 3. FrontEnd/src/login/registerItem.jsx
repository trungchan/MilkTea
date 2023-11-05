import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React from "react";

function registerItem() {
  return (
    
      <>
        <h4
          className="fw-normal my-4 pb-3 text-center"
          style={{ letterSpacing: "1px" }}
        >
          Register
        </h4>
        <MDBInput
          className="input-form"
          wrapperClass="mb-4"
          label="Email"
          id="formControlLg"
          type="email"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="formControlLg"
          type="password"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Confirm Password"
          id="formControlLgConfirm"
          type="password"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Username"
          id="formControlLg"
          type="text"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Phone Number"
          id="formControlLg"
          type="tel"
          size="lg"
        />
        <MDBBtn className="mb-4 px-5" color="dark" size="lg">
          Register
        </MDBBtn>
      </>
    
  );
}

export default registerItem;
