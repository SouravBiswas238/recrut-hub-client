import React from 'react';
import Articles from '../Articles/Articles';
import About from '../About/About';
import Service from '../Service/Service';
import Banner from './../Banner/Banner';
import Agency from '../Agency/Agency';
import OurTeam from '../OurTeam/OurTeam';
import Contact from '../../Contact/Contact';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <div>
            <Banner />
            <About />
            <Service />
            <Agency />
            <OurTeam />
            <Contact />
            <Articles />
        </div>
    );
};
export default Home;