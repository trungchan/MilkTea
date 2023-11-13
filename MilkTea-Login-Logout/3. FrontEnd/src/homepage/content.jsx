import React, { useRef, useEffect, useState } from "react";
import Logo1 from "../assets/slider_1.webp";
import Logo2 from "../assets/slider_2.webp";
import ice1 from "../assets/ice-cream-1.jpg";
import { RightOutlined, LeftOutlined, UserOutlined } from "@ant-design/icons";
import { productApi } from "../product/api";
import axios from "axios";
import { Button, Row, Col, Image, Carousel, List, Avatar } from "antd";
import { Link } from "react-router-dom";

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
    window.scrollTo({ top: 0, behavior: "smooth" })
}
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
          <h1  align="center" style={{paddingBottom: "3%"}}>Danh sách sản phẩm </h1>
          <Carousel ref={carouselRef} slidesToShow={4} dots={false}>
            {data.map((item) => (
              <div>
                <Image className="image-css" src={item.imageUrl} />
                <h3 className="h3-css" align="center">
                <Link to={`/ProductDetail/${item.id}`} onClick={handleScrollUp}>
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
          <div className="image-css1">
            <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/slider_1.jpg?1695629614469" />
          </div>

          <div>
            <h3 align="center" className="space-top">MENU HÔM NAY</h3>
            <Row  className="space-top">
              <Col span={8}></Col>
              <Col span={2}>
                <Button className="botton-product" >Trà sữa</Button>
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
            </Row>
            <div>
              <Row className="space-top" justify="center">

                <Col   span={20} offset={2}>
                <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 4 }}
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item, index) => (
                    <Row >
                      <Col span={20}>

                          <Image className="image-css" src={item.imageUrl} />

                      </Col>
                      <Col span={20}>
                      <Link to={`/ProductDetail/${item.id}`} onClick={handleScrollUp}>
                      <h4 align="center">
                        {item.name}
                      </h4>
                    </Link>
                      </Col>
                      <Col span={20}>
                      <Row justify="center">
                    <h5>Giá: {item.priceM.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
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
                  <div className="css_div" align="middle">
                    <h3>THỜI GIAN MỞ CỬA</h3>
                    <p>
                      “Winggo" - Một lời ngỏ mộc mạc để mình ngồi lại bên nhau
                      và sẻ chia câu chuyện của riêng mình. Tận hưởng cảm giác
                      ngọt ngào và ấm áp như đang ở nhà
                    </p>
                    <h3>Thứ Hai - Chủ Nhật: 8h00 - 23h30</h3>
                    <h3>SDT: 0988866222</h3>
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
