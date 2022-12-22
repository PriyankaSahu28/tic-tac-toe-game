import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Home.module.css";
function Home(){
  return (
    <div>
        <h2 className={styles.heading2}>Your Games</h2>

        <h1 className={styles.heading1}>No Games Found</h1>
        <button className={styles.new}><Link to="/newgame">Start a New Game</Link></button>
    </div>
  );
}

export default Home