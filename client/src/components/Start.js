import React from 'react';
import {Rating} from 'react-semantify'; 
// import Client from './Client';

const Start = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  render: function () {
    return (
      <div className='ui text container'>
        <h1>Begin</h1>
        enter code...
        <Rating rating={1} maxRating={5} />
      </div>
    );
  },
});

export default Start;
