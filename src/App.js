import React, { Component } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './feedback/Statistics/Statistics';
import Section from './feedback/Section/Section';
import Notification from './feedback/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackButtonClick = e => {
    e.preventDefault();
    const prevStateName = e.target.textContent.toLowerCase();
    
    this.setState(
      prevState => (
        { [prevStateName]: prevState[prevStateName] + 1 }
      )
    )
  }
  
  countFullStats = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = total === 0 ? 0
      : Math.round((good / total) * 100);
    
    const allStats = {good, neutral, bad, total, positiveFeedback}
    return allStats;
  }

  render() {
    const statsCnt = Object.values(this.state).reduce((acc, item) => (acc + item));
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions title={"Please leave feedback"} onFeedbackButtonClick={this.onFeedbackButtonClick}/>
        </Section>
        <Section title="Statistics">
          {
            statsCnt === 0
            ? <Notification />
            : < Statistics title="Statistics" stats={this.countFullStats()} />
          }
        </Section>
        
         
      </>
    )
  };
}

export default App;
