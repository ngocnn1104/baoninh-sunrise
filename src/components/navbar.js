import React, { Component } from 'react';
import {Navbar, Image, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from '../img/logo.png';

export default class NavBar extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect fluid fixedTop id='navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><Image src={logo} alt='logo'/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#" className='bold'>
              TRANG CHỦ
            </NavItem>
            <NavDropdown eventKey={2} title="VỀ DỰ ÁN" id="basic-nav-dropdown" className='bold'>
              <MenuItem eventKey={2.1} href='#thong-tin'>Thông tin dự án</MenuItem>
              <MenuItem eventKey={2.2} href='#video'>Toàn cảnh dự án</MenuItem>
              <MenuItem eventKey={2.3} href='#vi-tri'>Vị trí</MenuItem>
              <MenuItem eventKey={2.3} href='#mat-bang'>Mặt bằng</MenuItem>
              <MenuItem eventKey={2.3} href='#tien-ich'>Tiện ích</MenuItem>
            </NavDropdown>
            <NavItem eventKey={3} href="#thu-vien" className='bold'>
              THƯ VIỆN
            </NavItem>
            <NavItem eventKey={4} href="#vr-tour" className='bold'>
              VR TOUR
            </NavItem>
            <NavItem eventKey={5} href="#tin-tuc" className='bold'>
              TIN TỨC
            </NavItem>
            <NavItem eventKey={6} href="#lien-he" className='bold'>
              LIÊN HỆ
            </NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={1} href='#'><i class="fab fa-facebook-square fa-2x"></i></NavItem>
            <NavItem eventKey={2} href='#'><i class="fab fa-youtube fa-2x"></i></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
