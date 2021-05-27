import React, {useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../assets/logo.png';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={closeMobileMenu}>
                    {/* <Link
                        onClick={closeMobileMenu}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    > */}
                       <a href="/"><img src={Logo} alt="Logo" /></a>
                    {/* </Link> */}
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'close-mb' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="sobre"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Sobre
                                </Link>
                                 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="servicos"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Serviços
                                </Link>
                                  
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" class='nav-links' onClick={closeMobileMenu}>
                            <Link
                                onClick={closeMobileMenu}
                                activeClass="active2"
                                to="contato"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                Contato
                            </Link>
                            </a>
                            <div className="social-mobile" onClick={handleClick}>
                                <a href="" target="_blank" ><i className={click ? 'fab fa-linkedin-in' : ''} /></a>
                                <a href="" target="_blank" ><i className={click ? 'fab fa-instagram' : ''}/></a>
                            </div>

                        </li>

                    </ul>
                    
                </div>
            </nav>  

        </>
    )
}

export default Navbar;