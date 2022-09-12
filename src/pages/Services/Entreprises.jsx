import React, {useEffect} from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import connections from '../../imageImport/connections.png'
import reflection from '../../imageImport/reflection.jpg'
import courbe from '../../imageImport/courbe.jpg'

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
                y:100, opacity: 0, 
            }, 
            {
                y: 0, opacity: 1, delay: 0.3, duration: 2.5,
                scrollTrigger: {
                    trigger:".fromRight",
                }
            }
        )
    }, []); 

    return (
        <>
        <div className='entreprises'>
        </div>
            <div className="containEntrepriseList">
                {/* <h1 className='title'>Secretariat / Gestion et administration</h1>
                <ul className='entreprisesList'>
                    <li>Factures, devis, bon de commandes</li>
                    <li>Relance d'impayés</li>
                    <li>Gestion des mails</li>
                    <li>Tableau de suivi des dépenses</li>
                    <li>Établissement des comptes en ligne (edf, eau, assurances etc...)</li>
                    <li>Interface avec la comptabilité</li>
                    <li>Tableaux ecxel simples</li>
                    <li>Papiers entête avec ou sans Logo</li>
                    <li>Dossiers adminitratifs (assurances, banques ...)</li>
                    <li>Traitements des appels téléphoniques</li>
                    <li>Photocopies (0.40 cts / page) A3, A4</li>
                    <li>Prise de rendez-vous pour la médecine du travail</li>
                    <li>Carte C.I.B.T.P</li>
                </ul>
                <p><em>Liste non exhaustive.</em></p> */}
                <div className='entreprisesList'>
                <h2 className='title'>Gestion de l'entreprise</h2>
                    <ul>
                        <li>Factures, devis, bon de commande : saisie, envoi, traitement</li>
                        <li>Relance impayés</li>
                        <li>Tableau de suivi des dépenses</li>
                        <li>Commandes auprès des fournisseurs</li>
                        <li>Classeurs de chantiers (documents, affichages obligatoires)</li>
                        <li>Réservations de billets train / avion / véhicules de location</li>
                        <li>Réservations hébergement</li>
                    </ul>
                </div>
                <div className='imgList'>
                    <img className='imgReflection' src={courbe} alt="courbe croissance" />
                </div>
                <div className='imgList'>
                    <img className='imgCourbe' src={connections} alt="prise de tête" />
                </div>
                <div className='entreprisesList'>
                    <h2 className='title'>Gestion du personnel</h2>
                    <p>(avec interface comptabilité)</p>
                    <ul>
                        <li>DUE / Contrats de travail</li>
                        <li>Visites médicales</li>
                        <li>Congés / Arrêt maladies</li>
                        <li>Etablissement de plannings</li>
                        <li>Carte C.I.B.T.P</li>
                        <li>Notes de frais</li>
                    </ul>
                </div>
                <div className="entreprisesList">
                    <h2 className='title'>Gestion administrative</h2>
                    <ul>
                        <li>Traitement mails</li>
                        <li>Courriers / Documents : saisie, envoi</li>
                        <li>Envois recommandés</li>
                        <li>Tableaux excel</li>
                        <li>Traitements des appels</li>
                        <li>Agenda</li>
                    </ul>
                </div>
                <div className='imgList'>
                    <img className='imgReflection' src={reflection} alt="prise de tête" />
                </div>
                <p className='footEntrepriseList'>Liste non exhaustive</p>
            </div>
        <div className='organisation'>
            <h2 className='title'>Organisation</h2>
            <div className="fromLeft">Bien classé, bien trouvé !</div>
            <div className="fromRight">Dans votre bureau ou sur votre ordinateur.</div>
            <ul className="organisationList">
                <li>Tri pour ne garder que les documents nécessaires</li>
                <li>Création d'étiquettes de classeurs et de documents</li>
                <li>Classement informatique</li>
                <li>Création d'archivage</li>
            </ul>
        </div>
        </>
    );
};

export default Services;