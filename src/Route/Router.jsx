import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from '../WebPage/SignUp/SignIn/SignIn';
import SignUp from '../WebPage/SignUp/SignUp';
import Dashboard from '../Component/Dashboard';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute'

 function Router() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<AuthRoute><SignIn/></AuthRoute>}/>
                <Route exact path={"/signUp"} element={<AuthRoute><SignUp/></AuthRoute>}/>
                
                <Route exact path={"/dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            </Routes>
        // </BrowserRouter>
        //   <BrowserRouter>
        //     <Routes>
        //         <Route exact path = {"/"} element={<AuthRoute><SignIn/></AuthRoute>}/>
        //         <Route path={"/signUp"} element={<AuthRoute><SignUp/></AuthRoute>}/>
        //         <Route path={"/dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        //     </Routes>
               
        //  </BrowserRouter>
    )
}
export default Router