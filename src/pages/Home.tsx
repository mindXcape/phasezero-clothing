import React from 'react';
import Message from '../Provider/Message';

const Home: React.FC = function Home() {
  // destructuring success message and error message of message provider
  const { showSuccessMessage, showErrorMessage } = Message();
  const messageHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // handling message
    showErrorMessage('Error message');
  };
  return (
    <button type="button" onClick={(e) => messageHandler(e)}>
      Hello World
    </button>
  );
};

export default Home;
