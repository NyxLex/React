import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";

import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";


import { Home } from "./containers/home/home";
import { Login } from "./containers/login/login";
import { SignUp } from "./containers/sign-up/sign-up";
import { Contact } from "./containers/contact/contact";
import "./style.scss"
import "./header.scss"
import { WalletPage } from "./containers/wallet/wallet";


const App = () => {
	return (
		<AuthProvider>
			<Router>
				<div>
					<PrivateRoute exact path='/' component={Home} />
					<Route exact path='/login' component={withRouter(Login)} />
					<Route exact path='/signup' component={withRouter(SignUp)} />
					<Route exact path='/wallet' component={WalletPage} />
					<Route exact path='/contact' component={Contact} />
				</div>
			</Router>
		</AuthProvider> 
	);
};

export default App;
