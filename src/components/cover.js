import React, { Component } from 'react';
import {Row, Col, Jumbotron, Label} from 'react-bootstrap';

export default class Cover extends Component {
  render() {
    return(
        <Row id='cover'>
          <Col mdOffset={1} md={5}>
            <h1>Mặt trời <span className='bold bigger' style={{fontFamily: 'Playfair Display SC'}}>bình minh</span></h1>
            <h1>trên bán đảo <span className='bold bigger' style={{fontFamily: 'Playfair Display SC'}}>Bảo Ninh</span></h1>
          </Col>
        </Row>
    );
  }
}
