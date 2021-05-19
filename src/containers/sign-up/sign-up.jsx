import React, { useCallback } from "react";
import app from './../../base';
import {Link} from "react-router-dom"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <div className="header">
        <div className="wrapper">
        <div className="header_flex">
        <div className="navigation">
            <div className="coin_logo">
           <img className="coin" src="./images/coin-in-hand.png" alt="Logo"></img>
        </div>
           <ul className="nav">
           <li><Link to="/">HOME</Link></li>
           <li><Link to="/">PROFILE</Link></li>
           <li><Link to="/contact">CONTACT US</Link></li>
           <li><Link to="/wallet">WALLET</Link></li>
           
           <div className="registr">
           <button onClick={() => app.auth().signOut()}>Sign out</button>
           </div>

        </ul>
        
        </div>
      </div>
    </div>
    </div>
    
      <div className='signUp'>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  );
};

export { SignUp };
