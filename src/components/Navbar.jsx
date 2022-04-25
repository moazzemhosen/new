import './style.css'

import {Link} from 'react-router-dom'

export const Navbar=()=>{
    return (<div className="Nav">
        <Link className="nav-home" to="/">Home</Link>
        <Link className="nav-list"  to="/employees">Employee List</Link>
        <Link className="nav-admin" to="/admin">Admin</Link>
        <Link className="nav-login" to="/login">Login</Link>
        
        <Link className="nav-logout" to="/logout">Logout</Link>
        
    </div>
    )
}