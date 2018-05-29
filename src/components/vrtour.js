import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class VRTour extends Component {
  render() {
    return(
      <Row id='vr-tour'>
        <div>
          <h2>KHÁM PHÁ VR TOUR</h2>
          <a href='http://vrplus.vn/vr/' target='_blank'><i class="fas fa-globe fa-5x" id='globe'></i></a>
        </div>
      </Row>
    );
  }
}
