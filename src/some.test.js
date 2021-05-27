import ReactDOM from 'react-dom'
import React from 'react'
import { Home } from '../containers/home/home';
import {BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { SignUp } from "../containers/sign-up/sign-up";
import { LoginPage } from "../containers/login/loginPage";
import  App   from "../App"
import { Register } from "../components/Register/register";
import {render,screen,fireEvent,getByTestId} from "@testing-library/react";
import { Contact } from '../containers/contact/contact';
import { WalletPage } from '../containers/wallet/wallet';
import { Profile } from "../containers/profile/profile";

it("Home renders without crashes",()=>{

    const div=document.createElement('div');
    ReactDOM.render(<Router><Home/></Router>,div);

});

it("signUp renders without crashes",()=>{

    const div=document.createElement('div');
    ReactDOM.render(<Router><SignUp/></Router>,div);

});
it("Contact renders without crashes",()=>{

    const div=document.createElement('div');
    ReactDOM.render(<Router><Contact/></Router>,div);

});
it("Login renders without crashes",()=>{

    const div=document.createElement('div');
    ReactDOM.render(<Router><LoginPage/></Router>,div);

});


it('Login renders without crashes on submit flag',()=>{
    render(<Router><LoginPage flag={true}/></Router>);
    const  input1 = screen.getByPlaceholderText('Username');
    const  input2 = screen.getByPlaceholderText('Password');
   
    fireEvent.change(input1, { target: { value: '1111111' }});
    fireEvent.change(input2, { target: { value: '1111111' }});
  
   
});

it ('Test App',()=>{

    render(<App/>);

});

it("Wallet renders without crashes",()=>{

    render(<Router><WalletPage/></Router>);

});
/*

 it("Delete renders without crashes",()=>{

         const div=document.createElement('div');
     ReactDOM.render(<Router><Delete/></Router>,div);

 })


it('RegistrationPage renders without crashes on submit with flag',()=>{

    render(<Router><Registration flag={true} /></Router>);
    const  input1 = screen.getByPlaceholderText('Password');
    const  input2 = screen.getByPlaceholderText('Confirm Password');
    const  input3 = screen.getByPlaceholderText('Username');
    const  input4 = screen.getByTestId('role1');
   
    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});
});


*/

it('Register renders without crashes on submit',()=>{

    render(<Router><Register /></Router>);
    const  input1 = screen.getByPlaceholderText('username');
    const  input2 = screen.getByPlaceholderText('email');
    const  input3 = screen.getByPlaceholderText('password');
    const  input4 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )

});

it('RegistrationPage renders without crashes on submit with flag',()=>{
    render(<Router><Register flag={true} /></Router>);
    const  input1 = screen.getByPlaceholderText('username');
    const  input2 = screen.getByPlaceholderText('email');
    const  input3 = screen.getByPlaceholderText('password');
    const  input4 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});
it("Profile renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Profile/></Router>,div);

})

it("Footer renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><footer/></Router>,div);
})

it('Wallet renders without crashes on submit',()=>{

    render(<Router><WalletPage/></Router>);
    const  input1 = screen.getByLabelText('Wallet money');
    const  input2 = screen.getByLabelText('Wallet money');
   
    fireEvent.change(input1, { target: { value: '111111' }});
    fireEvent.change(input2, { target: { value: '111111' }});
    
    
});