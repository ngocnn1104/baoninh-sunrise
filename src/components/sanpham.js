import React, { Component } from 'react';
import {Row, Col, Image, Thumbnail} from 'react-bootstrap';
import house1 from '../img/house1.jpeg';
import house2 from '../img/house2.jpeg';
import house3 from '../img/house3.jpeg';

export default class SanPham extends Component {
  render() {
    return(
      <Row id='san-pham'>
        <Col xs={4} className='container-san-pham'>
          <Image src={house1} alt="house 1" className='anh-san-pham' responsive/>
          <div className='on-hover'>
            <p>Biệt thự 01</p>
          </div>

        </Col>
        <Col xs={4} className='container-san-pham'>
          <Image src={house2} alt="house 2" className='anh-san-pham'/>
          <div className='on-hover'>
            <p>Biệt thự 02</p>
          </div>
        </Col>
        <Col xs={4} className='container-san-pham'>
          <Image src={house3} alt="house 3" className='anh-san-pham'/>
          <div className='on-hover'>
            <p>Biệt thự 03</p>
          </div>
        </Col>
      </Row>
    );
  }
}
