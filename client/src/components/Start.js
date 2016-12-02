import React from 'react';

const Start = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  render: function () {
    return (
      <div className='ui text container'>
        <h1>Begin</h1>
        <div className="ui input">
          <input type="text" placeholder="email" />
          <div className="ui animated button" tabindex="0">
            <div className="visible content">Next</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default Start;
