
import "./App.css";

//import { Helmet } from "react-helmet";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import React,{ useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login,logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
  const user = useSelector(selectUser);                                                 //Using selector from UserSlice to choose user
  const dispatch= useDispatch();                                                        //To provide logger details 
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{                            //setting logIn / logOut with firebase
      if(userAuth){
        //logged in 
        //console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,                                                             //Dispatching user id
          email:userAuth.email,                                                         //Dipatching user Email
        })
        );
      }
      else{
        //logged out
        dispatch(logout());                                                             //No user data found so Login out
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
}, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (                                                                     //if New user found redirecting to login Page 
          <LoginScreen />
        ) : (
          
          <Routes>
            <Route path="/profile"  element={<ProfileScreen/>}>                       
             
            </Route>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>                                                                              //If user is active thenredirecting to profile page
  );
}

export default App;
