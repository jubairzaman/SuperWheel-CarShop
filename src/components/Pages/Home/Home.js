import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import HomeVehicles from './HomeVehicle/HomeVehicles';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeVehicles />
            <Reviews />
            <About />
            <Contact />
        </div>
    );
};

export default Home;