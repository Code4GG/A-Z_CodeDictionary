import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Code" value={0} />
          <Tab label="FrameWorks" value={1} />
          <Tab label="Libraries" value={2} />
          <Tab label="API's" value={3} />
          <Tab label="Toolbelt" value={4} />
          <Tab label="Slang" value={5} />
          <Tab label="Resources" value={6} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
          </div>
          <div style={styles.slide}>
          </div>
          <div style={styles.slide}>
          </div>
          <div style={styles.slide}>
          </div>
          <div style={styles.slide}>
          </div>
          <div style={styles.slide}>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

