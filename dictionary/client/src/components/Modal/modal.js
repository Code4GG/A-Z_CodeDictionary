import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Form from '../Signup'
 
export default class Modalpopup extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Login</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2><Form /></h2>
        </Modal>
      </div>
    );
  }
}