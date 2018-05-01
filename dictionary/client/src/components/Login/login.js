import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import api from "../../utils";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  change = event => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    
    api.Database.logIn(this.state.username, this.state.password)
    .then(data => {
      console.log(data);
      localStorage.setItem("username", JSON.stringify(data.data.username));
      localStorage.setItem("user_id", JSON.stringify(data.data.user_id));
    })

    this.setState({
      username: "",
      password: ""
    });
    
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
          label="Login" 
          onClick={event => this.onSubmit(event)} 
          primary style={{marginLeft: '260px'}}/>
        
      </form>
    );
  }
}