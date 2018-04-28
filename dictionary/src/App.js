import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleComposition from './components/Title';
import TableExampleComplex from './components/Table'



class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
      <AppBarExampleComposition />
      <TableExampleComplex />
       <p>Hello World</p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
