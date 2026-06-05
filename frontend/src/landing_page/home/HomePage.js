import React from 'react';
import Hero from './Hero.js';
import Education from './Education.js';
import Stats from './Stats.js';
import Pricing from './Pricing.js';
import OpenAccount from '../OpenAccount.js';


function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;