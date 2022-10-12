import { Link } from "react-router-dom";
import React from "react";


const NavigationBar = () => {
    return (
        <>
        <div className="navigation"> 
        <br></br>
            <Link to=""> Home Page</Link>
        <br></br>
        <br></br>
            <Link to="/food"> Food Review</Link>
        <br></br>
        </div>
        </>
    );
};

export default NavigationBar;