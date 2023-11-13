import React, { useRef, useEffect, useState } from "react";
import Logo1 from "../assets/slider_1.webp";
import Logo2 from "../assets/slider_2.webp";
import ice1 from "../assets/ice-cream-1.jpg";
import { RightOutlined, LeftOutlined, UserOutlined } from "@ant-design/icons";
import { productApi } from "../product/api";
import axios from "axios";
import { Button, Row, Col, Image, Carousel, List, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

function Content() {
  // data list product
  const [data, setData] = useState([]);

  useEffect(() => {
    callapi();
  }, []);

  const callapi = () => {
    const data = axios
      .get(productApi)
      .then((res) => {
        console.log(res);
        setData(res.data.content);
      })
      .catch((err) => console.log(err));

    return () => data;
  };

  const carouselRef = useRef(null);
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const DemoBox = (props) => (
    <p className={`height-${props.value}`}>{props.children}</p>
  );
  let handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="contentStyle">
        <Carousel autoplay>
          <div>
            <Image src={Logo1} />
          </div>
          <div>
            <Image src={Logo2} />
          </div>
        </Carousel>

        <div className="div-css1">
          <h1 align="center" style={{ paddingBottom: "3%" }}>
            Danh sách sản phẩm{" "}
          </h1>
          <Carousel ref={carouselRef} slidesToShow={4} dots={false}>
            {data.map((item) => (
              <div>
                <Image className="image-css" src={item.imageUrl} />
                <h3 className="h3-css" align="center">
                  <Link
                    to={`/ProductDetail/${item.id}`}
                    onClick={handleScrollUp}
                  >
                    {item.name}
                  </Link>
                </h3>
              </div>
            ))}
          </Carousel>
          <div className="list_product">
            <Row>
              <Col span={12} align="end">
                <Button onClick={handlePrev}>
                  <LeftOutlined />
                </Button>
              </Col>
              <Col span={1}></Col>
              <Col span={10}>
                <Button onClick={handleNext}>
                  <RightOutlined />
                </Button>
              </Col>
            </Row>
          </div>
          <MDBCard background="dark" className="">
            <MDBCardImage
              overlay
              src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/bg_why.jpg?169847646133"
              alt="..."
            />

            <MDBCardOverlay>
              <MDBCardTitle className=" text-home-page ">
                TẠI SAO LẠI CHỌN CHÚNG TÔI
              </MDBCardTitle>
              <MDBCardText className="py-5 ">
                <div className="text-home-page-2 ">
                  Với những nghệ nhân tâm huyết và đội ngũ tài năng cùng những
                  câu <br />
                  chuyện trà đầy cảm hứng, ngôi nhà Winggo là không gian dành
                  cho <br />
                  tất cả mọi người.
                </div>
              </MDBCardText>
            </MDBCardOverlay>
          </MDBCard>

          {/* <div className="image-css1">
            <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/bg_why.jpg?1698476461339" />
          </div> */}

          <div>
            <h2 align="center" className="space-top my-5">
              MENU HÔM NAY
            </h2>
            {/* <Row className="space-top">
              <Col span={8}></Col>
              <Col span={2}>
                <Button className="botton-product">Trà sữa</Button>
              </Col>
              <Col span={2}>
                <Button className="botton-product">Trà sữa</Button>
              </Col>
              <Col span={2}>
                <Button className="botton-product">Trà sữa</Button>
              </Col>
              <Col span={2}>
                <Button className="botton-product">Trà sữa</Button>
              </Col>
            </Row> */}
            <div>
              <Row className="space-top" justify="center">
                <Col span={20} offset={2}>
                  <List
                    grid={{
                      gutter: 16,
                      xs: 1,
                      sm: 2,
                      md: 3,
                      lg: 4,
                      xl: 5,
                      xxl: 4,
                    }}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <Row>
                        <Col span={20}>
                          <Image className="image-css" src={item.imageUrl} />
                        </Col>
                        <Col span={20}>
                          <Link
                            to={`/ProductDetail/${item.id}`}
                            onClick={handleScrollUp}
                          >
                            <h4 align="center">{item.name}</h4>
                          </Link>
                        </Col>
                        <Col span={20}>
                          <Row justify="center">
                            <h5>
                              Giá:{" "}
                              {item.priceM.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </h5>
                          </Row>
                        </Col>
                      </Row>
                    )}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <Row className="row-css1" justify="center">
              <Col span={10} className="Col_color">
                <DemoBox value={100}>
                  <div className="css_div">
                    <h3>THỜI GIAN MỞ CỬA</h3>
                    <p style={{ fontSize: "16px" }}>
                      “TeaSip" - Một lời ngỏ mộc mạc để mình ngồi lại bên nhau
                      và sẻ chia câu chuyện của riêng mình. Tận hưởng cảm giác
                      ngọt ngào và ấm áp như đang ở nhà
                    </p>
                    <br />
                    <h3>Thứ Hai - Chủ Nhật: 8h00 - 23h30</h3>
                    <br />
                    <Button className='button-color' >Hotline: 0999999999</Button>
                    
                  </div>
                </DemoBox>
              </Col>
              <Col span={8} className="col-css">
                <DemoBox value={50}>
                  <Image src={ice1} />
                </DemoBox>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
