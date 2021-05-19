import React from "react";
import { useFormik } from "formik";
import app from "../../base";
import { Link } from "react-router-dom";

const WalletAddForm = () => {
	const formik = useFormik({
		initialValues: {
			walletName: "",
			walletMoney: 0,
		},
		onSubmit: (values) => {
			alert("Wallet added!")
			app.firestore().collection('Wallets').add(values) 
		},
	});

	return (<div className='body'>
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
			<div className = 'walletForm'>
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor='walletName'>Wallet Name</label>

			<input
				id='walletName'
				name='walletName'
				type='text'
				onChange={formik.handleChange}
				value={formik.values.walletName}
			/>

			<br />
			<label htmlFor='walletMoney'>Wallet money</label>

			<input
				id='walletMoney'
				name='walletMoney'
				type='number'
				onChange={formik.handleChange}
				value={formik.values.walletMoney}
			/>

			<br />
			<button type='submit'>Add wallet</button>
		</form>
		</div>
		</div>
	);
};

export { WalletAddForm };
