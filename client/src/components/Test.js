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
        <h1>Question 1 of 18</h1>
        <div className="ui divider"></div>
        <Table />
        <div className="ui divider"></div>
        Donec at interdum nisi, eu lacinia dui. Donec lorem tortor, tincidunt lacinia porta et, convallis eget arcu. Nam sit amet interdum justo. Morbi id iaculis nibh. Proin efficitur odio sem, nec sollicitudin ipsum faucibus non?
      </div>
    );
  },
});

export default Test;
