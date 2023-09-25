import React from 'react';
import Banner from './Banner';
import Intro from './Intro';
import Features from './Features';
import Achievements from './Achievements';
import Testimonials from './Testimonials';
import Services from './Services';
import Video from './Video';
import OurBlog from './OurBlog';

const Homepage = () => {
    return (
        <>
            <Banner />
            <Intro />
            <Features />
            <Services />
            <Video />
            <Achievements />
            <Testimonials />
            <OurBlog />
        </>
    )
}

export default Homepage;
