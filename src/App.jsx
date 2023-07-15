import React, { Component } from "react";
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
    messages: [
      {
        id: 1,
        member: {
          id: 1,
          clientData: {
            username: randomName(),
            color: randomColor(),
          },
        },
        text: "Pozdrav!",
      },
      {
        id: 2,
        member: {
          id: 2,
          clientData: {
            username: randomName(),
            color: randomColor(),
          },
        },
        text: "Bok",
      },
    ],
    currentMember: {
      id: 1,
      username: randomName(),
      color: randomColor(),
    },
  };

  render() {
    const { messages, currentMember } = this.state;

    return (
      <div className="App">
        <Messages messages={messages} currentMember={currentMember} />
      </div>
    );
  }
}

export default App;