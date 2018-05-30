import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';

export default class VRTour extends Component {
  render() {
    return(
      <Row id='vr-tour'>
        <div id='vr-allcontent'>
          <h2>KHÁM PHÁ VR TOUR</h2>

          <Row>
            <Col mdOffset={3} md={6}>
              <div id='vr-textbox'>
                <h3>CẢM HỨNG KIẾN TRÚC ĐỊA TRUNG HẢI</h3>
                <p>Lấy cảm hứng từ phong cách kiến trúc Địa Trung Hải, thiết kế linh động theo sở thích của chủ nhân tương lai, Bảo Ninh Sunrise hiện lên như một bức tranh tuyệt đẹp bên dòng sông Nhật Lệ và biển Bảo Ninh. Từ mọi góc độ, cư dân đều có thể chiêm ngưỡng cảnh sắc đất trời và tận hưởng không khí trong lành, ngập tràn những xúc cảm tươi mới.</p>
                <p style={{textAlign: 'right', fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'Cormorant Upright'}}>Bảo Ninh Sunrise – Ngưng tụ những giấc mơ....</p>
              </div>
              <Button href='http://vrplus.vn/vr/' bsStyle=''>Khám phá ngay</Button>
            </Col>
          </Row>
        </div>
      </Row>
    );
  }
}
