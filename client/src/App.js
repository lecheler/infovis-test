import React from 'react';
import Main from './components/Main'
import Directions from './components/Directions';
import Test from './components/Test';

const App = React.createClass({
  getInitialState: function () {
    return {
      page: 3,
    };
  },
  updatePage(value) {
    console.log('update page = ' + value);
    this.setState( { page: value });
  },
  render: function() {
    if (this.state.page === 0) {
      return(
        <Main updatePage={this.updatePage} />
      )
    } 
    else if (this.state.page === 2) {
      return (
        <Directions updatePage={this.updatePage} />
      );
    }
    else if (this.state.page === 3) {
      return (
        <Test />
      );
    }
  },
});

export default App;
