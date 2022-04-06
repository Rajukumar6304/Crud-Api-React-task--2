import React from "react";
import { Link } from "react-router-dom";


const Navbar=() => {
    return(
        <div>
            <ul>
                <Link to='/'><li>Get</li></Link>
                <Link to='/Posts'><li>Posts</li></Link>
                
            </ul>
        </div>
    )
}

export default Navbar