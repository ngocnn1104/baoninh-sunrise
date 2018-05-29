import React, { Component } from 'react';
import {Row, Col, Jumbotron, Label} from 'react-bootstrap';

export default class Cover extends Component {
  render() {
    return(
      <Row id='cover'>
        <Col mdOffset={1} md={6}>
          <h1>BẢO NINH SUNRISE</h1>
          <h2>Mặt trời bình minh trên bán đảo Bảo Ninh</h2>
          <Jumbotron id='thong-tin-du-an'>
            <h3>Thông tin dự án</h3>
            <div>
              <p>Lorem ipsum dolor sit amet, sed eu graece senserit, nulla detraxit indoctum per ad. Autem omnium timeam vis ei. Cu partem placerat pri, corpora euripidis no eam. Harum luptatum usu ut, veri inermis scribentur mel ei. Aperiam albucius perfecto est et, ornatus voluptatum sed in, ad veri volumus dolores pri. Quando delicata cum ad, vis prompta periculis consetetur ei. Ex mel fugit laudem posidonium.</p>
              <p>Loại hình sản phẩm <Label>Villa</Label>{' '}<Label>Penthouse</Label></p>
              <p>Tổng diện tích <Label>3 ha</Label></p>
              <p>Số tầng hầm <Label>4 tầng</Label></p>
              <p>Số tầng dịch vụ <Label>4 tầng</Label></p>
              <p>Dự kiến hoàn thành <Label>2019</Label></p>
              <p>Tư vấn thiết kế <Label>ABC</Label></p>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}
