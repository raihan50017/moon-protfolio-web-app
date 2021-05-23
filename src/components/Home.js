import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <React.Fragment>
            <Header>
                <Banner></Banner>
                <About></About>
                <Service></Service>
                <Testimonial></Testimonial>
                <Contact></Contact>
                <Footer></Footer>
            </Header>
        </React.Fragment>
    );
};

export default Home;