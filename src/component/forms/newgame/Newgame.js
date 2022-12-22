import React,{useState} from 'react';
import {Link} from "react-router-dom";
import styles from './newgame.css';
import { useChatContext, Channel } from "stream-chat-react";
import Game from "../game/Game";
import Board from "../board/Board";

function Newgame() {
  const [values,setValues]= useState({
    //  username:"",
      email:"",
      password:"",
    });
  const [rivalUsername, setRivalUsername] = useState("");
  const { client } = useChatContext();
  const [channel, setChannel] = useState(null);
  const createChannel = async () => {
    const response = await client.queryUsers({ name: { $eq: rivalUsername } });

    if (response.users.length === 0) {
      alert("User not found");
      return;
    }

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    });
   
    await newChannel.watch();
    setChannel(newChannel);
  };
// const Newgame = () => {

  return (
    <>
    {channel ? (
       <Channel channel={channel}
       //Input={CustomInput}
       >
        <Game channel={channel} setChannel={setChannel} />
       </Channel>
    ) : (
    <div className="newgame">
    
    <h3 className="heading3">Start a new game</h3>
    <h1 className='heading1'>Whom do u want to play with? </h1>
    
    <div>
      <label className="lbl" htmlFor='username' id="usrnm">Username</label>
      <input className="inp" type="text" name="usrnm" id="username" autoComplete="offf" placeholder="Enter Their username here" onChange={event=>setValues(prev=>({...prev,username:event.target.value}))}
     
    />
     
    </div>
    
    <button className="btn" onClick={createChannel}><Link to="/game">Start Game</Link></button>
    
    </div>
  )
}
</>
  );
}

export default Newgame;
