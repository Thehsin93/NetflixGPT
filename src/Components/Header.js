import { auth } from "../utils/firebase";
import {signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser,addUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { useEffect,useState} from "react";
import { netflixlogo,photo } from "../utils/constants";


const Header = ()=>{
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
    console.log(user);

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
return <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
 <img className="w-44 h-20" src={netflixlogo}
alt="logo"></img>
{user && <div className="py-2"  >
   
    
    
         <img alt="userlogo" className="w-12 h-12" src={user?.photoURL} onMouseEnter={setLogout} ></img>
        {logoutdiv && <button className="text-white  my-2 h-9 text-sm rounded-sm border border-black bg-gray-600" onClick={HandleSignout} onMouseOut={hideLogout}>SignOut</button>}
    
</div>}
</div>
};
export default Header