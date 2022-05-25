import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";




const BannerTop = () => {

    return (
        <div className='bannerTop'>
            <div className='position'><GiPositionMarker /> 13720 Belcodène</div>
            <ul>
                <li><FiPhoneCall /> 07.60.17.85.07</li>
                <li><BiMailSend /> secretariatlive13@gmail.com</li>
            </ul>
            
        </div>
    );
};

export default BannerTop;