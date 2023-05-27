import React from 'react';
import { Button } from 'antd';

const AnotherUserParticipation = ({ onResetVote }) => {
  const handleResetVote = () => {
    onResetVote();
  };

  return (
    <Button type="primary" onClick={handleResetVote}>
      Participate Again
    </Button>
  );
};

export default AnotherUserParticipation;
