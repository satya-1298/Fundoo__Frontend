

import React, { useState } from "react";
import './SignUp.css';
import Logo from "../../Assets/Logo.jpg"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../../Services/UserServices";
import { TextField, Button } from '@mui/material';
const RegFirstName = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const RegLastName = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const RegEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const RegPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=()])([a-zA-Z\d@#$%^&+=()]*).{8,}$/;



export default function SignUp() {
    const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [regobj, setRegobj] = useState({
        firstNameBoarder: false, firstNameHelper: '',
        lastNameBoarder: false, lastNameHelper: '',
        emailBoarder: false, emailHelper: '', passwordBoarder: false, password_Helper: ''
    });

    const navigate = useNavigate()
    const changeHandle = {
        changeFirstName: (e) =>
            setData(prevState => (
                {
                    ...prevState,
                    firstName: e.target.value
                }
            )),
        //console.log(event)

        changeLastName: (e) =>
            setData(prevState => (
                {
                    ...prevState,
                    lastName: e.target.value
                }
            )),

        changeEmail: (e) =>
            setData(prevState => (
                {
                    ...prevState,
                    email: e.target.value
                }
            )),

        changePassword: (e) =>
            setData(prevState => (
                {
                    ...prevState,
                    password: e.target.value
                }
            ))

    }
    console.log(data);
    const verifyValidation = () => {
        let validFirstName = RegFirstName.test(data.firstName)
        if (validFirstName === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    firstNameBoarder: true,
                    firstNameHelper: 'Enter Valid Information'
                }))
        }
        let validateLastName = RegLastName.test(data.lastName)
        if (validateLastName === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    lastNameBoarder: true,
                    lastNameHelper: 'Enter Valid Information'
                }
            ))
        }
        let validEmail = RegEmail.test(data.email)
        if (validEmail === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    emailBoarder: true,
                    emailHelper: 'InValid Email'
                }
            ))

        }
        let validatePassword = RegPassword.test(data.password)
        if (validatePassword === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    passwordBoarder: true,
                    password_Helper: 'invalid'
                }
            ))
        }


        if (validFirstName === true && validateLastName === true && validEmail === true && validatePassword === true) {
            signup(data).then((response) => {
                console.log(response)
                navigate("/")
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div className="signUp-Containerr">
            <div className="main-containerr">

                <form>
                    <div className="form-containerr">
                        <div className="headerr">
                            <p className="f"><b>F</b></p>
                            <p className="u"><b>U</b></p>
                            <p className="n"><b>N</b></p>
                            <p className="d"><b>D</b></p>
                            <p className="o"><b>O</b></p>
                            <p className="oo"><b>O</b></p>


                        </div>
                        <div>
                            <p className="heading-ss" >Create your Fundoo Account </p>
                        </div>
                        <div className="name-ss">
                            <TextField id="FirstName" label="FirstName" onChange={changeHandle.changeFirstName} size="small" error={regobj.firstNameBoarder} helperText={regobj.firstNameHelper} variant="outlined" className="input-ss" />

                            <TextField id="LastName" label="LastName" onChange={changeHandle.changeLastName} error={regobj.lastNameBoarder} helperText={regobj.lastNameHelper} variant="outlined" size="small" className="input-ss" />
                        </div>

                        <div className="Username-SS">
                            <TextField id="Email" label="UserName" onChange={changeHandle.changeEmail} error={regobj.emailBoarder} helperText={regobj.emailHelper} variant="outlined" size="small" className="input-sss" />

                        </div>

                        <label className="label-ss">you can use letters,numbers & periods</label>
                        <p className="para-ss">Use my current email instead</p>
                        <div className="pass-stylee" >
                            <TextField type="password" id="Password" label="Password" onChange={changeHandle.changePassword} variant="outlined" error={regobj.passwordBoarder} helperText={regobj.password_Helper} size="small" className="input-ss" />
                            <TextField type="password" id="PasswordConfirm" label="Confirm" variant="outlined" size="small" className="input-ss" />

                        </div>
                        <p className="para-ss">Use 8 or more characters with a mix of letters,numbers & symbol</p>
                        <div className="para-ss">
                            <label> <input type="checkbox" />Show Password
                            </label>

                        </div>
                        <div className="submitt">
                            <Link to="/">
                                <a href=''>sign in insted</a>
                            </Link>
                           
                            <Button onClick={verifyValidation} variant="contained" className="button-ss" >Next</Button>
                        </div>
                    </div>
                </form>

                <div className="image-ss" >
                    <img src={Logo} />
                </div>
            </div>
        </div>
    )
}