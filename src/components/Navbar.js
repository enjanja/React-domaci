import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState (false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    // Ova f-ja prebacuje klick na suprotno, ako je bio true sad je false i suprotno
    const closeMobileMenu = ()=> setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);
    //kad se menja velicina ekrana dugme se ne bi pojavljivalo
    //ova f-ja to resava


    window.addEventListener('resize', showButton);
    //kad menjamo velicinu ekrana showButton f-ja se aktivira

    return (
        <>
            <nav className="navbar">
                <div className="navbar-containter">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        LOGO
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        
                        menu<i className={click ? 'fas fa-times':'fas fa-bars'}/>
                        {/* Nema meni jer nemam onaj font awsome, posle cu to da pogledam */}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Signup
                            </Link>
                        </li>
                        <li>
                        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}

                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
