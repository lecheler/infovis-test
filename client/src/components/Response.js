import React from 'react';

const Response = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  render: function () {
    return (
      <div className="ui form">
        <div className="grouped fields">
          <label>How often do you use checkboxes?</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" checked="checked" />
              <label>Once a week</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>2-3 times a week</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Once a day</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Twice a day</label>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default Response;
