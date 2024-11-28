import React, { useState, useContext } from 'react';
import { MouseContext } from "../context/mouse-context";
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import '../css/Header.scss';
import { Logo, Steam } from '../utils/Images';
import '../css/Navbar.scss';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLang, setToggleLang] = useState(false);
    const [toggleMenuScroll, setToggleMenuScroll] = useState(false);
    const [toggleSkewMenu, settoggleSkewMenu] = useState(false);
    const { cursorChangeHandler } = useContext(MouseContext);
    const ScrollLink = Scroll.Link;
    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu);
        settoggleSkewMenu(!toggleSkewMenu);
    };

    const handleToggleLangContainer = () =>{
        setToggleLang(!toggleLang);
    };
    

    document.addEventListener('scroll', ()=>{
        if (window.scrollY > 600) {
            setToggleMenuScroll(true);
        }else{
            setToggleMenuScroll(false);
        }
    });

    return (
        <div className="nav-container m-auto">
            <nav className="navbar">
                <ScrollLink to="main" className="logo">
                    <img src={Logo} alt="Logo" className="logo"/>
                </ScrollLink>
                <div className={`menu-toggle ${toggleMenu ? 'is-active':''} 
                ${toggleMenuScroll ? 'scrolled':''} ${toggleSkewMenu ? 'active':''}`} 
                id="mobile-menu" onClick={handleToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-menu ${toggleMenu ? 'active showMenu':''}`}>
                    <li >
                        <ScrollLink  
                            to="main" 
                            className="nav-links active-link"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >Inicio</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        Sobre</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="gamefeature" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        Funcionalidades</ScrollLink >
                    </li>
                    {/* <li>
                        <ScrollLink 
                            to="systemrequirements" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={500}
                        >
                        Requisítos do Sistema</ScrollLink>
                    </li> */}
                    <li>
                        <ScrollLink 
                            to="quotes" 
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true} 
                            smooth={true} 
                            duration={1000}
                            >
                            Comentários</ScrollLink>
                    </li>

                </ul>

                <div className="container-sponsor">
                    <Link to="#">
                        <img src={Steam} alt="" height={40} width={40} className='img-etch'/>
                    </Link>
                </div>
            </nav>
        </div>
    );   
}

export default Navbar;