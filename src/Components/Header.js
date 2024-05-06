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
return <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
 <img className="w-44 h-20 mx-auto md:mx-0" src={netflixlogo}
alt="logo"></img>
{user && <div className="py-2 mx-[10%] md:mx-0 "  >
   <div className="flex p-2 mx-auto">
    {gptshow&&<select className="p-1 md:p-2 my-1 md:my-2 mx-4 bg-gray-600 rounded-lg text-white" onChange={setLang}>
     {languages.map((lng)=><option key = {lng.identifier} value={lng.identifier}>{lng.name}</option>)

     }
     </select>}

 
    <button className="px-4 py-1 mr-4 my-2 bg-purple-800 text-white rounded-lg" onClick={Handlegptclick}>{gptshow?"Home Page" :"GPT Search"}</button>
    
         <img alt="userlogo" className="w-12 h-12 my-2" src={user?.photoURL} onMouseEnter={setLogout} ></img>
       </div>
        {logoutdiv && <button className="text-white mr-[5%] md:ml-28 my-1  text-lg rounded-lg border border-black bg-gray-600" onClick={HandleSignout} onMouseOut={hideLogout}>SignOut</button>}
    
</div>}
</div>
};
export default Header