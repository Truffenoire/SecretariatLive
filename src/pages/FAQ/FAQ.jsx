import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const FAQ = ( {setAccueil, setContact, setFaq, setTarifs, setService} ) => {

    // let navigate = useNavigate() 
    const [txtFacture, setTxtFacture] = useState('')

    const handleFacture = () => {
        setTxtFacture(`Nous convenons ensemble en visioconférence ou par téléphone de vos besoin, je vous envoie le devis que vous me retournez signé. À la fin de la mission, je vous fais parvenir ma facture, réglable par virement bancaire ou paypal à réception.`)
    }
    const handleLienClick =  async (e) => {
        setService('hoverA')
        setTarifs('hoverA')
        setContact('selected')
        setFaq('hoverA')
        setAccueil('hoverA')
    }
    // Animation carte .titre
    useEffect(() => {
        gsap.timeline().fromTo(".title1",
            {
                opacity: 0, delay: 1,
            },
            {
                opacity: 1, delay: 0.3, duration: 1,
                scrollTrigger: {
                    trigger: ".title1",
                }
            }
        )
        .fromTo(".title2",
            {
                opacity: 0, delay: 1,
            },
            {
                opacity: 1, delay: 0.3, duration: 1,
                scrollTrigger: {
                    trigger: ".title2",
                }
            }
        )
        .fromTo(".title3",
            {
                opacity: 0, delay: 1,
            },
            {
                opacity: 1, delay: 0.3, duration: 1,
                scrollTrigger: {
                    trigger: ".title3",
                }
            }
        )
    }, []);
    // Animation carte .texte
    useEffect(() => {
        gsap.timeline().fromTo(".txt1",
            {
                x: 200, opacity: 0, delay: 1,
            },
            {
                x: 0, opacity: 1, delay: 0.3, duration: 1,
                scrollTrigger: {
                    trigger: ".txt1",
                }
            }
        )
        .fromTo(".txt2",
            {
                x: 200, opacity: 0, delay: 1,
            },
            {
                x: 0, opacity: 1, delay: 0.3, duration: 1,
                scrollTrigger: {
                    trigger: ".txt2",
                }
            }
        )
        .fromTo(".txt3",
            {
                x: 200, opacity: 0, delay: 1,
            },
            {
                x: 0, opacity: 1, delay: 0.3, duration: 1,
                scrollTrigger: {
                    trigger: ".txt3",
                }
            }
        )
    }, []);

    return (
        <div className='FAQ'>
            <h1>D'autres questions ? N'hesitez pas à me <Link onClick={handleLienClick} to={'/contact'}>contacter.</Link></h1>
            <div className="avantage">
                    <h3 className='titleOne'>Quels sont les avantages d'une secretaire indépendante ?</h3>
                <div className='flexAvantage'>
                    <h4 className='title title1'>Financiers :</h4>
                    <p className="txt txt1">Le principal avantage est financier en comparaison avec le coût d'un intérimaire ou d'un salarié.<br></br> Vous ne signez pas de contrat avec la secretaire indépendante mais elle vous facture ses prestations. <br></br>C'est un contrat de service. Pas de charges, de congés à payer, de formations, de congés etc...</p>
                </div>
                <div className='flexAvantage'>
                    <h4 className='title title2'>Flexibilité :</h4>
                    <p className="txt txt2">Elle peut subvenir à une surcharge de travail temporaire, <br></br> combler l'absence de votre secretaire malade ou en congés.</p>
                </div>
                <div className='flexAvantage'>
                    <h4 className='title title3'>Facile et rapide :</h4>
                    <p className="txt txt3">En un coup de fil, <br></br>vous convenez avec elle de vos besoin et cela se formalise par la signature d'un devis.</p>
                </div>
            </div>
            <div className="comment">
                <h2 className='titleClick'>Comment et pourquoi travailler à distance ?</h2>
                <p className="opaqueClick">Vous l'aurez remarqué ! Chaque organisme ou entreprise dématerialise aujourd'hui certaines de ses fonctions. Grâce au télétravail et au developpement des technologie, vous pourrez choisir de travailler à distane afin de gagner en rapidité et en temps. Je m'adapte à vos connaissances et vos habitudes. La plupart de mes clients communiquent avec moi via differente application : What's App, télégram, Zoom, mails, téléphone, cloud... Afin de partager instentanement des documents et vos demandes.</p>
            </div>
            <div className="facturation">
                <h2 className="titleClick" onClick={handleFacture}>Comment se passe la facturation ?</h2>
                <p className="opaqueClick">{txtFacture}</p>
            </div>
        </div>
    );
};

export default FAQ;