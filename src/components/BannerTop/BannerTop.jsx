import React, { useEffect, useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'




const BannerTop = ({growUp, setGrowUp}) => {


    const [essai, setEssai] = useState('grow')

    const handleGrowUp = (e) => {
        setGrowUp('growUP')
    }
    const handleLeaveDown = (e) => {
        setGrowUp('grow')
    }
    const handleGrowUpTwo = (e) => {
        setEssai('growUP')
    }
    const handleLeaveDownTwo = (e) => {
        setEssai('grow')
    }

    return (
        <div className='bannerTop'>
            <div className='position'><GiPositionMarker /><a onMouseEnter={handleGrowUp} onMouseLeave={handleLeaveDown} className={growUp} target='_blank' href='https://www.google.fr/maps/place/Belcod%C3%A8ne/@43.4230798,5.5670526,14z/data=!3m1!4b1!4m5!3m4!1s0x12c9998b71d4616d:0x40819a5fd9704c0!8m2!3d43.424839!4d5.586635'>13720 Belcodène</a> </div>
            <ul>
                <li><FiPhoneCall /> 07.60.17.85.07</li>
                <li ><BiMailSend /><Link id={essai} onMouseEnter={handleGrowUpTwo} onMouseLeave={handleLeaveDownTwo}  to={'/contact'}>secretariatlive13@gmail.com</Link></li>
            </ul>
            
        </div>
    );
};

export default BannerTop;