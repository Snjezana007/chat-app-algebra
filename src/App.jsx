import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Messages from "./Messages";
import Input from "./Input";



function randomName() {
  const adjectives = ["Green", "Yellow", "Red", "Orange", "Blue", "Purple", "Violet", "Gold", "White", "Turquoise", "Teal", "Coral", "Magenta", "Maroon", "Lavender",
    "Navy", "Olive", "Plum", "Salmon", "Tan", "Peach", "Sky blue", "Mint green", "Rose", "Lilac", "Mustard", "Orchid", "Slate gray"];
  const nouns = ["Lion", "Wolf", "Shark", "Penguin", "Gorilla", "Koala", "Owl", "Dolphin", "Zebra", "Panda", "Kangaroo", "Squirrel", "Elephant", "Eagle", "Crocodile", "Peacock", "Lemur", "Flamingo", "Lobster", "Bison", "Toucan", "Chimpanzee", "Otter", "Jellyfish",
    "Meerkat", "Sloth", "Corgi", "Raccoon"];

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}



const App = () => {
  const [member, setMember] = useState({
    username: randomName(),
  });

  const [drone, setDrone] = useState();
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    if (!drone) {
      const drone = new window.Scaledrone(`${process.env.REACT_APP_CHANNEL_ID}`, {
        data: member,
      });
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        member.id = drone.clientId;
        setMember(member);
      });
      setDrone(drone);
    } else {
      const room = drone.subscribe("observable-room");
      room.on("message", (message) => {
        const { member, data } = message;
        setMessages((mess) => [...mess, { member, text: data }]);
      });
    }
  }, [drone, member]);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Chat App Algebra</h1>
      </div>
      <Messages
        messages={messages}
        currentMember={member}
      />
      <Input
        onSendMessage={onSendMessage}
      />
    </div>
  );
}

export default App;

