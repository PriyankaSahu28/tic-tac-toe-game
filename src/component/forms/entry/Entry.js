import React from 'react';
import {Link }from "react-router-dom";
import styles from "./Entry.module.css";
function Entry(){
  return (
    <div>
        <h3 className={styles.heading3}>async</h3>

        <h1 className={styles.heading1}>Tic Tac Toe</h1>
       
        <button className={styles.newlog} >
            <Link to="/login">Log in</Link>
        </button>
         <button className={styles.newreg}><Link to="/register">Register</Link></button>
    </div>
  );
}

export default Entry