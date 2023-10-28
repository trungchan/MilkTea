import React, { useRef } from "react";

import {
  Layout,
  Dropdown,
  Button,
  Space,
  Input,
  Row,
  Col,
  Image,
  Carousel,
  Divider,
} from "antd";

import { RightOutlined, LeftOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../assets/Logo.webp";
import Logo1 from "../assets/slider_1.webp";
import Logo2 from "../assets/slider_2.webp";
import ice1 from "../assets/ice-cream-1.jpg";

const { Header, Footer, Content } = Layout;

function Homepage() {
  const items = [
    {
      label: "Đăng nhập",
      key: "1",
    },
    {
      label: "Đăng ký",
      key: "2",
    },
    {
      label: "Đăng xuất",
      key: "3",
      danger: true,
    },
  ];

  const menuProps = {
    items,
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

  const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

  return (
    <div>
      <Layout>
        <Header className="headerStyle">
          <Row className="headerStyle" justify="space-around" align="middle">
            <Col span={2}>
              <Image src={Logo} />
            </Col>
            <Col span={8}>
              <h3>Trà sữa siêu nhân</h3>
            </Col>
            <Col span={8}>
            <Col span={8}>
              <Input placeholder="Tìm kiếm sản phẩm"/>
            </Col>
            </Col>
            <Col span={2} />
             <Col span={2}>
            <h3>Giỏ hàng</h3></Col>
            <Col span={2}>
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                    Tài khoản
                    {/* <DownOutlined /> */}
                  </Space>
                </Button>
              </Dropdown>
            </Col>
           
          </Row>
        </Header>
        <Row className="homepage" justify="start" align="middle">
          <Col span={2} />
          <Col span={2}>
            <h3>Home</h3>
          </Col>
          <Col span={2}>
            <h3>Sản phẩm</h3>
          </Col>
          <Col span={2}>
            <h3>Ưu đãi</h3>
          </Col>
          <Col span={2}>
            <h3>Khóa học</h3>
          </Col>
        </Row>
        <Content className="contentStyle">
          <Carousel autoplay>
            <div>
              <Image src={Logo1} />
            </div>
            <div>
              <Image src={Logo2} />
            </div>
          </Carousel>
          

          <div>
            <h1 align="center">Danh sách sản phẩm </h1>
            <Carousel ref={carouselRef} slidesToShow={4} dots={false}>
             
              <div>
                <Image className='image-css' src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_1.jpg?1695629614469" />
                <h3 className='h3-css' align="center">Trà đào</h3>
              </div>

              <div>
                <Image className='image-css' src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_2.jpg?1695629614469" />
                <h3 className='h3-css' align="center">Trà đào</h3>
              </div>
              <div>
                <Image className='image-css' src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_3.jpg?1695629614469" />
                <h3 className='h3-css' align="center">Trà đào</h3>
              </div>
              <div>
                <Image className='image-css' src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_4.jpg?1695629614469" />
                <h3 className='h3-css' align="center">Trà đào</h3>
              </div>
              <div>
                <Image className='image-css' src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_5.jpg?1695629614469" />
                <h3 className='h3-css' align="center">Trà đào</h3>
              </div>
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
            <div>
              <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/slider_1.jpg?1695629614469" />
            </div>
            <div>
            <Row justify="center" align="top">
      <Col span={10} className="Col_color">
        <DemoBox value={100}>
          <div className="Css_div">
          <h2>THỜI GIAN MỞ CỬA</h2>
          <p>“Winggo" - Một lời ngỏ mộc mạc để mình ngồi lại bên nhau và sẻ chia câu chuyện của riêng mình. Tận hưởng cảm giác ngọt ngào và ấm áp như đang ở nhà</p>
          <h3>Thứ Hai - Chủ Nhật: 8h00 - 23h30</h3>
          <h3>SDT: 0988866222</h3>
          </div>
        </DemoBox>
      </Col>
      <Col span={8}>
        <DemoBox value={50}>
       <Image src={ice1} />
          </DemoBox>
        
      </Col>
      
    </Row>
            </div>
          </div>
        </Content>
        
        <div >
              <Footer   className="footerStyle">
           
        <Row >
      <Col span={10}>
        <div>
        <Image src={Logo} />
        <p className="p1">Công ty nhiều thành viên</p>
        <p className="p1">Triết lý xuyên suốt của Winggo là phục vụ khách hàng bằng TÂM TỬ TẾ. Lấy sự AN TOÀN-VUI VẺ-TIỆN ÍCH-HẠNH PHÚC cho khách hàng làm trọng, Winggo hướng tới Thương hiệu Quốc gia và mong muốn được phục vụ tốt nhất cho khách hàng."</p>
        <p className="p1">Địa chỉ: Số 30 Vĩnh Phúc, phường Vĩnh Phúc, quận Ba Đình, thành phố Hà Nội, Việt Nam</p>
        <p className="p1">MST: 0110243083 DO SỞ KẾ HOẠCH VÀ ĐẦU TƯ THÀNH PHỐ HÀ NỘI CẤP NGÀY 07/02/2023</p>
        </div>
      </Col>
      <Col span={1}></Col>
      <Col span={6}>
        
        <h2 className="h2">
         CHÍNH SÁCH
        </h2>
        
            <p className="p1">Chính sách bảo mật</p>
         
          
          
            <p className="p1">Chính sách bảo mật</p>
         
            <p className="p1">Chính sách bảo mật</p>
          
            <p className="p1">Chính sách bảo mật</p>
         
            <p className="p1">Chính sách bảo mật</p>
          
      </Col>
      <Col span={7}> 
      <h2 className="h2">ĐĂNG KÝ NHẬN KHUYẾN MÃI </h2>
      <p className="p1">Đừng bỏ lỡ những sản phẩm và chương trình khuyến mãi hấp dẫn </p>
      <Space.Compact block size="small">
      <Input
        style={{
          width: 'calc(100% - 200px)',
        }}
        defaultValue="Email của bạn"
      />
      <Button className="color-button"  >Đăng ký</Button>
    </Space.Compact>
      </Col>
    </Row>
        </Footer>
        
        </div>
       
       
      </Layout>
    </div>
  );
}
export default Homepage;
