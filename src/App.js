import React from 'react';
import './App.css'; 
import logo from './logo.svg';
import LogAdmin from './Dashboard/LogAdmin';
import AuthError from './Dashboard/AuthError';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogAdmin/>}/>
                <Route path="/auth-error" element={<AuthError/>}/>
            </Routes>
        </Router>
    );
}

export default App;
