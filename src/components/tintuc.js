import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';

import house1 from '../img/house1.jpeg';

export default class TinTuc extends Component {
  render() {
    return(
      <div id='tin-tuc'>
        <h2>TIN TỨC</h2>
        <p className='subheading-tintuc'><a href='#' target='_blank'>Xem tất cả tin tức</a></p>

        <Row>
          <Col md={4}>
            <h3>TIN BÁO CHÍ</h3>
            <Row>
              <Col xs={12} className='tin'>
                <Image src={house1} alt='house 1'/>
                <a href='#'><div className='caption'>
                  <p className='title bold'>Tin báo chí</p>
                  <p className='time'>Ngày đăng: 29/05/2018</p>
                </div></a>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className='tin'>
                <Image src={house1} alt='house 1'/>
                <a href='#'><div className='caption'>
                  <p className='title bold'>Tin báo chí</p>
                  <p className='time'>Ngày đăng: 29/05/2018</p>
                </div></a>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <h3>TIN CÔNG TY</h3>
            <Row>
              <Col xs={12} className='tin'>
                <Image src={house1} alt='house 1'/>
                <a href='#'><div className='caption'>
                  <p className='title bold'>Tin công ty</p>
                  <p className='time'>Ngày đăng: 29/05/2018</p>
                </div></a>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className='tin'>
                <Image src={house1} alt='house 1'/>
                <a href='#'><div className='caption'>
                  <p className='title bold'>Tin công ty</p>
                  <p className='time'>Ngày đăng: 29/05/2018</p>
                </div></a>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <h3>TIẾN ĐỘ DỰ ÁN</h3>
            <Row>
              <Col xs={12} className='tin'>
                <Image src={house1} alt='house 1'/>
                <a href='#'><div className='caption'>
                  <p className='title bold'>Tiến độ dự án</p>
                  <p className='time'>Ngày đăng: 29/05/2018</p>
                </div></a>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className='tin'>
                <Image src={house1} alt='house 1'/>
                <a href='#'><div className='caption'>
                  <p className='title bold'>Tiến độ dự án</p>
                  <p className='time'>Ngày đăng: 29/05/2018</p>
                </div></a>
              </Col>
            </Row>
          </Col>

        </Row>
      </div>
    );
  }
}
