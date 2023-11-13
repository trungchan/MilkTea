import React, { useEffect, useState } from 'react';
import "../style/payment.css";
import { Form, FormGroup, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { Badge } from 'antd';
import axios from 'axios';
import { actionAddNewOrderDetailAPI } from '../Redux/Action/OrderDetailsAction';
import { actionAddPAYMENTAPI } from '../Redux/Action/PaymentAction';
import { actionAddNewOrderAPI, actionFetchOrderAPI } from '../Redux/Action/OrderAction';
import { message } from 'antd';
import 'antd-button-color/dist/css/style.css';
import '../style/payment.css';
import { actionDeleteAllList } from '../Redux/Action/AddToCartAction';

function Payment() {
  //--------------------------Declare variable ---------------------------------
  let dispatch = useDispatch();
  let cartAddItem = useSelector((state) => state.addToCart.listItem);
  let quantity = useSelector((state) => state.addToCart.totalQuantity);
  let getTotalPrice = () => {
    return cartAddItem.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  let [name, setName] = useState(null);
  let [email, setEmail] = useState(null);
  let [phoneNumber, setPhoneNumber] = useState(null);
  let [address, setAddress] = useState(null);
  let [bankNumber, setBankNumber] = useState(null);
  let [messageApi, contextHolder] = message.useMessage();

  let PaymentTypes = {
    COD: 'COD',
    BANKING: 'BANKING'
  };
  let [selectedPaymentType, setSelectedPaymentType] = useState("COD");
  let totalAmount = useSelector((state) => state.addToCart.totalAmount);
  //Lấy Id của người dùng đăng nhập vào
  let accountId = localStorage.getItem("id");
console.log(accountId);
  // lấy id order
  let [order, setOrder] = useState([]);
  //tạo fetch lấy API của order
  let [listOrderNoPage, setListOrderNoPage] = useState([]);
  //--------------------------End Declare variable ---------------------------------

  //--------------------------UseEffect Update state ---------------------------------
  let fetchOrderList = async () => {
    try {
      const { data } = await axios
        .get("http://localhost:8080/api/v1/Orders?page=0&size=9999", {
          headers: {
            // Authorization: "Basic " + btoa("Username1:123456"),
            "content-type": "application/json",
          },
        })
      setListOrderNoPage(data.content);
      return data.content
    } catch (error) {
      console.error('Error fetching product list: ', error);
    }
    // .catch((error) => {

    //   console.error('Error fetching product list: ', error);
    // });
  };
  useEffect(() => {
    fetchOrderList();
  }, []);


  //--------------------------End UseEffect Update state ---------------------------------

  //--------------------------Item insert Data to table ---------------------------------
  //Item add to orderDetails
  // let ItemNewOrderDetail = cartAddItem.reduce((acc, item) => {
  //   return {
  //     ...acc,
  //     ordersId: order,
  //     productId: item.id,
  //     quantity: item.quantity,
  //     size: item.size,
  //     unitPrice: item.totalPrice,
  //   };
  // }, {});
  let ItemNewOrderDetail = cartAddItem.map((item) => {
    return {
      ordersId: order,
      productId: item.id,
      quantity: item.quantity,
      size: item.size,
      unitPrice: item.totalPrice,
    };
  });
  // let userObj = Object.fromEntries(ItemNewOrderDetail);
 
  


  //Item add to Payments
  let ItemNewPayment = {
    name: name,
    orderId: order,
    address: address,
    phone: phoneNumber,
    email: email,
    bankNumber: bankNumber,
    totalPayment: totalAmount,
    typePay: selectedPaymentType,
  };
 
  //--------------------------End Item insert Data to table ---------------------------------

  //--------------------------Function Insert data to table ---------------------------------
  //Account id
  //Function Add Item

  // let addNewOrder = () => {
  //   let userId = {
  //     accountId
  //   }
  //   axios
  //     .post("http://localhost:8080/api/v1/Orders", userId, {
  //       headers: {
  //         // Authorization: "Basic " + btoa("Username1:123456"),
  //         "content-type": "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.content);
  //     })
  //     .catch((error) => {

  //       console.error('Error fetching product list: ', error);
  //     });
  // };


  //-------------------- Take the last ID in the list order--------------------------
  // useEffect(() => {
  //   // addNewOrder();
  //   if (listOrderNoPage.length > 0) {
  //     let lastOrderId = listOrderNoPage[listOrderNoPage.length - 1].id;
  //     setOrder(lastOrderId);
  //   }
  // }, [listOrderNoPage]);
  //-------------------- End Take the last ID in the list order--------------------------

  let handlePayment = async () => {
    try {
      //  addNewOrder();
      dispatch(actionAddNewOrderAPI(accountId));
      const listOrder =  await fetchOrderList()
      // if (listOrder.length > 0) {
        let lastOrderId = listOrder[listOrder.length - 1].id;
        setOrder(lastOrderId);
      // }

      // Once the order is created, use the obtained order ID
      // let newOrderID = order;
 
      // Prepare data for OrderDetail
      let ItemNewOrderDetail = cartAddItem.map((item) => {
        return {
          ordersId: lastOrderId,
          productId: item.id,
          quantity: item.quantity,
          size: item.size,
          unitPrice: item.totalPrice,
        };
      });

      // Dispatch action to add order details
       dispatch(actionAddNewOrderDetailAPI(ItemNewOrderDetail));

      // Prepare data for Payment
      let ItemNewPayment = {
        name,
        orderId: lastOrderId,
        address,
        phone: phoneNumber,
        email,
        bankNumber,
        totalPayment: totalAmount,
        typepay: selectedPaymentType,
      };

      // Dispatch action to add payment
        dispatch(actionAddPAYMENTAPI(ItemNewPayment));
      dispatch(actionDeleteAllList());
      setName("");
      setAddress("");
      setPhoneNumber("");
      setEmail("");
      setBankNumber("")
    } catch (error) {
      console.error('Error handling payment: ', error);
    }
    messageApi.open({
      type: 'success',
      content: 'Đặt hàng Thành Công',

    });
  };

  //--------------------------End Function insert Data to table ---------------------------------

  return (
    <div>
      <div className='Container'>

        <Form>
          <h5>Thông tin nhận hàng</h5>
          <br />
          <FormGroup>
            <Input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <br />
          <FormGroup>
            <Input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <br />
          <FormGroup>
            <Input type="text" placeholder='phone_number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </FormGroup>
          <br />
          <FormGroup>
            <Input type="text" placeholder='address' value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormGroup>
          <br />
          <FormGroup>
            <select name="" id="" value={selectedPaymentType} onChange={(e) => setSelectedPaymentType(e.target.value)}>
              {/* <option value="All">Lựa Chọn Thanh Toán</option> */}
              <option value={PaymentTypes.COD}>COD</option>
              <option value={PaymentTypes.BANKING}>Chuyển Khoản</option>
            </select>
          </FormGroup>
          <br />
          <FormGroup>
            <Input type="text" placeholder='bank_number' value={bankNumber} onChange={(e) => setBankNumber(e.target.value)} />
          </FormGroup>
          <br />

        </Form>

        <div className="cart1">
          <p className="cart_Title">Đơn hàng </p>
          <table className="table1 bordered">
            <tbody>
              {cartAddItem.map((item) => (
                <tr key={item.id}>
                  <td style={{ width: '180px' }}>

                    <img src={item.image} alt="" />
                    <Badge size="large" count={item.quantity} style={{ backgroundColor: '#52c41a' }} className='badge_count1' >
                    </Badge>

                  </td>
                  <td style={{ width: '100px' }}>
                    {item.name} <br />
                    {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} <br />
                    {item.size}
                  </td>
                  <td style={{ width: '50px' }} className="totalPrice">{((item.price) * (item.quantity)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <span>Tổng tiền : </span>
            <span>{getTotalPrice().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            {contextHolder}
          </div>
          <Button type="primary" size={'large'} onClick={() => handlePayment()}>
            ĐẶT HÀNG
          </Button>
          {/* <Button color="primary" className='custom-button' onClick={() => handlePayment()} >  ĐẶT HÀNG  </Button> */}
        </div>

      </div>


    </div>
  );
}

export default Payment;
