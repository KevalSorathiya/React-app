import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(<>
    <div className="container-fluid mx-auto p-0">
        <div className="row">
            <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg  bg-light navbar-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <div className="collapse navbar-collapse flex-row-reverse"> 
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                          <NavLink exact activeClassName="menu_active" className="nav-link active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink  activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName="menu_active" className="nav-link" to="/contect">Contect</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </div>
</div>
    </>);
}
export default Navbar;




