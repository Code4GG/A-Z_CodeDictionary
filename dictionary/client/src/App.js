import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleComposition from './components/Title';
import TableExampleComplex from './components/Table'
import Editbutton from './components/Editbutton'
// import mackCalendar from 'Calendar';
 
// const SomeComponent = () => (
//   <Calendar />
// );


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
      <AppBarExampleComposition />
      <TableExampleComplex />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
