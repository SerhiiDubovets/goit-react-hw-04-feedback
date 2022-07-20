import React from "react";
import { StatisticsSection, Title, Text, Value, ValuePercentage } from "./Statistics.styled";
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return <StatisticsSection>
   <Title>Statistics</Title>
   <Text>Good:
      <Value good>{good}</Value>
   </Text>
   <Text>Neutral:
      <Value neutral>{neutral}</Value>
   </Text>
   <Text>Bad:
      <Value bad>{bad}</Value>
   </Text>
   <Text>Total:
      <Value>{total}</Value>
   </Text>
   <Text>Positive feedback:
      <ValuePercentage positivePercentage={positivePercentage}>{positivePercentage}</ValuePercentage>
      %
   </Text>
  </StatisticsSection>
}

export default Statistics;

Statistics.propTypes = {
   good: PropTypes.number, 
   neutral: PropTypes.number, 
   bad: PropTypes.number, 
   total: PropTypes.number, 
   positivePercentage: PropTypes.number, 
}