import RaisedButton from 'material-ui/RaisedButton'; 
import React, { Component } from 'react'

import { Dialog, FlatButton, Tabs, Tab,  TableRow, TableRowColumn } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  margin: 12,
};

export default class Editbutton extends React.Component {

  static fields = [{tab1:"edit"}];

  state = {
    open: false,
  }

  handleOpen = (field) => () => {
    this.setState({
      open: field
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  renderRows = (field, i) => {
    const { open } = this.state;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (

        <div key={i}>
          <FlatButton
          label="Edit"
          style={this.style}
          /*icon={<ContentAdd/>}*/
          onClick={this.handleOpen(field.tab1)}
          />
        <Dialog
          title="Define the word at it's best"
          actions={actions}
          modal={false}
          open={open === field.tab1}
          onClick={this.handleClose}
        >
        <Tabs>
          <Tab label={field.tab1} >
            <div>
              <h2>{field.tab1}</h2>
              <p>
                This is one tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </Dialog>
      </div>
);
  }


  render() {
    const rows = Editbutton.fields.map(this.renderRows);
    return (

        rows

    )
  }
}




