import React, { Component } from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import ModalBox from './modalbox.js';

let modalBody = []; let modalHeader = ''; let wrongInfo = 0;

export default class LienHe extends Component {
  constructor(props) {
    super(props);
    this.state = {modal: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickModalBox = this.handleClickModalBox.bind(this);
  }

  handleSubmit() {
    let name = document.getElementById('ten').value;
    let phone = document.getElementById('dien-thoai').value;
    let email = document.getElementById('email').value;

    if (name === '') {
      modalBody.push(<li>Vui lòng điền tên</li>);
      wrongInfo++;
    }

    if (phone === '') {
      modalBody.push(<li>Vui lòng điền số điện thoại</li>);
      wrongInfo++;
    } else if (phone.length < 10 || (phone[0] !== '0' && phone.slice(0,3) !== '+84')) {
      modalBody.push(<li>Vui lòng điền số điện thoại hợp lệ</li>);
      wrongInfo++;
    }

    if (email === '') {
      modalBody.push(<li>Vui lòng điền E-mail</li>);
      wrongInfo++;
    } else if (!email.includes('@') || !email.includes('.com')) {
      modalBody.push(<li>Vui lòng điền E-mail hợp lệ</li>);
      wrongInfo++;
    }

    if (wrongInfo > 0) {
      modalHeader = 'Thông tin không hợp lệ';
    } else {
      modalHeader = 'Thông tin đã gửi thành công';
      modalBody.push('Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.');
      document.getElementById('ten').value = '';
      document.getElementById('dien-thoai').value = '';
      document.getElementById('email').value = '';
      document.getElementById('tin-nhan').value = '';
    }

    this.setState({modal: true})
  }

  handleClickModalBox() {
    this.setState({modal: false});
    modalBody = [];
    wrongInfo = 0;
  }

  render() {
    return(
      <Row id='lien-he'>
        {this.state.modal &&
          <ModalBox onClick={this.handleClickModalBox} body={modalBody} header={modalHeader} />
        }

        <Col md={6} id='lien-he-content'>
          <h2>LIÊN HỆ</h2>

          <FormGroup controlId='lien-he'>
            <p>Hãy để chúng tôi giúp bạn có được sự lựa chọn tốt nhất tại Bảo Ninh Sunrise. Vui lòng nhập thông tin bên dưới, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</p>

            <Row>
              <Col md={6}>
                <ControlLabel>Họ tên (*)</ControlLabel>
                <FormControl type='text' id='ten'/>
              </Col>
              <Col md={6}>
                <ControlLabel>Số điện thoại (*)</ControlLabel>
                <FormControl type='text' id='dien-thoai'/>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <ControlLabel>E-mail (*)</ControlLabel>
                <FormControl type='email' id='email'/>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <ControlLabel>Tin nhắn</ControlLabel>
                <FormControl componentClass="textarea" id='tin-nhan'/>
              </Col>
            </Row>

            <Button type="submit" onClick={this.handleSubmit} bsStyle=''>Gửi thông tin</Button>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}
