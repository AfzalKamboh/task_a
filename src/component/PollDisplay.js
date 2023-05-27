import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const PollDisplay = ({ question, choices, voteCounts }) => {
  return (
    <Card>
      <Title level={4}>{question}</Title>
      {choices.map((choice, index) => (
        <p key={index}>
          {choice}: {voteCounts[index]}
        </p>
      ))}
    </Card>
  );
};

export default PollDisplay;
