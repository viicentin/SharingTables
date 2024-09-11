import React from 'react';

function Message({ src }) {
  return (
    <div className="message">
      <img src={src} alt="Message" />
    </div>
  );
}

export default Message;
