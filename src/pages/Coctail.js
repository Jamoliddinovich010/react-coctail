import React from 'react';
import { Link } from "react-router-dom";
function Coctail({id,src,name}) {
    return (
        <div className="card">
            <div className="img">
                <img src={src} alt={name}></img>
            </div>
            <div className="name">
              <p>{name}</p>
            </div>
                <div className="description" >
    
                    <Link to={`/SingleCoctail/${id}`}><button type="button"> {
                    "Details"
                    } </button>
                        </Link>
            </div>
            </div>
         
    )
}
export default Coctail;