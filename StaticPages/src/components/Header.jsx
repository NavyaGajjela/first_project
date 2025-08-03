import React from "react";
import logo from '../assets/react_logo.png';


function  Header(){
 return(
    <header className="header">
    <img src = {logo} className="logo" alt="React logo"/>
        <nav>
            <ul className="nav-items">  
                <li className="nav-list-items">Pricing</li>
                <li className="nav-list-items">About</li>
                <li className="nav-list-items">Contact</li>
            </ul>
        </nav>
     </header>
 );

}
export default Header;