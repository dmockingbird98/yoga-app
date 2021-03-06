import React, {  useState } from 'react';
import {Redirect, Route,  BrowserRouter as Router, Switch} from "react-router-dom";
import Request from './components/request';
import Header from './components/header';
import NavBar from './components/navbar';
import Payment from './components/payments';
import Service from './components/service';
import Sessions from './components/sessions';
import Message from './components/elements/message';
import response from '../data/clients.json';

export default function Main(){
    const [navVar,setNav] = useState("requests")

    function handleNav(nav){
        setNav(nav)
    }
    
    return (
        <>
            <Header />
            <NavBar navVar={navVar} />
            <Sessions />
            {window.location.href.search("service") >=0 && <Message />}
            
            <Router >
                <Switch>
                    <Route path="/home/requests" render={props => <Request {...props} response={response?.data} handleNav={handleNav}/>}/>
                    <Route path="/home/service" render={props => <Service {...props} response={response?.data} handleNav={handleNav}/> }/>
                    <Route path="/home/payment" render={props => <Payment {...props} response={response?.data} handleNav={handleNav}/> }/>
                    <Redirect exact from="/home" to="/home/requests"/>
                </Switch>
            </Router>

        </>
    )
}