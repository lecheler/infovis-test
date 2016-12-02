import React from 'react';
import '../semantic-ui/semantic.min.css';

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
      </div>
    );
  },
});

export default Test;
