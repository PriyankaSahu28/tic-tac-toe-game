import './App.css';
import React, { useEffect,useState } from 'react';
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { BrowserRouter as Router,Routes ,Route, }from "react-router-dom";
import Login from './component/forms/login/Login';
import Entry from './component/forms/entry/Entry';
import Home from './component/forms/home/Home';
import Register from './component/forms/Register/Register';
import Newgame from './component/forms/newgame/Newgame';
import Game from './component/forms/game/Game';
import Board from './component/forms/board/Board';
import { auth } from './firebase';
import db from './firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';

import reportWebVitals from './reportWebVitals';

import { Box } from '@mui/system';


const App=() =>{
  const api_key = "bpd6qa84cnrc";
  const [username,setUserName]= useState("");
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }else setUserName("");
    });
  }, []);

  // firebase.database().ref('user')
  //   .orderByChild('user_details/username')
  //   .equalTo(username)
  //   .once('value', snapshot => {
  //     if (!snapshot.exists()) {
  //       console.log('No users found')
  //     }
  //     else {
  //       snapshot.forEach(child => {
          
  //           setIsAuth(true);
         
  //         console.log('User found: '+child.key)
  //       });
  //     }
  //   });
  return (
   <div>
    <Router>
      <Routes>
      <Route path="/" element={<Entry />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
         <Route path="/newgame" element={<Newgame />}></Route> 
         <Route path="/game" element={<Game />}></Route> 
         <Route path="/board" element={<Board />}></Route>
       
      </Routes>
    </Router>
     
   </div>
    
  )
}

export default App;
