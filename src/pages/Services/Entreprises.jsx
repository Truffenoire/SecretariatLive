import React, {useEffect} from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin( ScrollTrigger, ScrollToPlugin )

const Services = () => {

    // Animation carte .fromLeft
    useEffect(() => {
        gsap.fromTo(".fromLeft",
            {
                x:-200, opacity: 0, delay: 0.3,
            }, 
            {
                x: 0, opacity: 1, delay: 0.3, duration: 1.5,
                scrollTrigger: {
                    trigger:".fromLeft",
                }
            }
        )
    }, []); 
    // Animation carte .fromRight
    useEffect(() => {
        gsap.fromTo(".fromRight",
            {
                x:200, opacity: 0, 
            }, 
            {
                x: 0, opacity: 1, delay: 0.3, duration: 2.5,
                scrollTrigger: {
                    trigger:".fromRight",
                }
            }
        )
    }, []); 

    return (
        <>
        <div className='entreprises'>
            <h1 className='title'>Secretariat / Gestion et administration</h1>
            <ul className='entreprisesList'>
                <li>Factures, devis, bon de commandes.</li>
                <li>Relance d'impayés.</li>
                <li>Gestion des mails.</li>
                <li>Tableau de suivi des dépenses.</li>
                <li>Établissement des comptes en ligne (edf, eau, assurances etc...).</li>
                <li>Interface avec la comptabilité.</li>
                <li>Tableaux ecxell simples.</li>
                <li>Papiers entête avec ou sans Logo.</li>
                <li>Dossiers adminitratifs (assurances, banques ...).</li>
                <li>Traitements des appels téléphoniques.</li>
                <li>Photocopies (0.40 cts / page) A3, A4.</li>
                <li>Prise de rendez-vous pour la médecine du travail.</li>
                <li>Carte C.I.B.T.P.</li>
            </ul>
            <p>Liste non exhaustive.</p>
        </div>
        <div className='organisation'>
            <h2 className='title'>Organisation</h2>
            <div className="fromLeft">Bien classé, bien trouvé !</div>
            <div className="fromRight">Dans votre bureau ou sur votre ordinateur.</div>
            <ul className="organisationList">
                <li>Tri pour ne garder que les documents nécessaires.</li>
                <li>Création d'étiquettes de classeurs et de documents.</li>
                <li>Classement informatique.</li>
                <li>Création d'archivage.</li>
            </ul>
        </div>
        </>
    );
};

export default Services;