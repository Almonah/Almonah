import React, { Component } from 'react';
import Greeting from './Greeting';
import Question from './Question';
import Congratulation from './Congratulation';
import '../App.css';
import steps from '../res/steps';

class App extends Component {

  state = {
      step: 0,
      correctAnswer: false
  };

  nextStep = () => {
    this.setState({step: this.state.step+1});
  };

  getCurrentQuestion = () => {
    return this.state.step > steps.steps.length ? null : steps.steps[this.state.step - 1];
  }

    getCurrentGift = () => {
        //return (this.state.step > 4 && (this.state.step % 5 === 0)) ? steps.gifts[Math.floor(this.state.step/5)-1] : null;
        return steps.gifts[Math.floor((this.state.step-1)/5)];
    }

  render() {
    const body = !this.state.step
        ? <Greeting nextStep={this.nextStep}/>
        : (this.state.step <= steps.steps.length
            ?<Question
              key={this.state.step}
              question={this.getCurrentQuestion()}
              gift={this.getCurrentGift()}
              nextStep={this.nextStep}
              step={this.state.step}/>
            : <Congratulation/>);
    return (
      <div className="App">
          {body}
      </div>
    );
  }
}

export default App;
