import React from 'react';
import Client from '../Client';

const Main = React.createClass({
  getInitialState: function () {
    return {
      test: ['stufsdf'],
      page: 0,
    };
  },
  testClick() {
    console.log('test');
    Client.ping((cb) => {
      console.log(cb);
      this.setState({
        test: cb,
      });
    });
  },
  goToNextPage() {
    this.props.updatePage(2);
  },
  render: function () {
    return(
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui text container">
            <h1 className="ui inverted header">
              Educational Research
            </h1>      
            <h2>Thank you for participating in this research study.</h2>
            <div className="ui input">
              <input type="text" placeholder="enter your email" />
            </div>
            <div onClick={this.goToNextPage} className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
          </div>
        </div>
        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
                <h3 className="ui header">We Help Companies and Companions</h3>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                <h3 className="ui header">We Make Bananas That Can Dance</h3>
                <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
            </div>
            <div className="row">
              <div className="center aligned column">
                <a className="ui huge button">Check Them Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default Main;
