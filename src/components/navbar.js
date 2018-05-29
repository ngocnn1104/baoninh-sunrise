import React, { Component } from 'react';
import {Navbar, Image} from 'react-bootstrap';
import logo from '../img/logo.png';

export default class NavBar extends Component {
  render() {
    return(
      <Navbar fixedBottom collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Navbar.Link href='#'>Logo</Navbar.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text><Navbar.Link href='#'>Trang chủ</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#san-pham'>Sản phẩm</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#vi-tri'>Vị trí</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#mat-bang'>Mặt bằng</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#tien-ich'>Tiện ích</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#vr-tour'>VR Tour</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#tin-tuc'>Tin tức</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#thu-vien'>Thư viện</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#'>Tiến độ</Navbar.Link></Navbar.Text>
          <Navbar.Text><Navbar.Link href='#lien-he'>Liên hệ</Navbar.Link></Navbar.Text>
          <Navbar.Text>
            <Navbar.Link href='#'><i class="fab fa-facebook-square fa-2x"></i></Navbar.Link>{' '}
            <Navbar.Link href='#'><i class="fab fa-youtube fa-2x"></i></Navbar.Link>{' '}
            <Navbar.Link href='#'><i class="fas fa-phone-square fa-2x"></i></Navbar.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
