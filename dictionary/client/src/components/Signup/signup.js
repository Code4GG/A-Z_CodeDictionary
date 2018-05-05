import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import api from "../../utils";

export default class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };



    handleFormSubmit = event => {
    event.preventDefault();

      api.Database.newUser(this.state.username, this.state.password)
        .then(data => 
          // console.log(data)
        this.setState({
        username: "",
        password: "",
      }))
        .catch(err => console.log(err))
     };



  render() {
    return (
      <form>
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={event => this.change(event)}
          floatingLabelFixed
          style={{marginLeft: '175px'}}
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={event => this.change(event)}
          type="password"
          floatingLabelFixed
          style={{marginLeft: '175px'}}
        />
        <br />
        <RaisedButton 
          label="Sign up" 
          onClick={event => this.handleFormSubmit(event)} 
          style={{marginLeft: '223px'}}
          primary />
      </form>
    );
  }
}