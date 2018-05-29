import React, { Component } from 'react';
import NavBar from './components/navbar.js';
import Cover from './components/cover.js';
import SanPham from './components/sanpham.js';
import ViTri from './components/vitri.js';
import MatBang from './components/matbang.js';
import TienIch from './components/tienich.js';
import VRTour from './components/vrtour.js';
import TinTuc from './components/tintuc.js';
import ThuVien from './components/thuvien.js';
import LienHe from './components/lienhe.js';
import MainFooter from './components/mainfooter.js';

import {Grid} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid fluid id='body'>
        <NavBar />
        <Cover />
        <SanPham />
        <ViTri />
        <MatBang />
        <TienIch />
        <VRTour />
        <TinTuc />
        <ThuVien />
        <LienHe />
        <MainFooter />
      </Grid>
    );
  }
}

export default App;
