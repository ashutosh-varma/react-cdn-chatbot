// App.js
import React from 'react';
import ChatBotIframe from './ChatBotIframe';

function App() {
  return (
    <div  style={{ height:'100vh' , width:'100%', display:'flex' , justifyContent:'center' , alignItems:'center',flexDirection:'column'}}>
      <h1>My React App</h1>
      <ChatBotIframe />
    </div>
  );
}

export default App;
