import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import app from "../../base";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;

            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
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
            <div className="login">
                <h1>Log in</h1>
                <form onSubmit={handleLogin}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
};

export { Login };
