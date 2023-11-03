
import React, { useState } from "react";
import './SignIn.css';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../../../Services/UserServices";
const RegEmail = new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const RegPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');

export default function SignIn() {
    const [val, setVal] = useState({ email: '', password: '' });
    const [regdata, setRegdata] = useState({ emailBoarder: false, emailhelper: '', passwordBoarder: false, passwordhelper: '' });

    const navigate = useNavigate()

    const handleChange = {
        handleUserName: (e) =>

            setVal(preState => (
                {
                    ...preState,
                    email: e.target.value
                }
            )),

        handlePassword: (p) =>

            setVal(preState => (
                {
                    ...preState,
                    password: p.target.value
                }
            ))

    }
    console.log(val)

    const Validation = () => {
        let validUserName = RegEmail.test(val.email)
        if (validUserName === false) {
            setRegdata(preState => (
                {
                    ...preState,
                    emailBoarder: true,
                    emailhelper: 'Invalid UserName'
                }
            ))
        }
        let validpassword = RegPassword.test(val.password)
        if (validpassword === false) {
            setRegdata(preState => (
                {
                    ...preState,
                    passwordBoarder: true,
                    passwordhelper: 'Invalid Password'
                }
            ))
        }
        if (validUserName == true && validpassword == true) {
            signin(val).then((response) => {
                console.log(response)
                localStorage.setItem("Token", response.data.token)
                navigate("/dashboard")
            })

            console.log(regdata)
        }
    }
    return (
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
                            <TextField id="email" label="Email or Phone" onChange={handleChange.handleUserName} error={regdata.emailBoarder} helperText={regdata.emailhelper} size="small" variant="outlined" className="input-s" />
                        </div>
                        <div className="detail.cs">
                            <TextField type="password" id="Password" label="Password" onChange={handleChange.handlePassword} error={regdata.passwordBoarder} helperText={regdata.passwordhelper} variant="outlined" size="small" className="input-s" />
                        </div>
                        <div>
                            <a href=" " className="para-s">forgot Password?</a>
                        </div>
                        <div className="submit-s">
                            <Link to="/signUp">
                                <a href="" className="link-s">Create account</a>
                            </Link>

                            <Button onClick={Validation} variant="contained">Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}