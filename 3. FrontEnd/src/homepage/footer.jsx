import React from "react";
import { Layout, Button, Space, Input, Row, Col, Image } from "antd";
import Logo from "../assets/Logo.webp";
const {  Footer } = Layout;

function footer()  {

    return(

<div>

     <Footer className="footerStyle">
        <Row>
          <Col span={10}>
            <div>
              <Image src={Logo} />
              <p className="p1">Công ty nhiều thành viên</p>
              <p className="p1">
                Triết lý xuyên suốt của Winggo là phục vụ khách hàng bằng TÂM TỬ
                TẾ. Lấy sự AN TOÀN-VUI VẺ-TIỆN ÍCH-HẠNH PHÚC cho khách hàng làm
                trọng, Winggo hướng tới Thương hiệu Quốc gia và mong muốn được
                phục vụ tốt nhất cho khách hàng."
              </p>
              <p className="p1">
                Địa chỉ: Số 30 Vĩnh Phúc, phường Vĩnh Phúc, quận Ba Đình, thành
                phố Hà Nội, Việt Nam
              </p>
              <p className="p1">
                MST: 0110243083 DO SỞ KẾ HOẠCH VÀ ĐẦU TƯ THÀNH PHỐ HÀ NỘI CẤP
                NGÀY 07/02/2023
              </p>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={6}>
            <h2 className="h2">CHÍNH SÁCH</h2>

            <p className="p1">Chính sách bảo mật</p>

            <p className="p1">Chính sách bảo mật</p>

            <p className="p1">Chính sách bảo mật</p>

            <p className="p1">Chính sách bảo mật</p>

            <p className="p1">Chính sách bảo mật</p>
          </Col>
          <Col span={7}>
            <h2 className="h2">ĐĂNG KÝ NHẬN KHUYẾN MÃI </h2>
            <p className="p1">
              Đừng bỏ lỡ những sản phẩm và chương trình khuyến mãi hấp dẫn{" "}
            </p>
            <Space.Compact block size="small">
              <Input
                style={{
                  width: "calc(100% - 200px)",
                }}
                defaultValue="Email của bạn"
              />
              <Button className="color-button">Đăng ký</Button>
            </Space.Compact>
          </Col>
        </Row>
      </Footer>
</div>
       
    )
}

export default footer;