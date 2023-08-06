import React, { Component } from 'react';
import './App.css';
import Messages from "./Messages";


function randomName() {
  const adjectives = ["Green", "Yellow", "Red", "Orange", "Blue", "Purple", "Violet", "Gold", "White", "Turquoise", "Teal", "Coral", "Magenta", "Maroon", "Lavender",
    "Navy", "Olive", "Plum", "Salmon", "Tan", "Peach", "Sky blue", "Mint green", "Rose", "Lilac", "Mustard", "Orchid", "Slate gray"];
  const nouns = ["Lion", "Wolf", "Shark", "Penguin", "Gorilla", "Koala", "Owl", "Dolphin", "Zebra", "Panda", "Kangaroo", "Squirrel", "Elephant", "Eagle", "Crocodile", "Peacock", "Lemur", "Flamingo", "Lobster", "Bison", "Toucan", "Chimpanzee", "Otter", "Jellyfish",
    "Meerkat", "Sloth", "Corgi", "Raccoon"];

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("ImB5jZWgMgCKsQPL", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-chat-app-algebra");
    room.on('data', (data, member) => {
      const messages = [...this.state.messages];
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chat App Algebra</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-chat-app-algebra",
      message
    });
  }

}

export default App;
