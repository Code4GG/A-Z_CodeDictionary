import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleComposition from './components/Title';
import TableExampleComplex from './components/Table'
import Editbutton from './components/Editbutton'
import Login from './components/Login'
import Form from './components/Signup'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
      <AppBarExampleComposition />
      <TableExampleComplex />
      <Login />
      <Form />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
