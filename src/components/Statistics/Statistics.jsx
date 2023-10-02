import React from 'react';
import { StatisticsValue } from './Statistics.styled';



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="StatisticsTotal">
    <StatisticsValue>Good: {good}</StatisticsValue>
    <StatisticsValue>Neutral: {neutral}</StatisticsValue>
    <StatisticsValue>Bad: {bad}</StatisticsValue>

    <StatisticsValue>Total: {total}</StatisticsValue>
    <StatisticsValue>Positive feedback: {positivePercentage}%</StatisticsValue>
  </div>
);

export default Statistics;
