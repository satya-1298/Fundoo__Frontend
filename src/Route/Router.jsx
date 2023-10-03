import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from '../WebPage/SignUp/SignIn/SignIn';
import SignUp from '../WebPage/SignUp/SignUp';
import Dashboard from '../Component/Dashboard';

 const Router=()=>{
    return (
        <div>
            
                <Routes>
                    <Route  path = "/login" element={<SignIn/>}/>
                     <Route exact path="/signUp" element={<SignUp/>}/>
                    <Route exact path={"/dashboard"} element={<Dashboard/>}></Route>
                </Routes>
           
        </div>
    )
}
export default Router