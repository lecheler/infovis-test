import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';
import Directions from './components/Directions';
import Start from './components/Start';
import Test from './components/Test';

const App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Directions} />
        <Route path="/start" component={Start} />
        <Route path="/test" component={Test} />
      </Router>
    );
  },
});

export default App;
