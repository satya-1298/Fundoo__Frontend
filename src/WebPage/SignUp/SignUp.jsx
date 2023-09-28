

import React,{useState} from "react";
import './SignUp.css';
import Logo from "../../Assets/Logo.jpg"
// import SignIn from "./SignIn/SignIn";   
import {TextField,Button} from '@mui/material';
const RegFirstName =new RegExp('^[A-Z]{1,}[A-Za-z]{3,}$');
const RegLastName=new RegExp('^[A-Za-z]{1,}$');
const RegEmail=new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const RegPassword=new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');



export default function SignUp(){
    // useState-hook to manage the component's state, 
    const[data,setData]=useState({firstName:'',lastName:'',email:'',password:''});
    const[regobj,setRegobj]=useState({firstNameBoarder:false,firstNameHelper:'',
                                lastNameBoarder:false,lastNameHelper:'',
                                emailBoarder:false, emailHelper:'', passwordBoarder:false,password_Helper:'',
                            });
    const FirstName=(firstName)=>{
        setData(prevState => (
            {
                ...prevState,
                firstName:firstName.target.value
            }
        ))
        //console.log(event)
    }
    const LastName=(lastName)=>{
        setData(prevState =>(
            {
                ...prevState,
                lastName:lastName.target.value
            }
        ))
    }
    const Email=(email)=>{
        setData(prevState=>(
            {
                ...prevState,
                email:email.target.value
            }
        ))
    }
    const Password=(password)=>{
        setData(prevState=>(
            {
                ...prevState,
                password:password.target.value
            }
        ))
    }
    console.log(data);
   const verifyValidation=()=>
   {
        let validFirstName=RegFirstName.test(data.firstName)
        if(validFirstName===false)
        {
            setRegobj(prevState=>(
            {
                    ...prevState,
                    firstNameBoarder:true,
                    firstNameHelper:'Enter Valid Information'
            }))
        }
        let validateLastName=RegLastName.test(data.lastName)
        if(validateLastName===false)
        {
            setRegobj(prevState=>(
                {
                    ...prevState,
                    lastNameBoarder:true,
                    lastNameHelper:'Enter Valid Information'
                }
            ))
        }
        let validEmail=RegEmail.test(data.email)
        if(validEmail===false)
        {
            setRegobj(prevState=>(
                {
                    ...prevState,
                    emailBoarder:true,
                    emailHelper:'InValid Email'
                }
            ))

        }
        let validatePassword=RegPassword.test(data.password)
        if(validatePassword===false)
        {
            setRegobj(prevState=>(
                {
                    ...prevState,
                    passwordBoarder:true,
                    password_Helper:'invalid'
                }
            ))
        }
        if(validFirstName==true && validateLastName==true && validEmail==true && validatePassword==true)
        {
            console.log(regobj)    
        }
   }

    return(
        <div className="signUp-Container">
            <div className="main-container">
               
                <form>
                    <div className="form-container">
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
                            <TextField id="FirstName" label="FirstName" onChange={FirstName} error={regobj.firstNameBoarder} helperText={regobj.firstNameHelper} size="small"  variant="outlined" className="input-s"/>
                         
                            <TextField id="LastName" label="LastName" onChange={LastName} error={regobj.lastNameBoarder} helperText={regobj.lastNameHelper} variant="outlined" size="small" className="input-s"/>
                        </div>
                        
                            <div className="Username-S">
                            <TextField  id="Email" label="UserName" onChange={Email} error={regobj.emailBoarder} helperText={regobj.emailHelper} variant="outlined" size="small"  className="input-ss"/>
                              
                            </div>
                            
                           <label className="label-s">you can use letters,numbers & periods</label>
                           <p className="para-s">Use my current email instead</p>                            
                        <div className="pass-style" >
                            <TextField type="password" id="Password" label="Password" onChange={Password} error={regobj.passwordBoarder} helperText={regobj.password_Helper} variant="outlined" size="small"  className="input-s"/>
                            <TextField type="password" id="PasswordConfirm" label="Confirm" onChange={Password} variant="outlined" size="small"  className="input-s"/>
                         
                         </div>
                         <p className="para-s">Use 8 or more characters with a mix of letters,numbers & symbol</p>
                         <div className="para-s">
                            <label> <input type="checkbox"/>Show Password
                            </label>
                                
                        </div>
                        <div className="submit">
                            <a href=''>sign in insted</a>
                            <Button onClick={verifyValidation} variant="contained" className="button-s">Next</Button>
                        </div>
                    </div>
                </form>
                
                <div className="image-s" >
                    <img src={Logo} />
                </div>
            </div>
        </div>
    )
}