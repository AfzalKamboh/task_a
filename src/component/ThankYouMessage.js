import React from 'react';
import { Result, Button } from 'antd';

const ThankYouMessage = ({ onResetVote }) => {
  const handleResetVote = () => {
    onResetVote();
  };

  return (
    <Result
      status="success"
      title="Thank you for voting!"
      extra={[
        <Button key="reset" type="primary" onClick={handleResetVote}>
          Participate Again
        </Button>,
      ]}
    />
  );
};

export default ThankYouMessage;
