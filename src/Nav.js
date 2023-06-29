import React, { useState, useEffect } from "react";
import "./Nav.css";
//import {useHistory} from "react-router-dom" ; deprecated 
import { useNavigate } from 'react-router-dom';
import  pdt from './Netflix-logo/logo.png';


function Nav() {
  const [show, handleShow] = useState(false);
  // if show==true { nav will have transparent background}
  // if show==flase { nav will have black background}

  // const history = useHistory();
  const navigate = useNavigate();

  const navbarChangeListener = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarChangeListener);
    return () => window.removeEventListener("scroll", navbarChangeListener);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo"
      onClick={()=> navigate("/")}
        src={pdt}
        alt="Netflix Logo"
        
      />

      <img
      onClick={() => navigate("./profile")}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;