import React, { Component } from 'react';
import {Row, Col, Image, Thumbnail} from 'react-bootstrap';
import house1 from '../img/house1.jpeg';
import house2 from '../img/house2.jpeg';
import house3 from '../img/house3.jpeg';

export default class SanPham extends Component {
  render() {
    return(
      <Row id='san-pham'>
        <Col xs={6} className='container-san-pham'>
          <Image src={house1} alt="house 1" className='anh-san-pham' responsive/>
          <div className='caption'>
            <p><span className='bold' style={{fontFamily: 'Cormorant Upright', fontSize: '20px'}}>KHU RIVER</span><br/>3,7 ha - 80 villa</p>
          </div>

        </Col>
        <Col xs={6} className='container-san-pham'>
          <Image src={house2} alt="house 2" className='anh-san-pham' responsive/>
          <div className='caption'>
            <p><span className='bold' style={{fontFamily: 'Cormorant Upright', fontSize: '20px'}}>KHU OCEAN</span><br/>1,8 ha - 40 villa</p>
          </div>
        </Col>
      </Row>
    );
  }
}
