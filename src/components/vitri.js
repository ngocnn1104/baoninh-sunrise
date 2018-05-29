import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class ViTri extends Component {
  render() {
    return(
      <Row id='vi-tri'>
        <Col md={4} className='map-container'>
          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=danang&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </Col>

        <Col md={8} id='vi-tri-text'>
          <h2>VỊ TRÍ VÀNG</h2>
          <h3>Subheading</h3>
          <p>Lorem ipsum dolor sit amet, sed eu graece senserit, nulla detraxit indoctum per ad. Autem omnium timeam vis ei. Cu partem placerat pri, corpora euripidis no eam. Harum luptatum usu ut, veri inermis scribentur mel ei. Aperiam albucius perfecto est et, ornatus voluptatum sed in, ad veri volumus dolores pri. Quando delicata cum ad, vis prompta periculis consetetur ei. Ex mel fugit laudem posidonium.</p>

          <Row id='dac-diem-vi-tri'>
            <Col md={3} xs={6}>
              <i class="fab fa-accessible-icon fa-5x"></i>
              <p>Accessible</p>
            </Col>

            <Col md={3} xs={6}>
              <i class="fas fa-plane fa-5x"></i>
              <p>Close to airport</p>
            </Col>

            <Col md={3} xs={6}>
              <i class="fas fa-tree fa-5x"></i>
              <p>Nature-friendly</p>
            </Col>

            <Col md={3} xs={6}>
              <i class="fas fa-hospital fa-5x"></i>
              <p>Medical facilities</p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
