import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'
import PastilleAvis from './components/PastilleAvis';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const Contact = () => {

    // Variables pour gerer le formulaire et le vider apres submit
    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()
    // -------
    const [isSended, setIsSended] = useState(false)
    const form = useRef();

    const sendEmail = data => {
        // e.preventDefault();
        console.log('useForm', data);
        console.log('useRef', form.current);
        setIsSended(true)
        // emailjs.sendForm('service_wqic8du', 'template_q9ohhdd', form.current, 'zJihS0iRqjWy0B2fw')
        // .then((result) => {
        //     console.log(result.text);
        //     setIsSended(true)
        //     reset()
        // }, (error) => {
        //     console.log(error.text);
        // });
    };

    return (
        <div className='contact'>
            <h2 className='title'>Une question, un projet ou besoin d'une secretaire indépendante au plus vite ?</h2>
            <div className="linkContact">
                <div className="containImg">
                    <img src="./images/call-center-1.jpg" alt="" />
                </div>
                <div className="containTxt">
                    <h4 className='titleH4'>Contactez moi !</h4>
                    <div className='numberTel'>07.60.17.85.07</div>
                    <div className='mail'>secretariatlive13@gmail.com</div>
                    <div className='facebook'>Facebook</div>
                    <div className='insta'>Instagram</div>
                </div>
            </div>
            <div className='formContainer'>
                <div className="containForm">
                    <form className="formulaire" ref={form} onSubmit={handleSubmit(sendEmail)}>
                        {isSended && (<small className='smallSubmit'>Merci pour votre message, nous vous repondrons très vite.</small>)}
                        <label htmlFor="name">Nom<span className='etoile'>*</span></label>
                        <input name='user_name' htmlFor='name' placeholder='Nom' type="text" required
                            {...register('user_name', {
                                required: true
                            })} />
                        <label htmlFor="E-mail">E-mail<span className='etoile'>*</span></label>
                        <input name='user_email' htmlFor="E-mail" placeholder='E-mail' type="text" required
                            {...register('user_email', {
                                required: true
                            })} />
                        <label htmlFor="message">Message</label>
                        <textarea name='message' htmlFor="message" placeholder='Votre message' id="" cols="30" rows="10" required
                            {...register('message', {
                                required: true
                            })}></textarea>
                        <button type='submit' className='btnForm'>ENVOYER</button>
                    </form>

                </div>
                <div className="containImgMail">
                    <img src="./images/email.jpg" alt="" />
                </div>
            </div>
            <PastilleAvis />
        </div>
    );
};

export default Contact;