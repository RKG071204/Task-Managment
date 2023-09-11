import React from 'react';
import { Link } from 'react-router-dom';

const Messages = () => {
  return (
    <div className="content-main">
      <div className="messages-header">
        <h2>Messages</h2>
        <Link to="/comments" className="comments-button">
          COMMENTS
        </Link>
      </div>
      {/* Add your messages content here */}
    </div>
  );
};

export default Messages;
