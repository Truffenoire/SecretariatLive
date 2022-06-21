import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Header = ( {accueil, setAccueil, service, setService, tarifs, setTarifs, contact, setContact, faq, setFaq, sousMenu, setSousMenu} ) => {


    // const [accueil, setAccueil] = useState('selected')
    // const [service, setService] = useState('hoverA')
    // const [tarifs, setTarifs] = useState('hoverA')
    // const [contact, setContact] = useState('hoverA')
    // const [faq, setFaq] = useState('hoverA')
    // const [sousMenu, setSousMenu] = useState(0)

    const handleAccueil = (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('hoverA')
        setAccueil('selected')
        setSousMenu(0)
    }
    const handleService = (e) => {
        setSousMenu(1)
        setService('selected')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('hoverA')
        setAccueil('hoverA')
    }
    const handleServiceLeave = (e) => {
        setSousMenu(0)
        setService('hoverA')
        setTarifs('hoverA')
        setContact('hoverA')
        setFaq('hoverA')
        setAccueil('selected')
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
    // const handleUrl = (e) => {
        let url = window.location.href
        const location = url.split('/')
        console.log(location[3]);
    // }

    return (
        <div className='header'>
            <div className='logo'>
                <img src="LogoSiteBlancG.svg" alt="Logo secretariat Live" />
            </div>
            <nav className='navBar' >
                <ul>
                    <Link className={accueil}  onClick={handleAccueil} to={"/SecretariatLive"}>Accueil</Link>
                    <Link className={service} onMouseLeave={handleServiceLeave} onMouseEnter={handleService} to={location[3]}>Services</Link>
                    {sousMenu === 1 ?
                        <div onMouseLeave={handleClose} className='sousMenu'>
                            <Link onMouseLeave={handleServiceLeave} onMouseEnter={handleService} onClick={handleClose} to={"/entreprises"}>Entreprises</Link>
                            <Link onMouseLeave={handleServiceLeave} onMouseEnter={handleService} onClick={handleClose} to={"particuliers"}>Particuliers</Link>
                        </div>
                        :
                        null
                    }
                    <Link className={tarifs} onClick={handleTarifs} to={"/tarifs"}>Tarifs</Link>
                    <Link className={contact} onClick={handleContact} to={"/contact"}>Contact</Link>
                    <Link className={faq} 
                    
                    onClick={handleFAQ} to={"/FAQ"}>FAQ
                    </Link>
                </ul>
            </nav>

        </div>
    );
};

export default Header;