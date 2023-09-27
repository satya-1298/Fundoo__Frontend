
import React from "react";
import './SignIn.css';

export default function SignIn(){
    return(
        <div className="signIn-Container">
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
                        <label className="Login-s"><b>Login</b></label>
                        <div>
                        <p className="heading-s" >Use your Fundoo Account </p>    
                        </div>
                         <div className="detail.cs">
                             <input type="email/phonenumber" id="email" placeholder="Email or phone"  className="input-s"/>
                        </div>
                        <div className="detail.cs">
                            <input type="password" id="password" placeholder="Password" className="input-s"/>
                        </div>
                        <div>
                        <p className="para-s">forgot Password?</p>
                        </div>
                        <div className="submit-s">
                            <a href="" className="link-s">Create account</a>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

                        
    )
}