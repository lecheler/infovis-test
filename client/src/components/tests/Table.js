import React from 'react';

const Table = React.createClass({
  render: function () {
    return (
      <div className='ui text container'>
        <table className="ui sortable celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="sorted ascending">Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Jamie</td>
              <td className="positive">Approved</td>
              <td className="warning">Requires call</td>
            </tr><tr>
              <td>Jill</td>
              <td className="negative">Denied</td>
              <td>None</td>
            </tr><tr>
              <td>John</td>
              <td>No Action</td>
              <td>None</td>
            </tr></tbody>
          <tfoot>
            <tr><th>3 People</th>
            <th>2 Approved</th>
            <th></th>
          </tr></tfoot>
        </table>
      </div>
    );
  },
});

export default Table;
