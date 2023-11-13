import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { motion } from "framer-motion"
import "../style/product-detail.css";
import "../style/productcss.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useSelector, useDispatch } from 'react-redux';
import { actionAddToCart } from "../Redux/Action/AddToCartAction"
import { storeRedux } from "../Redux/StoreRedux/Store";
import { Link, useNavigate, useParams } from "react-router-dom";
import { actionProductByIDAPI } from "../Redux/Action/ProductAction";
import axios from "axios";
import { Rate,message } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { FaRegSmileWink, FaStar } from "react-icons/fa";
import Button from "antd-button-color";
import 'antd-button-color/dist/css/style.css';
import {actionAddProductReviewAPI} from '../Redux/Action/ProductPreviewAction';

function ProductDetail() {
  let [product, setProduct] = useState([]);
  let [tab, setTab] = useState("descript");

  let [selectedSize, setSelectedSize] = useState('M');
  let [selectedPrice, setSelectedPrice] = useState(0);
  let [count, setCount] = useState(1);
  let [ratingz, setRatingz] = useState(null);
  let [hover, setHover] = useState(null);
  let [productReview, setProductReview] = useState([]);
  let [listProductNotPage,setListProductNotPage]=useState([]);
  let [textReview, setTextReview] = useState(null);
  let [messageApi, contextHolder] = message.useMessage();

  let paramid = useParams();
  let productid = paramid.productid;
  const navigate = useNavigate();


  let fetchFoodDetail = () => {
    axios
      .get(`http://localhost:8080/api/v1/products/${productid}`, {
        headers: {
          //   Authorization: "Basic " + btoa("Username1:123456"),
          "content-type": "application/json",

        },
      })
      .then((res) => {
        setProduct(res.data);
        setSelectedPrice(res.data.priceM);

      });
  };
  useEffect(() => {
    let fetchProductList = () => {
      axios
        .get("http://localhost:8080/api/v1/products?page=0&size=9999", {
          headers: {
            // Authorization: "Basic " + btoa("Username1:123456"),
            "content-type": "application/json",
          },
        })
        .then((res) => {
          setListProductNotPage(res.data.content);
          
        })
        .catch((error) => {
          
          console.error('Error fetching product list: ', error);
        });
    };
  
    fetchProductList(); 
  }, []);




  
  useEffect(() => {
    // dispatch(actionProductByIDAPI(paramid.productid))
    fetchFoodDetail();
  }, [paramid.productid]);

  let handleSizeChange = (size) => {
    setSelectedSize(size);
    // Cập nhật giá tương ứng với kích thước được chọn
    if (size === 'M') {
      setSelectedPrice(product.priceM);
    } else if (size === 'L') {
      setSelectedPrice(product.priceL);
    }
  };

  // let dispatch = useDispatch(); 

  let increaseCount = () => {
    setCount(count + 1);
  };

  let decreaseCount = () => {
    if (count === 1) {
      
      return;
    }
    setCount(count - 1);
  };
  let [value, setValue] = useState('1');

  let handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let hanldeChangeCount=()=>{
    setCount(1);
  }
  const dispatch = useDispatch(); // Lấy hàm dispatch
  let id = localStorage.getItem("id");
  const [selectedItem, setSelectedItem] = useState();
  let addToCart = (item) => {
  if(id){
    storeRedux.dispatch(actionAddToCart({
      id: item.id,
      image: item.imageUrl,
      name: item.name,
      size: selectedSize,
      quantity: count,
      price: selectedPrice
    }));
    // navigate("/cart")
  }else{
        messageApi.open({
          type: 'success',
          content: 'Vui lòng đăng nhập',
          
        });
  }
};
  //listProduct

  //----------------Item productReview--------------------
  let accountId = localStorage.getItem("id");
  let itemProductReview={
  accountId:accountId,
  productsId:product.id,
  rating:ratingz,
  reviewText:textReview
};
let addNewReview=()=>{
  dispatch(actionAddProductReviewAPI(itemProductReview));
  setRatingz("");
  setTextReview("");
  messageApi.open({
    type: 'success',
    content: 'Cảm ơn bạn đã đánh giá cho sản phẩm',

  });
}

 //----------------End Item productReview--------------------
  let handleScrollUp = () => {
    handleSizeChange('M');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hanldeChangeCount();
  }
  let listProduct = useSelector((state) => state.product.listProduct)
//------------------- get list review no pagination-------------------------
  let reviewDTo = [];
  if (listProductNotPage && listProductNotPage.length > 0) {
    reviewDTo = listProduct
      .filter((item) => item.id === product.id)
      .map((product, index) => product.productReviewsDTOS);
  }

  let items = "";

//-------------------End get list review no pagination-------------------------
  if (listProduct && listProduct.length > 0) {
    items = listProduct.filter((item) => item.categoryName === product.categoryName).map((product, index) => {

      // let productReviews = product.productReviewsDTOS;
      // setProductReview(productReviews);
      let url = "/ProductDetail/" + product.id;

      return (
        <Col lg="3" md="4" xs="4" key={product.id}>
          <div className="product_item">
            <div className="product_img">
              <Link to={url} onClick={handleScrollUp}> <motion.img
                whileHover={{ scale: 0.9 }}
                src={product.imageUrl}
                alt={product.name}
              /></Link>
            </div>
            <div className="p-2 product_info">
              <h3>
                {product.name}
              </h3>
            </div>
            <div className="food_cart-bottom d-flex align-items-center justify-content-between p-2">
              <span className="price">{product.priceM.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              <motion.span whileTap={{ scale: 1.2 }} onClick={() => addToCart(product)}>
                <i className="ri-add-line" />
              </motion.span>
            </div>
            <div className="food_cart-bottom d-flex align-items-center justify-content-between p-2">
              <span className="price"> {product.categoryName}</span>
            </div>
          </div>
        </Col>
      );
    });
  }


  return (
    <>{contextHolder}
      <section className="pt-5 trasua">
        <Container>
          <Row>
            <Col lg="6" className="item_detail">
              <img src={product.imageUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{product.name}.</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    {/* <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i> </span>
                  <span><i className="ri-star-s-fill"></i> </span>
                  <span><i className="ri-star-s-fill"></i> </span>
                  <span><i className="ri-star-half-s-line"></i></span> */}

                    <div className="sizeProduct">
                      <div>Size:</div>
                      <div className="radio">
                        <input
                          type="radio"
                          className="radio_input"
                          value={"M"}
                          name="Size"
                          id="SizeM"
                          checked={selectedSize === 'M'}
                          onChange={() => handleSizeChange('M')}
                        />
                        <label className="radio_lable" htmlFor="SizeM">
                          M
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          className="radio_input"
                          value={"L"}
                          name="Size"
                          id="SizeL"
                          checked={selectedSize === 'L'}
                          onChange={() => handleSizeChange('L')}
                        />
                        <label className="radio_lable" htmlFor="SizeL">
                          L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="product_price">
                  Giá: {selectedPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </p>
                <br />
                <div className="quantity">
                  <p>Số lượng:</p>
                  <div className="increanddecre">
                    <button className="decre" onClick={decreaseCount}>-</button>
                    <input type="text" name="count" id="" value={count} onChange={(e) => setCount(e.target.value)} className="count" />
                    <button className="incre" onClick={increaseCount}>+</button>
                  </div>

                </div>
                <div className="group_btn">
                  <button className="buy_btn" onClick={() => addToCart(product)} >
                    <i class="ri-shopping-cart-line"></i> Thêm vào Giỏ Hàng
                  </button>
                  <Link to="/cart"><button className="buy_btn_mua" onClick={() => addToCart(product)}>
                    Mua Ngay
                  </button></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Mô Tả Sản Phẩm" className="descript" value="1" />
                      <Tab label="Hướng Dẫn " value="2" />
                      <Tab label="Đánh Giá" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1"> {product.description}</TabPanel>
                  <TabPanel value="2">
                    <div>
                      <p><b>Bước 1:</b>  Truy cập website và lựa chọn sản phẩm cần mua để mua hàng</p>

                      <p><b>Bước 2:</b> Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau</p>
                      <p> Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</p>
                      <p>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng</p>

                      Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán <br />

                      <p><b>Bước 3:</b> Lựa chọn thông tin tài khoản thanh toán</p>
                      <p>Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống</p>
                      <p>Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình </p>
                      <p>Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản </p>
                      <p><b>Bước 4:</b> Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình</p>
                      <p><b>Bước 5</b>: Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng </p>
                      <p>Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn. </p>
                      <p>Trân trọng cảm ơn.</p>
                    </div>
                  </TabPanel>
                  <TabPanel value="3">
                    <div className="product_review mt-5">
                      <div >
                      {/* className="review_wrapper" */}
                        <ListGroup>
                          <ListGroupItem>
                            <span>
                              {reviewDTo.map((reviews, index) => (
                                <div key={index}>
                                  {reviews.map((review, reviewIndex) => (
                                    <div key={reviewIndex}>
                                      <p>Đánh giá: <b>{review.reviewText}</b></p>
                                      <p>Điểm đánh giá: <Rate disabled value={review.rating} /> </p>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </span>
                          </ListGroupItem>
                        </ListGroup>
                        <div className="review_form ">
                          <h4>LEAVE YOUR EXPERIENCE</h4>
                          <form action="">
                            <div className='form_group d-flex align-items-center gap-3 rating_group rating_group'>
                              <b>Đánh giá của bạn về sản phẩm:</b> {[...Array(5)].map((star, index) => {
                                const currentRate = index + 1
                                return (
                                  <>
                                    <label>
                                      <input type="radio" name="ratingz"
                                        value={currentRate}
                                        onClick={() => setRatingz(currentRate)} />
                                      <FaStar size={30}
                                        color={currentRate <= (hover || ratingz) ? "#ffc107" : "e4e5e9"}
                                        onMouseEnter={() => setHover(currentRate)}
                                        onMouseLeave={() => setHover(null)}
                                      />

                                    </label>
                                  </>
                                )

                              })}
                            </div>
                            {/* <div className="form_group">
                              <input type="text" placeholder="Enter yourname" />
                            </div> */}

                            <div className="form_group d-flex align-items-center gap-5 rating_group"></div>
                            <div className="form_group">
                              <textarea value={textReview}
                                type="text" onChange={(e)=>setTextReview(e.target.value)}
                                placeholder="Review message..."
                              />
                            </div>
                            <Button type="success" onClick={()=>addNewReview()}>Gởi Đánh giá </Button>
                            {/* <button type="submit" className="buy_btn_review">
                              Submit
                            </button> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </Col>
            <Col lg="12">
              <h2 className="related_title mt-5">CÓ THỂ BẠN THÍCH</h2>
            </Col>
            <Col className='relative_food d-flex align-items-center gap-5 flex-wrap ' >
              {items}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProductDetail;
