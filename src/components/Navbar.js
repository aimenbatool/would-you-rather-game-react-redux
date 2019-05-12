import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <b> Would You Rather? </b>
                  </Link>
                </div>
                <div className="navbar-end">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>
                    <Link className="navbar-item" to="/add">
                        New Question
                    </Link>
                    <Link className="navbar-item" to="/leadboard">
                        Leadboard
                    </Link>
                    {/* add is-actibve to show dropdwon */}
                    <div className="navbar-item dropdown"> 
                        <div className="dropdown-trigger">
                            <button className="button is-primary is-outlined" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span className="username"> aimenbatool </span>
                                <span className="icon is-small">
                                    <figure className="image is-24x24">
                                        <img className="is-rounded" src="/images/johndoe.png" alt="placeholder"/>
                                    </figure>
                                </span>
                            </button>                            
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="/" className="dropdown-item">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;