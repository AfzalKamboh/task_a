import React, { useState } from 'react';
import { Card, Radio, Button } from 'antd';

const UserParticipation = ({ choices, onVote }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleVote = () => {
    if (selectedChoice) {
      onVote(selectedChoice);
    }
  };

  return (
    <Card>
      <Radio.Group
        onChange={(e) => setSelectedChoice(e.target.value)}
        value={selectedChoice}
      >
        {choices.map((choice, index) => (
          <Radio key={index} value={index}>
            {choice}
          </Radio>
        ))}
      </Radio.Group>
      <Button type="primary" onClick={handleVote}>
        Submit Vote
      </Button>
    </Card>
  );
};

export default UserParticipation;
