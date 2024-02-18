import { useState } from 'react'
import './App.css'
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";



function App() {
  const [user, setUser] = useState(undefined);

  if(!user){
    // App.jsx will render the Authentication Page until a user logs in or signsup ..then
    // then the onAuth callback will set the user state and render the Chats page
    return <AuthPage onAuth={(user) => setUser(user)} />; 
  } else {
    // after authetication success, the onAuth callback will render the Chats page
    return <ChatsPage user={user} />;
    //and pass the user state in as a prop
  }
}



export default App;
