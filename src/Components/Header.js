import { auth } from "../utils/firebase";
import {signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser,addUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { useEffect,useState} from "react";
import { netflixlogo,photo } from "../utils/constants";
import { togglegptserach } from "../utils/gptSlice";

import { languages } from "../utils/constants";
import { setlanguage } from "../utils/configSlice";

const Header = ()=>{
  const gptshow = useSelector((store)=>store.gpt.showgptsearch);
  const [logoutdiv,changelogout] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
   
   

  const setLogout=()=>{
    changelogout(true);
  }
  const hideLogout=()=>{
    changelogout(false);
  }
  

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (user) => {
       
            if (user) {
             
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid,email,displayName,photoURL}));
             navigate("/browse")
              // ...
            } else {
              dispatch(removeUser());
              navigate("/")
            }
          });
          return()=>{
                unsubscribe();
               
          }
    },[])




    const HandleSignout= ()=>{signOut(auth).then(() => {
        navigate("/");
        
      }).catch((error) => {
        // An error happened.
      });
    }
    const Handlegptclick=()=>{
      dispatch(togglegptserach());
    }
    const setLang=(e)=>{
      dispatch(setlanguage(e.target.value));
    }

    
return (<div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
 <img className="w-44 mx-auto md:mx-0" src={netflixlogo}
alt="logo"></img>
{user && (<div className="py-2 flex justify-end"  >

    {gptshow&&(<select className="py-2 px-4 mx-4 my-4 bg-red-600 text-white rounded-lg" onChange={setLang}>
     {languages.map((lng)=>(<option className="bg-gray-400 text-white hover:bg-black" key = {lng.identifier} value={lng.identifier}>{lng.name}</option>))

     }
     </select>)}

 
    <button className="py-2 px-4 mx-4 my-4 bg-red-600 text-white rounded-lg" onClick={Handlegptclick}>{gptshow?"Home Page" :"GPT Search"}</button>
    <div className="flex flex-col px-4">
         <img alt="userlogo" className="hidden md:block w-12 h-12" src={user?.photoURL} onMouseEnter={setLogout} ></img>
    
        {<button className="font-bold text-white" onClick={HandleSignout} onMouseOut={hideLogout}>SignOut</button>}
    </div>
</div>)}
</div>);
};
export default Header