

import React from "react";
import './SignUp.css';
import Logo from "../../Assets/Logo.jpg"
// import SignIn from "./SignIn/SignIn";   

export default function SignUp(){
    return(
        <div className="signUp-Container">
            <div className="main-container">
                <div className="form-container">
                    <form>
                        <div className="header">
                            <p className="f"><b>F</b></p>
                            <p className="u"><b>U</b></p>
                            <p className="n"><b>N</b></p>
                            <p className="d"><b>D</b></p>
                            <p className="o"><b>O</b></p>
                            <p className="oo"><b>O</b></p>

                              
                        </div>
                        <div>
                        <p className="heading-s" >Create your Fundoo Account </p>    
                        </div>
                        <div className="name-s">
                            
                            <input type="text" id="FirstName" placeholder="FirstName"  className="input-s"/>
                            <input type="text" id="LastName" placeholder="LastName" className="input-s"/>
                        </div>
                        
                            <div className="Username-S">
                                <input type="text" id="Email" placeholder="Username" className="input-ss" />
                            </div>
                            
                           <label className="label-s">you can use letters,numbers & periods</label>
                           <p className="para-s">Use my current email instead</p>                            
                        <div className="pass-style" >
                           <input type="password" id="Password" placeholder="Password" className="input-s"/>
                            <input type="password" id="Password" placeholder="confirm" className="input-s"/>
                         </div>
                         <p className="para-s">Use 8 or more characters with a mix of letters,numbers & symbol</p>
                         <div className="para-s">
                            <label> <input type="checkbox"/>Show Password
                            </label>
                                
                        </div>
                        <div className="submit">
                            <a href=''>sign in insted</a>
                            <button type="button" className="button-s">Next</button>
                        </div>
                    </form>
                </div>
                <div className="image-s" >
                    <img src={Logo} width={470} height={400}/>
                </div>
            </div>
        </div>
    )
}