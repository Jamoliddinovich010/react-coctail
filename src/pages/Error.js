import React from "react"
import {  Link} from "react-router-dom";
function Error() {
    return (
        <div className="Error" >
            <div className="container">
                <Link to="/">
         < button type = "button" >  Back Home </button >
            </Link>
                    <p>
                    There is not a page like that, Please check and try again!
           </p>
                </div>
        </div>
    )
}
export default Error;