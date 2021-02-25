import React from 'react';
import { Link } from "react-router-dom";

function navbar() {
    return (
        <div className="navbar">
            <div className="container" >
                <div className="nav">
                <div className = "logo" >
                    <p > Coctail </p> <p > UzMarket </p> </div>
                <div className="components" >
                
                   
                 < Link to = "/" ><button type="button" >Home</button> </Link>
                 < Link to = "/About" > <button type="button">About</button> </Link> 
                </div>
                
                </div >
            </div>
        </div>
    )
}

export default navbar
