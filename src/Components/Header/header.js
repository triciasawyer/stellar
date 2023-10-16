import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './header.css';

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <header className="header">
      <div className='title-nav'>
        <Link to="/" className="title">Stellar</Link>
        <div className='column-searchnav'>
          <nav className="nav-menu">
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <Link to="/search">
              <div className="search-icon" onClick={toggleSearch}>
                <FaSearch />
              </div>
            </Link>
            <li className='myacc'><Link to="/profile">My Account</Link></li>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;