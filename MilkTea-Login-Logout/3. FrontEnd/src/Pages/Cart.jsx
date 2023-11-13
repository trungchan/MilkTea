import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddToCart, actionDecrement, actionDeleteItem, actionIncrement } from "../Redux/Action/AddToCartAction";
import "../style/cart.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RiArrowGoBackFill} from "react-icons/ri";
import { RiCheckFill} from "react-icons/ri";

// import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
// import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
const Cart = () => {
  const cartAddItem = useSelector((state) => state.addToCart.listItem);
  let totalAmount = useSelector((state) => state.addToCart.totalAmount);
  const dispatch = useDispatch();
  const decreaseQuantity = (id) => {
    dispatch(actionDecrement(id));
  };

  const increaseQuantity = (id) => {
    dispatch(actionIncrement(id));
  };

  const getTotalPrice = () => {
    return cartAddItem.reduce((total, item) => (total + item.quantity * item.price), 0);
  };



  const ProductItem = ({ item }) => {
    const deleteProduct = (id) => {
      dispatch(actionDeleteItem(id));
    };
    return (
      <tr>
        <td> {item.id}</td>
        <td style={{ width: '180px' }}>
          <img src={item.image} alt={item.name} />
        </td>
        <td style={{ width: '250px' }}>

          {item.name} <br />
          {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} <br />
          {item.size}

        </td>
        {/* <td className="cart-product-quantity"> */}
        <td>
          <div className="count">{item.quantity}</div>
        </td>
        {/* <button className="btn" onClick={() => decreaseQuantity(item.id)}>-</button> */}

        {/* <button onClick={() => increaseQuantity(item.id)}>+</button> */}
        {/* </td> */}
        <td style={{ width: '250px' }} className="totalPrice">{(item.quantity * item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
        <td style={{ width: '250px' }}>
          <button className="btn_delete" onClick={() => deleteProduct(item.id)}>X</button>
        </td>
      </tr>
    );
  };
  console.log(totalAmount);
  return (
    <div className="cart">
      <p className="cart_Title">GIỎ HÀNG CỦA BẠN</p>
      <table className="table bordered">
        <tbody>
          {cartAddItem.map((item, index) => <ProductItem item={item} key={item.id} />)}
        </tbody>
      </table>
      <div className="cart-total">
        <span>Tổng tiền : </span>
        <span className="total1">{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>

      </div>
      <div className="group_btn_cart">
        <Link to="/product"><Button type="primary" shape="round" className="larger-button" >
        <RiArrowGoBackFill/>Tiếp tục mua hàng
        </Button></Link>
        
        <Link to="/payment"><Button type="primary" shape="round" className="larger-button" >
        <RiCheckFill/>Tiến Hành Thanh Toán
        </Button></Link>
      {/* <button className="buy_btn_mua"  >
        <Link to="/product"> Tiếp tục mua hàng</Link>
      </button>
      <button className="buy_btn_mua">
        <Link to="/payment"> Tiến Hành Thanh Toán</Link>
      </button> */}
    </div>
    </div >
  );
};

export default Cart;
