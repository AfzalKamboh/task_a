import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import PollDisplay from './component/PollDisplay';
import UserParticipation from './component/UserParticipation';
import AnotherUserParticipation from './component/AnotherUserParticipation';
import ThankYouMessage from './component/ThankYouMessage';

const { Content } = Layout;

const App = () => {
  const [question, setQuestion] = useState('What is your favorite programming language??');
  const [choices, setChoices] = useState([
    'JavaScript',
    'Python',
    'Java',
    'C#',
  ]);
  const [voteCounts, setVoteCounts] = useState([0, 0, 0, 0]);
  const [userSelection, setUserSelection] = useState(null);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleVote = (choiceIndex) => {
    const newVoteCounts = [...voteCounts];
    newVoteCounts[choiceIndex] += 1;
    setVoteCounts(newVoteCounts);
    setUserSelection(choiceIndex);
    setShowThankYouMessage(true);
  };

  const handleResetVote = () => {
    setUserSelection(null);
    setShowThankYouMessage(false);
  };

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]}>
          <Col span={12} offset={6}>
            <PollDisplay
              question={question}
              choices={choices}
              voteCounts={voteCounts}
            />
            {!userSelection && !showThankYouMessage && (
              <UserParticipation choices={choices} onVote={handleVote} />
            )}
            {userSelection && !showThankYouMessage && (
              <AnotherUserParticipation onResetVote={handleResetVote} />
            )}
            {showThankYouMessage && (
              <ThankYouMessage onResetVote={handleResetVote} />
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
