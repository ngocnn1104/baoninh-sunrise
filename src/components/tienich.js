import React, { Component } from 'react';
import {Row, Col, Table, Image} from 'react-bootstrap';
import photo from '../img/tienich.png';

export default class TienIch extends Component {
  render() {
    return(
      <Row id='tien-ich'>
        <Col md={6} id='tienich-text'>
          <h2>TIỆN ÍCH ĐẲNG CẤP - PHONG CÁCH THƯỢNG LƯU</h2>
          <p>Không chỉ là một nơi để sống, mà Bảo Ninh Sunrise đã hình thành một cách sống, kiến tạo một khu sinh thái chuẩn phong cách thương lưu với hệ thống tiện ích đẳng cấp, chuẩn 5 sao từ Sun Spa Resort.</p>

          <Row className='icon-tien-ich'>
            <Col xs={4}>
              <p><i class="fas fa-shopping-bag fa-2x"></i></p>
              <p>Trung tâm thương mại</p>
            </Col>
            <Col xs={4}>
              <p><i class="fas fa-ship fa-2x"></i></p>
              <p>Cầu cảng - bến du thuyền</p>
            </Col>
            <Col xs={4}>
              <p><i class="fas fa-utensils fa-2x"></i></p>
              <p>Nhà hàng</p>
            </Col>
          </Row>

          <Row className='icon-tien-ich'>
            <Col xs={4}>
              <p><i class="fas fa-leaf fa-2x"></i></p>
              <p>Spa</p>
            </Col>
            <Col xs={4}>
              <p><i class="fas fa-dumbbell fa-2x"></i></p>
              <p>Gym</p>
            </Col>
            <Col xs={4}>
              <p><i class="fas fa-life-ring fa-2x"></i></p>
              <p>Bể bơi</p>
            </Col>
          </Row>

          <Row className='icon-tien-ich'>
            <Col xs={4}>
              <p><i class="fas fa-users fa-2x"></i></p>
              <p>Khu teambuilding</p>
            </Col>
            <Col xs={4}>
              <p><i class="fas fa-volleyball-ball fa-2x"></i></p>
              <p>Khu vui chơi trên biển</p>
            </Col>
            <Col xs={4}>
              <p><i class="fas fa-tree fa-2x"></i></p>
              <p>Khu công viên cây xanh</p>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Image src={photo} alt='tien ich'/>
        </Col>
      </Row>
    );
  }
}
