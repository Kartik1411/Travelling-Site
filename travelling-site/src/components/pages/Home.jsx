import React from 'react';

import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import MainSection from '../Main-Section';

function Home () {
    return(
        <>
            <MainSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;