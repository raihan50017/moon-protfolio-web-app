import React from 'react';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    return (
        <React.Fragment>
            <Header>
                <Banner></Banner>
                <About></About>
                <Footer></Footer>
            </Header>
        </React.Fragment>
    );
};

export default Home;