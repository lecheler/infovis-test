import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import Main from './components/Main'
import Directions from './components/Directions';
import Test from './components/Test';

const App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Main} />
        <Route path="/directions" component={Directions} />
        <Route path="/test" component={Test} />
      </Router>
    );
  },
});

export default App;
