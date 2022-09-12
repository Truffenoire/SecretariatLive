import React, { useEffect } from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import chargeMentale from './components/images/imgCharge.jpg'
import deleguez from './components/images/yoga_medit.png'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const Particuliers = () => {

    // Animation carte .yogaSuperpose
    useEffect(() => {
        gsap.fromTo(".yogaSuperpose",
            {
                height: 0, opacity: 0, delay: 1,
            },
            {
                height: 420, opacity: 1, delay: 0.3, duration: 1.5,
                scrollTrigger: {
                    trigger: ".yogaSuperpose",
                }
            }
        )
    }, []);
    // Animation carte .iconMedit
    useEffect(() => {
        gsap.fromTo(".h2titleIcon",
            {
                x: -200, opacity: 0, delay: 1,
            },
            {
                x: 0, opacity: 1, delay: 0.3, duration: 1.5,
                scrollTrigger: {
                    trigger: ".h2titleIcon",
                }
            }
        )
    }, []);
    // Animation carte .iconEnd
    useEffect(() => {
        gsap.fromTo(".iconEnd",
            {
                height: 0, opacity: 0, delay: 1,
            },
            {
                height: 500, opacity: 1, delay: 0.3, duration: 1.5,
                scrollTrigger: {
                    trigger: ".iconEnd",
                }
            }
        )
    }, []);

    return (
        <div className='particuliers'>
            <div className='iconExplose'>
                <h1 className='title'>Exit la charge mentale !</h1>
                <div className='iconCharge'>
                    <img className='iconEnd' src={chargeMentale} alt="" />
                </div>
            </div>
            <h2 className='h2title'>Le temps vous manque ? </h2>
            <div className="iconMedit">
                <h2 className='h2titleIcon'> Délèguez ! </h2>
                {/* <div className="yogaSuperpose"> */}
                    <img className="yogaSuperpose" src={deleguez} alt="" />
                {/* </div> */}
            </div>
            <ul className='particuliersListe'>
                <li>Lettres personnelles, professionnelles</li>
                <li>CV, lettre de motivation, démission, disponibilité</li>
                <li>Courriers et gestion des dossiers CAF, securité sociale, pôle emploi, lettre de réclamation...</li>
                <li>Recommandés ou envoi de courriers</li>
                <li>Changement d'adresse</li>
                <li>Recherches sur internet</li>
                <li>Organisation de votre boîte mail</li>
                <li>Commandes de cadeaux (fête des mères, anniverssaire etc...)</li>
                <li>Réservation de vos vacances ou de vos évenements privés</li>
                <li>Tri optimal / système d'archivage / classement informatique</li>
                <li>Etc...</li>
            </ul>
        </div>
    );
};

export default Particuliers;