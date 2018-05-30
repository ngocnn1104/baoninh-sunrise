import React, { Component } from 'react';
import NavBar from './components/navbar.js';
import Cover from './components/cover.js';
import ThongTin from './components/thongtin.js';
import SanPham from './components/sanpham.js';
import Video from './components/video.js';
import LyDo from './components/lydo.js';
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
        <ThongTin />
        <SanPham />
        <Video />
        <LyDo />
        <ViTri />
        <MatBang />
        <TienIch />
        <ThuVien />
        <VRTour />
        <TinTuc />
        <LienHe />
        <MainFooter />
      </Grid>
    );
  }
}

export default App;
