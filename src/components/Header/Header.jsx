import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../imageImport/logoPetit.png'


const Header = ( {accueil, setAccueil, service, setService, tarifs, setTarifs, contact, setContact, faq, setFaq, sousMenu, setSousMenu} ) => {

    const handleAccueil = (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('hoverA')
        setAccueil('selected')
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
    }
    const handleContact = (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('selected')
        setFaq('hoverA')
        setAccueil('hoverA')
        setSousMenu(0)
    }
    const handleFAQ = (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('selected')
        setAccueil('hoverA')
        setSousMenu(0)
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
    }
    // const handleUrl = (e) => {
        let url = window.location.href
        const location = url.split('/')
        console.log(location[3]);
    // }

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="Logo secretariat Live" />
            </div>
            <nav className='navBar' >
                <ul>
                    <Link className={accueil} onMouseEnter={handleClose} onClick={handleAccueil} to={"/SecretariatLive"}>Accueil</Link>
                    <Link className={service} onMouseEnter={handleMenu} to={location[3]}>Services</Link>
                    
                    {sousMenu === 1 ?
                        <div onMouseLeave={handleClose} onMouseEnter={handleMenu} className='sousMenu'>
                            <Link onClick={handleCloseSousMenu} to={"/entreprises"}>Entreprises</Link>
                            <Link onClick={handleCloseSousMenu} to={"particuliers"}>Particuliers</Link>
                        </div>
                        :
                        null
                    }
                    
                    <Link className={tarifs} onMouseEnter={handleClose} onClick={handleTarifs} to={"/tarifs"}>Tarifs</Link>
                    <Link className={contact} onMouseEnter={handleClose} onClick={handleContact} to={"/contact"}>Contact</Link>
                    <Link className={faq} onMouseEnter={handleClose} onClick={handleFAQ} to={"/FAQ"}>FAQ</Link>      
                </ul>
            </nav>

        </div>
    );
};

export default Header;