import React from 'react';
import Customer from './components/customer';
import Header from './components/header';
import NavBar from './components/navbar';
import Sessions from './components/sessions';

export default function Main(){
    return (
        <>
            <Header />
            <NavBar />
            <Sessions />
            <Customer />
        </>
    )
}