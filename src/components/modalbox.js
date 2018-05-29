import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalBox extends Component {
  render() {
    return(
      <Modal.Dialog onClick={this.props.onClick} id='modal-box'>
        <Modal.Header>
          <Modal.Title>{this.props.header}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>{this.props.body}</ul>
        </Modal.Body>

        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}
