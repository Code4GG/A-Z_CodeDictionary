import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Autocomplete from 'react-autocomplete'
import AutoCompleteExampleSimple from '../Search'
import ButtonToolbar from 'react-bootstrap/lib/Button';
import Editbutton from '../Editbutton';
import TabsExampleSwipeable from '../Tabs'
import api from "../../utils/API.js";




const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};
const style = {
  margin: 12,
};

const tableData = [
  {
    Word: '<a>',
    Definition: 'Defines a hyperlink',
  },
  {
    Word: '<abbr>',
    Definition: 'Defines an abbreviation or acronym',
  },
  {
    Word: '<address>',
    Definition: 'Defines contact information for the author',
  },
  {
    Word: '<area>',
    Definition: 'Defines an area inside an image-map',
  },
  {
    Word: '<article>',
    Definition: 'Defines an article',
  },
  {
    Word: '<aside>',
    Definition: 'Defines content aside from the page content',
  },
  {
    Word: '<audio>',
    Definition: 'Defines sound content',
  },
  {
    Word: '<b>',
    Definition: 'Defines bold text',
  },
  {
    Word: '<body>',
    Definition: 'Defines the document/`s body',
  },
];
  

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: false,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  // componentDidMount(){
  //   this.loadWords();
  // }

  // loadWords = () => {
  //   this.setState({ Words: [] })
  //   api.getWords()
  //     .then(data =>
  //       this.setState({ Words: data.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                <AutoCompleteExampleSimple />
                <RaisedButton label="Add" style={style} />
                <RaisedButton label="Change" tooltip="To change A definition click the edit button and apply the correction where necessary" style={style} />
                <RaisedButton label="Move" tooltip="To move A definition click and drag that word to the correct category" style={style} />
                <RaisedButton label="Report" style={style} />
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
            <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                <TabsExampleSwipeable />
            </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Do It">Add your own touch</TableHeaderColumn>
              <TableHeaderColumn tooltip="Hey">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Study">Definition</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map((row, i) => (
              <TableRow key={i}>
                <TableRowColumn><Editbutton /></TableRowColumn>
                <TableRowColumn>{row.Word}</TableRowColumn>
                <TableRowColumn>{row.Definition}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>

        <div style={styles.propContainer}>

        </div>
      </div>
    );
  }
}

