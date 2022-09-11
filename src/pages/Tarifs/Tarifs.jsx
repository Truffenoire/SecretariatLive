import React, {useState, useEffect} from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import image from '../../imageImport/cochon_euro.jpg'
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const Tarifs = () => {

    const [prix5h, setPrix5h] = useState(`5h`)
    const [prix5, setPrix5] = useState(`de secrétariat`)
    const [prix10h, setPrix10h] = useState(`10h`)
    const [prix10, setPrix10] = useState(`de secrétariat`)
    const [prix15h, setPrix15h] = useState(`15h*`)
    const [prix15, setPrix15] = useState(`de secrétariat`)

    const slide = (elem, delay, duration) => {
        gsap.fromTo(elem,
        {
            delay: 0.5, rotationX: -180, opacity: 0.5,
        }, 
        {
            rotationX: 0, opacity: 1,
        }
        )
    }
    
    const handleEnter5 = () => {
        setPrix5('HT(270€ TTC)')
        setPrix5h('225€')
        slide('.hsize5')
    }
    const handleLeave5 = () => {
        setPrix5(`de secrétariat`)
        setPrix5h(`5h`)
        slide('.prix5')
    }
    const handleEnter10 = () => {
        setPrix10('HT(528€ TTC)')
        setPrix10h('440€')
        slide('.hsize10')
    }
    const handleLeave10 = () => {
        setPrix10(`de secrétariat`)
        setPrix10h(`10h`)
        slide('.prix10')
    }
    const handleEnter15 = () => {
        setPrix15('HT(780€ TTC)')
        setPrix15h('650€')
        slide('.hsize15')
    }
    const handleLeave15 = () => {
        setPrix15(`de secrétariat`)
        setPrix15h(`15h*`)
        slide('.prix15')
    }


    return (
        <div className='tarifs'>
            <div className="prix">
                <h1>Des Tarifs avantageux !</h1>
                <div style={{background: `${image}`}} className="bulleContainer">
                    <div onMouseLeave={handleLeave5} onMouseEnter={handleEnter5} className="bullePrix prix5"><span className="hsize5">{prix5h}</span>{prix5}</div>
                    <div onMouseLeave={handleLeave10} onMouseEnter={handleEnter10} className="bullePrix prix10"><span className="hsize10">{prix10h}</span>{prix10}</div>
                    <div onMouseLeave={handleLeave15} onMouseEnter={handleEnter15} className="bullePrix prix15"><span className="hsize15">{prix15h}</span>{prix15}</div>
                </div>
                <div className="horaires">* Au delà de 15 heures, <br></br> tarif horaire identique</div>
                <div className="infoTarif">Tarifs non assujettis à la TVA</div>
                <h2 className="devis"><Link to={'/contact#ancreContact'}>Devis personnalisé</Link></h2>
            </div>
            {/* <h4 className="tva">Tarifs assujetis à la TVA</h4> */}
            <div className="prestation">
                <h3 className='title'>Détails des prestations :</h3>
                <ul className="prestaList">
                    <li>Vous avez possibilité d'acheter quelques heures au detail au tarif de 45€ l'unité.</li>
                    <li>Toute heure entamée est due.</li>
                    <li>Déplacements : Frais kilometriques et temps de trajet facturés en fonction du barème en vigueur.</li>
                </ul>
            </div>
            <div className="containExemple">
                <div className="exemple">
                    <div className="exempleTitle">Exemple :</div>
                    <div className="exempleListe">
                        <ul>
                            <li>Vous êtes situé à 15km de mon domicile, soit environ 15 minutes, donc 30km A/R et 30min de trajet.</li>
                            <li>Je dois intervenir dans votre entreprise ou je dois récupérer des documents qui ne peuvent être transmis par mail.</li>
                            <li>Le calcul est le suivant : 30km x 0.63 (taux en vigueur) + 22€ (temps de trajet) = 41€ HT</li>
                            {/* <li>A cela s'ajoute ke telos d'intervention sur place.</li> */}
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Tarifs;