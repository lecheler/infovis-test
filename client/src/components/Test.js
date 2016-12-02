import React from 'react';
import Table from './tests/Table';

const Test = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  render: function () {
    return (
      <div className='ui text container'>
        <h1>Test</h1>
        Question 1.
        <Table />
      </div>
    );
  },
});

export default Test;
