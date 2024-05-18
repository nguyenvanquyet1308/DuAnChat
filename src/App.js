import React from 'react';
import './App.css';
import List from './components/list/List';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import Login from './components/login/Login'
import Notfication from './components/notfication/Notfication';

function App() {
   
  const user = true;  

  return (      
    <div className="container">
      {user ?( <>
      <List/>
      <Chat/>
      <Detail/>
      </>):(<Login/>)}
      <Notfication/>
    </div>
  );
}
export default App;
