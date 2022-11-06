import React from 'react'
/* import {Link} from 'react-router-dom' */

let Navbar=()=>{
    return<>
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="navbar-brand">Redux-Main
            </a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a to="Message" className="nav-link">Message
                    </a>
                </li>
                <li className="nav-item">
                    <a to="Counter" className="nav-link">Counter
                    </a>
                </li>
            </ul>
</div>
    </>
}
export default Navbar

