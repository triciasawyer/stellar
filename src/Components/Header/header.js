import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  return (
    <header className="header">
      <div className='title-nav'>
        <Link to="/" className="title">Stellar</Link>
        <div className='column-searchnav'>
          <nav className="nav-menu">
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            {/* <li><Link to="/documentaries">Documentaries</Link></li> */}
            <li><Link to="/profile">My Account</Link></li>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;