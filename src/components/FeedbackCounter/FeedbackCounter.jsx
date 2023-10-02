import React from 'react';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import {Counter} from './FeedbackCounter.styled'

class FeedbackCounter extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setFeedback = typeOfFeedback => {
    this.setState(prevFeedback => ({
      [typeOfFeedback]: prevFeedback[typeOfFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const countTotalFeedback = this.countTotalFeedback();
    return Math.round((this.state.good / countTotalFeedback) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Counter>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.setFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Counter>
    );
  }
}

export default FeedbackCounter;