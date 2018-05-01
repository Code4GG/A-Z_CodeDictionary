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
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  // api.Database.newUser(this.state.username, this.state.password)
  //   .then(data => {
  //     console.log(res.data);
  //     this.setState({ 
  //       username: this.state.username
  //       password: this.state.password
  //     })
  //   });

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



  // onSubmit = event => {
  //   event.preventDefault();
  //   // this.props.onSubmit(this.state);
  //   this.setState({
  //     firstName: "",
  //     lastName: "",
  //     username: "",
  //     email: "",
  //     password: ""
  //   });
  // };

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