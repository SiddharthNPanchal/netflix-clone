import React, { useEffect, useState } from 'react';
import './Nav.css'
import logo from './assets/netflix-logo.jpg'
function Nav(){
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
            
    },[])
        return(
            <div className={`nav ${show && "nav_black"}`}>
                <img
                className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg " alt="Netflix Logo"
                 ></img>
            </div>
        )
}
export default Nav