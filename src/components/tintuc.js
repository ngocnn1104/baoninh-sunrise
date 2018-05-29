import React, { Component } from 'react';
import {Row, Col, Thumbnail, Button} from 'react-bootstrap';

import house1 from '../img/house1.jpeg';
import house2 from '../img/house2.jpeg';
import house3 from '../img/house3.jpeg';


export default class TinTuc extends Component {
  render() {
    return(
      <div id='tin-tuc'>
        <h2>TIN TỨC</h2>
        <p className='subheading-tintuc'><a href='#' target='_blank'>Xem tất cả tin tức</a></p>
        <Row>
          <Col md={3} xs={6}>
            <Thumbnail src={house1}>
              <h3>Thumbnail label</h3>
              <p>Ngày đăng: 28/05/2018</p>
              <p>
                <a href='#'><Button bsStyle="primary">Xem thêm</Button></a>
              </p>
            </Thumbnail>
          </Col>
          <Col md={3} xs={6}>
            <Thumbnail src={house2} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Ngày đăng: 28/05/2018</p>
              <p>
                <a href='#'><Button bsStyle="primary">Xem thêm</Button></a>
              </p>
            </Thumbnail>
          </Col>
          <Col md={3} xs={6}>
            <Thumbnail src={house3} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Ngày đăng: 28/05/2018</p>
              <p>
                <a href='#'><Button bsStyle="primary">Xem thêm</Button></a>
              </p>
            </Thumbnail>
          </Col>
          <Col md={3} xs={6}>
            <Thumbnail src={house3} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Ngày đăng: 28/05/2018</p>
              <p>
                <a href='#'><Button bsStyle="primary">Xem thêm</Button></a>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </div>
    );
  }
}
