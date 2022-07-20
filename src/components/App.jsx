import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0  
  }

  handleIncrement = (evt) => {
    const stateName = evt.currentTarget.name;
    this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
    console.log(evt.currentTarget);
  }

  countTotalFeedback () {
    return Object.values(this.state).reduce((total, item) => total + item, 0) 
       
       }

       countPositiveFeedbackPercentage  () {
        return  Math.round((this.state.good / this.countTotalFeedback ()) * 100)
     }

     
     render(){
    const btn = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
      <GlobalStyle/>
      <Section title={"Please leave feedback"}>
      <FeedbackOptions 
          options={btn} 
          onLeaveFeedback={this.handleIncrement}
      />
      </Section> 
        
      
      {this.countTotalFeedback ()? <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={this.countTotalFeedback()} 
          positivePercentage={this.countPositiveFeedbackPercentage()}
       /> : <Notification message={"There is no feedback"}/>}
      </div>
    );
  }
}

export default App;
