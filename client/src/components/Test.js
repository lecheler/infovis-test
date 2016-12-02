import React from 'react';
import Response from './Response';
import Table from './tests/Table';
import Chart from './tests/Chart';

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
        Donec at interdum nisi, eu lacinia dui. Donec lorem tortor, tincidunt lacinia porta et, convallis eget arcu. Nam sit amet interdum justo. Morbi id iaculis nibh. Proin efficitur odio sem, nec sollicitudin ipsum faucibus non?
        <div className="ui divider"></div>
        <Table />
        <div className="ui divider"></div>
        <Chart />
        <div className="ui divider"></div>
        <Response />
        <div className="ui divider"></div>
        <div className="ui huge primary button">Next <i className="right arrow icon"></i></div>
      </div>
    );
  },
});

export default Test;
