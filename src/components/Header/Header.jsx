import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../imageImport/logoPetit.png'


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
                <Link id={'ancre'} to={"/SecretariatLive"}><img src={logo} alt="Logo secretariat Live" /></Link>
            </div>
            <nav className={`navBar ${showMenu ? "showNav" : "hideNav"}`}>
                <ul>
                    <Link className={accueil} onMouseEnter={handleClose} onClick={handleAccueil} to={"/SecretariatLive#ancre"}>Accueil</Link>
                    {/* <Link className={service} onMouseEnter={handleMenu} to={location[3]}>Services</Link> */}
                    
                    {sousMenu === 1 ?
                    <div className='sousMenuContainer'>
                        <Link className={service} onMouseEnter={handleMenu} to={location[3]}>Services</Link>
                        <div onMouseLeave={handleClose} onMouseEnter={handleMenu} className='sousMenu'>
                            <Link onClick={handleCloseSousMenu} to={"/entreprises#ancre"}>Entreprises</Link>
                            <Link onClick={handleCloseSousMenu} to={"particuliers#ancre"}>Particuliers</Link>
                        </div>
                    </div>
                        :
                        <div><Link className={service} onMouseEnter={handleMenu} to={location[3]}>Services</Link></div>
                    }
                    
                    <Link className={tarifs} onMouseEnter={handleClose} onClick={handleTarifs} to={"/tarifs#ancre"}>Tarifs</Link>
                    <Link className={contact} onMouseEnter={handleClose} onClick={handleContact} to={"/contact#ancre"}>Contact</Link>
                    <Link className={faq} onMouseEnter={handleClose} onClick={handleFAQ} to={"/FAQ#ancre"}>FAQ</Link>      
                </ul>
                <button className='navBar_Burger' onClick={handleShow}>
                    <span className='burger_Bar'></span>
                </button>
            </nav>

        </div>
    );
};

export default Header;