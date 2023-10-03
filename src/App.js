// import logo from './logo.svg';
import React from 'react';
import './App.css';

import SignUp from './WebPage/SignUp/SignUp';
import SignIn from './WebPage/SignUp/SignIn/SignIn';
import {Routes,Route} from "react-router-dom"
import Header from './Component/Header';
import MiniDrawer from './Component/MiniDrawer';
import Dashboard from './Component/Dashboard';
import Router from './Route/Router';


function App() {
  return (
    <div className="App">
     {/* <SignUp/>
        <SignIn/> */}
        {/* <Routes>
            <Route path = "/login" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            
        </Routes> */}
        {/* < Header/> */}
        <Router/>
        {/* <Dashboard/>
        <MiniDrawer/> */}
    </div>
  );
}



export default App;
