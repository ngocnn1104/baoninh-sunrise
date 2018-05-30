import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import photo from '../img/vitri.png';

export default class ViTri extends Component {
  render() {
    return(
      <Row id='vi-tri'>
        <Col md={8} className='map-container'>
          <Image src={photo} alt='vi tri' />
        </Col>

        <Col md={4} id='vi-tri-text'>
          <h2>VỊ TRÍ VÀNG - NGÀN LỢI THẾ</h2>
          <h3>Tại bán đảo Bảo Ninh - TP. Đồng Hới</h3>
          <p>Nằm trong quần thể Khu du lịch sinh thái Sun Spa Resort tiêu chuẩn 5 sao, Bảo Ninh Sunrise sở hữu vị trí đắc địa View sông - hướng biển với liên kết vùng hoàn hảo, dễ dàng kết nối đến các khu vực khác trong thành phố.</p>

          <div id='dac-diem-vi-tri'>
            <Row>
              <Col xs={6}>
                <i className="fas fa-building fa-3x icon"></i>
                <p className='time bold'>5 phút</p>
                <p className='place'>Trung tâm Thành phố</p>
              </Col>

              <Col xs={6}>
                <i className="fas fa-train fa-3x icon"></i>
                <p className='time bold'>10 phút</p>
                <p className='place'>Ga Đồng Hới</p>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <i className="fas fa-bus fa-3x icon"></i>
                <p className='time bold'>5 phút</p>
                <p className='place'>Bến xe Đồng Hới 1km</p>
              </Col>

              <Col xs={6}>
                <i className="fas fa-plane fa-3x icon"></i>
                <p className='time bold'>15 phút</p>
                <p className='place'>Sân bay Đồng hới 7km</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}
