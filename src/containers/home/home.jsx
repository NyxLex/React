import React from "react";
import app from "./../../base";
import {Link} from "react-router-dom"


const style = {
	paddingTop: '50px'
}

const Home = () => {
	return (
		<div className='body'>
		

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
    <div class="block">
        <div className="first_block">
            <div className="text_block">Helping you gain control of your money
            <div className="control_money">The are 200 organisations in Ukraine that offer free budgeting advice. These services are free, confidential and non-judgmental.

                Each year these organisations help more than 50,000 people with issues ranging from financial crisis and debt management to saving for the future.
                
                We offer over-the-phone budgeting support, and can put you in touch with your local service for further face-to-face help from a Financial Mentor.
            </div>
            </div>
            <div class="budget_img">
                <img className="budget" src="./images/budget.jpg" alt=""></img>
                <img className="onemorebudget" src="./images/onemorebudget.jpg" alt=""></img>
            </div>
        </div>
    </div>
			<button onClick={() => app.auth().signOut()}>Sign out</button>
		</div>
	);
};

export { Home };
