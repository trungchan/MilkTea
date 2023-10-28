import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import './login.css'
import './index.js'

const Login3 = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const renderLoginForm = () => {
    // Giao diện đăng nhập
    return (
      <>
        <h1 className="fw-normal my-4 pb-3" style={{  color: '#10744a' ,letterSpacing: '0px' ,display: 'block', textAlign: 'center' }}>Sign into your account</h1>
        <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" />
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
        <a href="#!" className="small text-muted mb-3" style={{ display: 'block', textAlign: 'center' }}>Forgot password?</a>
      </>
    );
  };

  const renderRegisterForm = () => {
    // Giao diện đăng ký
    return (
      <>
        <h1 className="fw-normal my-4 pb-3" style={{  color: '#10744a' ,letterSpacing: '0px',display: 'block', textAlign: 'center' }}>Create an account</h1>
        <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" />
        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
        <MDBInput wrapperClass='mb-4' label='Confirm Password' id='formControlLgConfirm' type='password' size="lg" />
        <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" />
        <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' type='tel' size="lg" />
      </>
      
    );
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6' >
            <MDBCardImage src='https://bizweb.dktcdn.net/thumb/large/100/477/681/products/4-6d1315a3-51d7-44ad-bc8b-122d34127afe.jpg?v=1686653845910' alt="login form" className='rounded-start w-100' />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBCardImage src='https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/logo.png?1695629614469' alt="icon Quantrimang.com" width="50" height="50" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Trà Sữa</span>
              </div>
              {isRegistering ? renderRegisterForm() : renderLoginForm()}
              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>{isRegistering ? 'Register' : 'Login'}</MDBBtn>
              {isRegistering ? (
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81',display: 'block', textAlign: 'center' }}>Already have an account? <a href="#!" style={{ color: '#393f81' }} onClick={() => setIsRegistering(false)}>Login here</a></p>
              ) : (
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81',display: 'block', textAlign: 'center' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }} onClick={() => setIsRegistering(true)}>Register here</a></p>
              )}
              <div className='d-flex flex-row justify-content-start'>
                <h2 href="#!" className="small text-muted me-1">Terms of use.</h2>
                <h2 href="#!" className="small text-muted">Privacy policy</h2>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login3;