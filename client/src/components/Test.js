import React from 'react';
import Response from './Response';
import Table from './tests/Table';
import Chart from './tests/Chart';
import Client from '../Client';

const Test = React.createClass({
  getInitialState() {
    return {
      questions: [],
      questionNumber: 1,
      questionType: 0,
      questionText: 'Donec at interdum nisi, eu lacinia dui. Donec lorem tortor, tincidunt lacinia porta et, convallis eget arcu. Nam sit amet interdum justo. Morbi id iaculis nibh. Proin efficitur odio sem, nec sollicitudin ipsum faucibus non?',
    };
  },
  componentWillMount() {
    console.log('componentWillMount');
    Client.getQuestions((cb) => {
      this.setState({
        questions: cb,
      });
    });
  },
  goToNextQuestion() {
    const value = this.state.questionNumber++;
    this.setState({ 
      questionNumber: value,
      questionType: value,
      promptText: 'Use the following information to answer the question below.',
      questionText: 'Of all the students, who is more likely to score the highest?',
    });
  },
  render() {
    if (this.state.questions.length === 0) {
      return (<div />);
    }
    let prompt = (
      <Table />
    );
    if (this.state.questionType === 1) {
      prompt = (
        <Chart />
      );
    } else if (this.state.questionType === 2) {
      <div>{this.state.questionType }</div>
    }
    return (
      <div className='ui text container'>
        <h1>Question {this.state.questionNumber} of 18</h1>
        <div className="ui indicating progress">
          <div className="bar"></div>
        </div>
        <div className="ui divider"></div>
        { this.state.questionText }
        <div className="ui divider"></div>
        { prompt }
        <div className="ui divider"></div>
        <Response />
        <div className="ui divider"></div>
        <div onClick={this.goToNextQuestion} className="ui huge primary button">Next <i className="right arrow icon"></i></div>
      </div>
    );
  },
});

export default Test;

//     min-width: 50em;
