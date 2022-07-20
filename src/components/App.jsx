import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = evt => {
    const stateName = evt.currentTarget.name;
    console.dir(evt.currentTarget);
    switch (stateName) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const btn = ['good', 'neutral', 'bad'];

  return (
    <div>
      <GlobalStyle />
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={btn} onLeaveFeedback={handleIncrement} />
      </Section>

      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}
