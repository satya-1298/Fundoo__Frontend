

import React,{useState} from "react";
import './SignUp.css';
import Logo from "../../Assets/Logo.jpg"
// import SignIn from "./SignIn/SignIn";   
import {TextField,Button} from '@mui/material';


export default function SignUp(){
    const[data,setData]=useState({firstName:'',lastName:'',email:'',password:''});
    const handleFirstName=(firstName)=>{
        setData(prevState => (
            {
                ...prevState,
                FirstName:firstName.target.value
            }
        ))
    }
    const handleLastName=(lastName)=>{
        setData(prevState =>(
            {
                ...prevState,
                lastName:lastName.target.value
            }
        ))
    }
    const handleEmail=(email)=>{
        setData(prevState=>(
            {
                ...prevState,
                email:email.target.value
            }
        ))
    }
    const handlePassword=(password)=>{
        setData(prevState=>(
            {
                ...prevState,
                password:password.target.value
            }
        ))
    }
    console.log(data);
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
                            <TextField id="FirstName" label="FirstName" onChange={handleFirstName} variant="outlined" className="input-s"/>
                         
                            <TextField id="LastName" label="LastName" onChange={handleLastName} variant="outlined" className="input-s"/>
                        </div>
                        
                            <div className="Username-S">
                            <TextField  id="Email" label="UserName" onChange={handleEmail} variant="outlined" className="input-ss"/>
                              
                            </div>
                            
                           <label className="label-s">you can use letters,numbers & periods</label>
                           <p className="para-s">Use my current email instead</p>                            
                        <div className="pass-style" >
                            <TextField  id="Password" label="Password" onChange={handlePassword} variant="outlined" className="input-s"/>
                            <TextField id="PasswordConfirm" label="Confirm" onChange={handlePassword} variant="outlined" className="input-s"/>
                         
                         </div>
                         <p className="para-s">Use 8 or more characters with a mix of letters,numbers & symbol</p>
                         <div className="para-s">
                            <label> <input type="checkbox"/>Show Password
                            </label>
                                
                        </div>
                        <div className="submit">
                            <a href=''>sign in insted</a>
                            <Button variant="contained" className="button-s">Next</Button>
                        </div>
                    </form>
                </div>
                <div className="image-s" >
                    <img src={Logo} />
                </div>
            </div>
        </div>
    )
}