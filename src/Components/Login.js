import Header from "./Header";
import { useState,useRef } from "react";
import {checkValidData} from "../utils/validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {photo,bgimage} from "../utils/constants";

const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
const [isLogin,SetIsLogin] = useState(true);
const fname = useRef(null);
const username = useRef(null);
const password = useRef(null);
const [errormessage,seterrormsg] = useState();
const toggleLogin = ()=>{
    SetIsLogin(!isLogin)
    
}
const validateform = () =>{
    
    const result = checkValidData(username.current.value,password.current.value);
    seterrormsg(result);
    if(result!=null)return;
    if(!isLogin){
        createUserWithEmailAndPassword(auth, username.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: fname.current.value, photoURL: photo
              }).then(() => {
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser(uid,email,displayName,photoURL));
                
              }).catch((error) => {
                // An error occurred
                // ...
              });
          
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            seterrormsg(errorCode+" - "+errorMessage);
          
        });
    }
    else{
        signInWithEmailAndPassword(auth, username.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
           
         
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorCode+" - "+errorMessage);
            navigate("/");
  });
    }
}

return <div>
    
    <Header></Header>
  
    <div className="absolute">
    <img src={bgimage} className="h-screen object-cover w-screen"
        alt = "bgimage"></img>
        </div>
    <form onSubmit={(e)=>e.preventDefault()} className="bg-black p-12 absolute my-36 w-11/12 md:w-4/12 mx-auto right-0 left-0 bg-opacity-80 rounded-sm">
        <h1 className="font-bold text-lg text-white my-2">{isLogin===true?"Sign In":"Sign Up"}</h1>
        {!isLogin && <input type="text" ref={fname} placeholder="Full Name" className="p-4 my-4 w-full rounded-sm bg-black border border-gray-600 text-white"></input>}

            <input type="text" ref={username} placeholder="Email or Mobile number" className="p-4 my-4 w-full rounded-sm bg-black border border-gray-600 text-white"></input>
            
            <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full rounded-sm bg-black border border-gray-600 text-white"></input>
            <p className="text-red-500 p-5 text-bold">{errormessage!=null && errormessage}</p>
            <button className="p-2 my-8 rounded-lg bg-red-700 w-full text-white" onClick={validateform}>{isLogin===true?"Sign In":"Sign Up"}</button>
            
            <p className="py-4 text-white cursor-pointer" onClick={toggleLogin}>{isLogin===true?"New to Netflix? Signup now":"Already have an account?Sign in here"}</p>
        </form>
    
</div>
};

export default Login