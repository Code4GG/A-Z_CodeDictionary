import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton'; 

const style = {
  margin: 12,
};

class Editbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    console.log("hello")
  }

  render() {
    return (
      <div>
        {/*<RaisedButton label="Edit" secondary={true} style={style} onClick={this.toogle} />*/}
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          Hi
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Editbutton;

