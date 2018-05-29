import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';

import house1 from '../img/house1.jpeg';
import house2 from '../img/house2.jpeg';
import house3 from '../img/house3.jpeg';
import lienhe from '../img/lienhe.jpeg';
import cover from '../img/cover.jpeg';

export default class ThuVien extends Component {
  render() {
    return(
      <Row id='thu-vien'>
        <Col md={3}>
          <h2>THƯ VIỆN</h2>
          <p><a href='#'>Xem tất cả</a></p>
        </Col>
        <Col md={9}>
          <Row>
            <Col xs={2}>
              <Image src={house1} width='100%' rounded/>
            </Col>
            <Col xs={2}>
              <Image src={house2} width='100%' rounded/>
            </Col>
            <Col xs={2}>
              <Image src={house3} width='100%' rounded/>
            </Col>
            <Col xs={2}>
              <Image src={house1} width='100%' rounded/>
            </Col>
            <Col xs={2}>
              <Image src={house2} width='100%' rounded/>
            </Col>
            <Col xs={2}>
              <Image src={house3} width='100%' rounded/>
            </Col>

          </Row>
          <Row>
            <Col xs={3}>
              <Image src={lienhe} width='100%' rounded/>
            </Col>
            <Col xs={3}>
              <Image src={cover} width='100%' rounded/>
            </Col>
            <Col xs={3}>
              <Image src={lienhe} width='100%' rounded/>
            </Col>
            <Col xs={3}>
              <Image src={cover} width='100%' rounded/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
