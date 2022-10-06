import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../imageImport/logoPetit.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const Header = ( {showMenu, setShowMenu, accueil, setAccueil, service, setService, tarifs, setTarifs, contact, setContact, faq, setFaq, sousMenu, setSousMenu} ) => {

    const handleAccueil = (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('hoverA')
        setAccueil('selected')
        setSousMenu(0)
        setShowMenu(!showMenu)
    }
    const handleShow = () => {
        setShowMenu(!showMenu)
        setSousMenu(0)
    }
    const handleMenu = (e) => {
        setSousMenu(1)
    }

    const handleTarifs = (e) => {
        setService('hoverA')
        setTarifs('selected')
        setContact('hoverA')
        setFaq('hoverA')
        setAccueil('hoverA')
        setSousMenu(0)
        setShowMenu(!showMenu)
    }
    const handleContact = (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('selected')
        setFaq('hoverA')
        setAccueil('hoverA')
        setSousMenu(0)
        setShowMenu(!showMenu)
    }
    const handleFAQ = (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('selected')
        setAccueil('hoverA')
        setSousMenu(0)
        setShowMenu(!showMenu)
    }
    const handleClose = (e) => {
        setSousMenu(0)

    }
    const handleCloseSousMenu = (e) => {
        setSousMenu(0)
        setService('selected')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('hoverA')
        setAccueil('hoverA')
        setShowMenu(!showMenu)
    }
    // const handleUrl = (e) => {
        let url = window.location.href
        const location = url.split('/')
        console.log(location[3]);
    // }

        

    return (
        <div className='header'>
            <div className='logo'>
                <Link id={'ancre'} to={"/home"}><img src={logo} alt="Logo secretariat Live" /></Link>
            </div>
            <nav  className={`navBar ${showMenu ? "showNav" : "hideNav"}`}>
                <ul className='aLink' >
                    <li><div id={`${showMenu ? "slideTop0" : "hideNav"}`}><Link id={`${showMenu ? "slideTop" : "hideNav"}`} className={accueil} onMouseEnter={handleClose} onClick={handleAccueil} to={"/home#ancre"}>Accueil</Link></div></li>
                
                    {sousMenu === 1 ?
                    <div className='sousMenuContainer'>
                        <li><div id={`${showMenu ? "slideTop1" : "hideNav"}`}><Link className={service} onMouseEnter={handleMenu} to={location[3]}>Services</Link></div></li>
                        <div onMouseLeave={handleClose} onMouseEnter={handleMenu} className='sousMenu'>
                            <li><Link onClick={handleCloseSousMenu} to={"/entreprises#ancre"}>Entreprises</Link></li>
                            <li><Link onClick={handleCloseSousMenu} to={"/particuliers#ancre"}>Particuliers</Link></li>
                        </div>
                    </div>
                        :
                        <li><div id={`${showMenu ? "slideTop1" : "hideNav"}`}><Link className={service} onMouseEnter={handleMenu} to={location[3]}>Services</Link></div></li>
                    }
                    
                    <li><div id={`${showMenu ? "slideTop2" : "hideNav"}`}><Link id={`${showMenu ? "slideTop" : "hideNav"}`} className={tarifs} onMouseEnter={handleClose} onClick={handleTarifs} to={"/tarifs#ancre"}>Tarifs</Link></div></li>
                    <li><div id={`${showMenu ? "slideTop3" : "hideNav"}`}><Link id={`${showMenu ? "slideTop" : "hideNav"}`} className={contact} onMouseEnter={handleClose} onClick={handleContact} to={"/contact#ancre"}>Contact</Link></div></li>
                    <li><div id={`${showMenu ? "slideTop4" : "hideNav"}`}><Link id={`${showMenu ? "slideTop" : "hideNav"}`} className={faq} onMouseEnter={handleClose} onClick={handleFAQ} to={"/FAQ#ancre"}>FAQ</Link></div></li>      
                </ul>
                <button className='navBar_Burger' onClick={handleShow}>
                    <span className='burger_Bar'></span>
                </button>
            </nav>

        </div>
    );
};

export default Header;