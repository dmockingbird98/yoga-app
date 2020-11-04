import React from 'react';
import {Redirect, Route,  BrowserRouter as Router, Switch} from "react-router-dom";
import Request from './components/request';
import Header from './components/header';
import NavBar from './components/navbar';
import Payment from './components/payments';
import Service from './components/service';
import Sessions from './components/sessions';
import Message from './components/elements/message';

export default function Main(){
    return (
        <>
            <Header />
            <NavBar />
            <Sessions />
            <Message />

            <div className="customer">
                <div className="cus">
                    <Router>
                        <Switch>
                            <Route path="/home/requests" component={Request}/>
                            <Route path="/home/service" component={Service} />
                            <Route path="/home/payment" component={Payment} />
                            <Redirect exact from="/home" to="/home/service"/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    )
}