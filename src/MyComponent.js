import React, { useState } from 'react';
// import { ChatBot } from 'react-chatbotify';
import ChatBot from "react-chatbotify";


const MyComponent = () => {
  const [userResponses, setUserResponses] = useState({
    name: '',
    age: '',
    favoriteColor: ''
  });

  const flow = {
    start: {
      message: "Welcome! What is your name?",
      path: "askAge"
    },
    askAge: {
      message: (params) => {
        setUserResponses((prev) => ({ ...prev, name: params.userInput }));
        return `Nice to meet you, ${params.userInput}! How old are you?`;
      },
      path: "askFavoriteColor"
    },
    askFavoriteColor: {
      message: (params) => {
        setUserResponses((prev) => ({ ...prev, age: params.userInput }));
        return `Great! And what is your favorite color?`;
      },
      path: "end"
    },
    end: {
      message: (params) => {
        setUserResponses((prev) => ({ ...prev, favoriteColor: params.userInput }));
        return `Thank you, ${userResponses.name}! You are ${userResponses.age} years old and your favorite color is ${userResponses.favoriteColor}.`;
      },
    //   chatDisabled: true
    }
  };

  return (
    <ChatBot
      settings={{ general: { embedded: true }, chatHistory: { storageKey: "conversations_summary" } }}
      flow={flow}
    />
  );
};

export default MyComponent;
