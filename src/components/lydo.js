import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class LyDo extends Component {
  render() {
    return(
      <div id='ly-do'>
        <h2>5 LÝ DO NÊN SỞ HỮU BẢO NINH SUNRISE</h2>

        <Row>
          <Col mdOffset={2} md={4} xs={6} className='lydo'>
            <i class="fas fa-gem fa-3x"></i>
            <p>Viên ngọc sáng bên bán đảo Bảo Ninh</p>
          </Col>

          <Col md={4} xs={6} className='lydo'>
            <i class="fas fa-map-marker-alt fa-3x"></i>
            <p>Nằm trong quần thể Sun Spa Resort</p>
          </Col>
        </Row>

        <Row>
          <Col mdOffset={2} md={4} xs={6} className='lydo'>
            <i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i><i class="fas fa-star fa-3x"></i>
            <p>Hệ thống tiện ích chuẩn 5 sao</p>
          </Col>

          <Col md={4} xs={6} className='lydo'>
            <i class="fas fa-ruler-combined fa-3x"></i>
            <p>Phong cách kiến trúc độc đáo</p>
          </Col>
        </Row>

        <Row>
          <Col mdOffset={2} md={8} xs={12} className='lydo'>
          <i class="fas fa-certificate fa-3x"></i>
          <p>Cộng đồng thượng lưu, văn minh và đẳng cấp</p>
          </Col>
        </Row>
      </div>
    );
  }
}
