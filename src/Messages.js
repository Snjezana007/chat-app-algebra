import React from "react";

const Messages = ({ messages, currentMember }) => {
  return (
    <ul className="Messages-list">
      {messages.map((message, idx) => (
        <MessageItem
          key={idx}
          message={message}
          currentMember={currentMember}
        />
      ))}
    </ul>
  );
};

const MessageItem = ({ message, currentMember }) => {
  const { member, text } = message;
  const messageFromMe = member.id === currentMember.id;
  const className = messageFromMe
    ? "Messages-message currentMember"
    : "Messages-message";

  const userName = member.clientData.username;
  const imageUrl = messageFromMe
    ? `https://api.dicebear.com/6.x/lorelei/svg?flip=true`
    : `https://api.dicebear.com/6.x/lorelei/svg?flip=false`;

  return (
    <li className={className}>
      <span className="avatar">
        <img src={imageUrl} alt="Avatar" />
      </span>
      <div className="Message-content">
        <div className="username">{userName}</div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
};

export default Messages;
