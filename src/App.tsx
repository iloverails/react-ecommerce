import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'

import {useDispatch} from "react-redux";
import {AuthUser} from "./models/authUser";
import {login} from "./features/auth/authSlice";

function App() {
    const dispatch  = useDispatch()

    if (localStorage.getItem('authUser')) {
        let authUser: AuthUser = JSON.parse(localStorage.getItem('authUser') || '{}')
        dispatch(login(authUser))
    }

    return (
        <div className="App">
            <Header></Header>
            test
        </div>
    );
}

export default App;
