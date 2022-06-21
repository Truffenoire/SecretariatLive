import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// import icones
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";


const Footer = ( {setAccueil, setContact, setFaq, setTarifs, setService} ) => {

    const handleLienClick =  async (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('selected')
        setFaq('hoverA')
        setAccueil('hoverA')
    }

    return (
        <footer className='footer'>
            <div className='rgpd'><Link to={"/rgpd#ancreRGPD"}>Mention légale - CGV et RGPD</Link></div>
            <div className='reseauSociaux'><FaInstagram /><FaFacebook /><Link onClick={handleLienClick} className='mail' to={'/contact#ancreContact'}><RiMailSendLine /></Link></div>
        </footer>
    );
};

export default Footer;