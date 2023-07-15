import React, { Component } from "react";

class Messages extends Component {
  renderMessages() {
    const { messages } = this.props;

    return messages.map((message) => {
      const { member, text } = message;
      const { currentMember } = this.props;
      const messageFromMe = member.id === currentMember.id;
      const className = messageFromMe
        ? "Messages-message currentMember"
        : "Messages-message";

      return (
        <li className={className}>
          <span
            className="avatar"
            style={{ backgroundColor: member.clientData.color }}
          />
          <div className="Message-content">
            <div className="username">{member.clientData.username}</div>
            <div className="text">{text}</div>
          </div>
        </li>
      );
    });
  }

  render() {
    return <ul className="Messages-list">{this.renderMessages()}</ul>;
  }
}


export default Messages;