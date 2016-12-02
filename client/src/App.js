import React from 'react';
import Directions from './components/Directions';
import Start from './components/Start';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

// import SelectedFoods from './SelectedFoods';
// import FoodSearch from './FoodSearch'; 

const App = React.createClass({
  getInitialState: function () {
    return {
      selectedFoods: [],
    };
  },
  render: function() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Directions} />
        <Route path="/start" component={Start} />
      </Router>
    );
  },
  // render: function () {
  //   return (
  //     <div className='App'>
  //       <div className='ui text container'>
  //         <h1>Luke Test</h1>
  //         <SelectedFoods
  //           foods={this.state.selectedFoods}
  //           onFoodClick={
  //             (idx) => (
  //               this.setState({
  //                 selectedFoods: [
  //                   ...this.state.selectedFoods.slice(0, idx),
  //                   ...this.state.selectedFoods.slice(
  //                     idx + 1, this.state.selectedFoods.length
  //                   ),
  //                 ],
  //               })
  //             )
  //           }
  //         />
  //         <FoodSearch
  //           onFoodClick={
  //             (food) => (
  //               this.setState({
  //                 selectedFoods: this.state.selectedFoods.concat(food),
  //               })
  //             )
  //           }
  //         />
  //       </div>
  //     </div>
  //   );
  // },
});

export default App;
