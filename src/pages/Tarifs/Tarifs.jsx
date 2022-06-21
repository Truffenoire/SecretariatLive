import React, {useState, useEffect} from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import image from '../../imageImport/cochon_euro.jpg'
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const Tarifs = () => {

    const [prix5, setPrix5] = useState(`5h de secretariat`)
    const [prix10, setPrix10] = useState(`10h de secretariat`)
    const [prix15, setPrix15] = useState(`15h de secretariat`)

    const slide = (elem, delay, duration) => {
        gsap.fromTo(elem,
        {
            delay: 0.5, rotationX:-180, opacity: 0.5,
        }, 
        {
            rotationX: 0, opacity: 1,
        }
        )
    }
    
    const handleEnter5 = () => {
        setPrix5('225€ HT(270€ TTC)')
        slide('.prix5', '1s')
    }
    const handleLeave5 = () => {
        setPrix5(`5h de secretariat`)
    }
    const handleEnter10 = () => {
        setPrix10('440€ HT(528€ TTC)')
        slide('.prix10')
    }
    const handleLeave10 = () => {
        setPrix10(`10h de secretariat`)
    }
    const handleEnter15 = () => {
        setPrix15('650€ HT(780€ TTC)')
        slide('.prix15')
    }
    const handleLeave15 = () => {
        setPrix15(`15h de secretariat`)
    }


    return (
        <div className='tarifs'>
            <div className="prix">
                <h1>Des Tarifs avantageux !</h1>
                <div style={{background: `${image}`}} className="bulleContainer">
                    <div onMouseLeave={handleLeave5} onMouseEnter={handleEnter5} className="bullePrix prix5">{prix5}</div>
                    <div onMouseLeave={handleLeave10} onMouseEnter={handleEnter10} className="bullePrix prix10">{prix10}</div>
                    <div onMouseLeave={handleLeave15} onMouseEnter={handleEnter15} className="bullePrix prix15">{prix15}</div>
                </div>
                <h2 className="devis"><Link to={'/contact#ancreContact'}>Devis personnalisé</Link></h2>
            </div>
            {/* <h4 className="tva">Tarifs assujetis à la TVA</h4> */}
            <div className="prestation">
                <h3 className='title'>Détails des prestations :</h3>
                <ul className="prestaList">
                    <li>Déplacements : Frais kilometriques et temps de trajet facturés en fonction du barème en vigueur.</li>
                    <li>Toute heure entamée est due.</li>
                </ul>
            </div>
        </div>
    );
};

export default Tarifs;