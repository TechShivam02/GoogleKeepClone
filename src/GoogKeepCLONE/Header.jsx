import React from "react";
import logo from "./Images/logo.png"


 const Header =() => {
     return(

            <>

              <div className="header">

                        <img src={logo} alt="Logo"  width="70" height="65" />

                        <h1>Google Keep</h1>
              </div>

        </>

     );
 }


export default Header;
