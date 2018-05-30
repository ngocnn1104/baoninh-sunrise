import React, { Component } from 'react';
import {Row, Col, Carousel} from 'react-bootstrap';

import anh2 from '../img/anh2.png';
import anh3 from '../img/anh3.png';
import anh4 from '../img/anh4.png';
import anh5 from '../img/anh5.png';
import anh6 from '../img/anh6.png';
import anh7 from '../img/anh7.png';

import tailieu1 from '../img/tailieu1.png';
import tailieu2 from '../img/tailieu2.png';
import tailieu3 from '../img/tailieu3.png';
import tailieu4 from '../img/tailieu4.png';
import tailieu5 from '../img/tailieu5.png';
import tailieu6 from '../img/tailieu6.png';
import tailieu7 from '../img/tailieu7.png';
import tailieu8 from '../img/tailieu8.png';

export default class ThuVien extends Component {
  render() {
    return(
      <Row id='thu-vien'>
        <h2>THƯ VIỆN</h2>

        <Row>
          <Col md={6}>
            <h3>HÌNH ẢNH</h3>
            <Carousel>
              <Carousel.Item>
                <img width='100%' height='50%' src={anh2} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='100%' src={anh3} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='100%' src={anh4} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='100%' src={anh5} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='100%' src={anh6} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='100%' src={anh7} alt='anh'/>
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col md={6}>
            <h3>TÀI LIỆU</h3>
            <Carousel>
              <Carousel.Item>
                <img width='80%' src={tailieu1} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='80%' src={tailieu2} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='80%' src={tailieu3} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='80%' src={tailieu4} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='80%' src={tailieu5} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='80%' src={tailieu6} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='80%' src={tailieu7} alt='anh'/>
              </Carousel.Item>
              <Carousel.Item>
                <img width='80%' src={tailieu8} alt='anh'/>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Row>
    );
  }
}
