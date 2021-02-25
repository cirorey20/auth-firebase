import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {


    return (
        <div className="p-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Mi tienda</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link" href="#">Contacto</Link>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;