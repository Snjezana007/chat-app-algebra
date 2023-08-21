# Chat App

This is ReactJS project that was made as part of my Front end development course on Algebra University College. It's a simple Chat Application that generates random username and color (avatar) for it's users. The application is connected via Scaledrone which enables real time conversation/chat between different users.

To run this chat application locally, follow these steps:

Use the following command to clone this repository to your local machine:

git clone https://github.com/Snjezana007/chat-app-algebra.git

Install the required dependencies:
npm install

Once the dependencies are installed, start the application:
npm start

The application should now be running locally at http://localhost:3000/ in your web browser.

Here's an explanation of the application code:

- In the main component of the aplication (App.jsx) first the code imports React, useState, useEffect from React, as well as CSS styles, and two custom components, "Messages" and "Input."

Then function "randomName" generates a random username by combining a random adjective and noun from predefined arrays.

App Component: This is the main component of the chat application. It uses React hooks, useState and useEffect, to manage the component's state. This is the main component for the chat application, and useState and useEffect hooks are used to manage state and asynchronous operations like initializing Scaledrone and subscribing to real-time messages.

State Initialization: The component initializes three pieces of state:
member: Contains information about the current user, including their randomly generated username.
drone: Holds an instance of Scaledrone, which is used for real-time communication.
messages: Stores an array of messages.
useEffect Hook: This hook is used for specific tasks when the component mounts (drone initialization) or when drone changes (subscribing to a room for message exchange).

onSendMessage Function: This function is called when a user wants to send a message. It publishes the message using the drone.publish method.

Component Rendering: The component renders the user interface using JSX, including a title, the "Messages" component to display messages, and the "Input" component for sending new messages.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
