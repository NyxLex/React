import React from "react";
import { Link } from "react-router-dom";
import app from "./../../base";
const Contact = () => {
    return (
        <div className="body">
            <div className="header">
                <div className="wrapper">
                    <div className="header_flex">
                        <div className="navigation">
                            <div className="coin_logo">
                                <img
                                    className="coin"
                                    src="./images/coin-in-hand.png"
                                    alt="Logo"
                                ></img>
                            </div>
                            <ul className="nav">
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/">PROFILE</Link>
                                </li>
                                <li>
                                    <Link to="/contact">CONTACT US</Link>
                                </li>
                                <li>
                                    <Link to="/wallet">WALLET</Link>
                                </li>

                                <div className="registr">
                                    <button
                                        onClick={() => app.auth().signOut()}
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
          
            </div>
            <form className = "contact">
                <div className = "soup">
                <label for="fname">First Name</label>
                <input type="text" name="firstname" placeholder="Your name.."></input>
                <label for="lname">Last Name</label>
                <input type="text"  name="lastname" placeholder="Your last name.."></input>
                <label for="country">Country</label>
                <select  name="country">
                <option value="Ukraine">Ukraine</option>
                <option value="Poland">Poland</option>
                <option value="Belarus">Belarus</option>
                </select>
                <label for="subject">Subject</label>
                <textarea  name="subject" placeholder="Write something.." ></textarea>
                <input type="submit" value="Submit"></input>
                </div>
          </form>
        </div>
        
    );
};
export { Contact };
