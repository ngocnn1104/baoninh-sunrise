import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class MatBang extends Component {
  render() {
    return(
      <Row fluid id='mat-bang'>
        <Col xsOffset={4} xs={8} mdOffset={8} md={4} id='matbang-text'>
          <h2>Mặt bằng tổng thể</h2>
          <a href='#' target='_blank'>Xem thêm</a>
        </Col>
      </Row>
    );
  }
}
