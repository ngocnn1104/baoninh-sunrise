import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

export default class MainFooter extends Component {
  render() {
    return(
      <Row id='main-footer'>
        <h4>Công ty Cổ phần Bất động sản Protech</h4>
        <p>Số 298 - 300 Lê Văn Hiến, Q. Ngũ Hành Sơn, TP. Đà Nẵng, Việt Nam</p>
        <p>02363.616.676 - 090.116.2345</p>
        <p><a href='www.protechvn.net' target='_blank'>www.protechvn.net</a> - <a href='mailto:hotro.protech@gmail.com' target='_blank'>hotro.protech@gmail.com</a></p>
      </Row>
    );
  }
}
