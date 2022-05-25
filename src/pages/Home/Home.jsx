import React, { useState, useEffect, useRef } from 'react';
import TextAnime from './components/TextAnime'
import Card from './components/Card'
import CardTxt from './components/CardTxt';

const Home = () => {


    return (
        <div className='home'>
            <TextAnime />
            <Card />
            <CardTxt />
        </div>
    );
};

export default Home;