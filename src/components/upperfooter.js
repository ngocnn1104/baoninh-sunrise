import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class UpperFooter extends Component {
  render() {
    return(
      <Row id='upper-footer'>
        <Col md={3}>
          <p><i class="fas fa-file-alt fa-3x"></i> Tài liệu bán hàng</p>
        </Col>

        <Col md={3}>
          <p><i class="fas fa-truck fa-3x"></i> Tiến độ thi công</p>
        </Col>

        <Col md={3}>
          <p><i class="fab fa-connectdevelop fa-3x"></i> Mạng lưới phân phối</p>
        </Col>

        <Col md={3}>
          <p><i class="fas fa-newspaper fa-3x"></i> Tin tức sự kiện</p>
        </Col>
      </Row>
    );
  }
}
