const Messages = ({ messages, currentMember }) => {
  const renderMessage = (message, idx) => {
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    const dynamicText = member.clientData.username;
    const imageUrl = `https://ui-avatars.com/api/?name=${dynamicText}&background=random`; 

    return (
      <li className={className} key={idx}>
        <span className="avatar">
          <img src={imageUrl} alt="Avatar"/>
        </span>
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="Messages-list">
      {messages.map((m, idx) => renderMessage(m, idx))}
    </ul>
  );
};

export default Messages;
