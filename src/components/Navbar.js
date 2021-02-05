import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            + OLO +
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
              menu
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                The church of Satan
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/satanism'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Satanism
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/etymology'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Etymology
              </Link>
            </li>

            <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;