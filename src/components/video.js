import React, { Component } from 'react';
import {Row, Col, Modal} from 'react-bootstrap';

export default class Video extends Component {
  constructor() {
    super();
    this.state = {show: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({show: true});
  }

  render() {
    let closeVid = () => this.setState({ show: false });

    return(
      <Row id='video'>
        <div id='video-title'>
          <h2>TOÀN CẢNH DỰ ÁN<br/>KHU ĐÔ THỊ BẢO NINH SUNRISE</h2>
          <div onClick={this.handleClick} id='play-btn'>
            <div className='loader' />
            <i className="fas fa-play fa-4x"></i>
          </div>
        </div>

        <Modal show={this.state.show} onHide={closeVid}  id='modal-video'>
          <Modal.Body>
            <iframe width='100%' height='500px' src="https://www.youtube.com/embed/MWNm98WgqxE?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </Modal.Body>
        </Modal>

      </Row>
    );
  }
}
