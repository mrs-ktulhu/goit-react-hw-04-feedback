import React from 'react';
import { FeedbackButton } from './FeedbackOptions.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="CounterControls">
      {options.map((option, index) => (
        <FeedbackButton
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </div>
  );
};
export default FeedbackOptions;
