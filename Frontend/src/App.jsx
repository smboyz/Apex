import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/home/Homepage';
import GoToTop from './components/GoToTop';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/contact/Contact';
import Mission from './pages/about/Mission';
import Vision from './pages/about/Vision';
import ImageGallery from './pages/gallery/ImageGallery';
import VideoGallery from './pages/gallery/VideoGallery';
import AboutUs from './pages/about/AboutUs';
import Objective from './pages/about/Objective'; 
import Blog from './pages/blog/Blog';
import ServiceImages from './pages/home/ServiceImages';
import BlogDetail from './pages/blog/BlogDetail';
import OurStrength from './pages/about/OurStrength';
import ResearchDevelopment from './pages/about/ResearchDevelopment';

function App() {
  const animatedRef = useRef(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const disableValue = windowWidth <= 600 ? 0 : 600; // Change the threshold as needed
      Aos.init({
        disable: window.innerWidth <= 600 ? true : disableValue
      });
    };
    if (!animatedRef.current) {
      handleResize(); // Initial setup
      animatedRef.current = true;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route exact path='/ServiceImages/:adTitle' Component={ServiceImages} />
          <Route exact path='/AboutUs' Component={AboutUs} />
          <Route exact path='/Mission' Component={Mission} />
          <Route exact path='/Vision' Component={Vision} />
          <Route exact path='/Objective' Component={Objective} />
          <Route exact path='/OurStrength' Component={OurStrength} />
          <Route exact path='/ResearchDevelopment' Component={ResearchDevelopment} />
          <Route exact path='/ImageGallery' Component={ImageGallery} />
          <Route exact path='/VideoGallery' Component={VideoGallery} />
          <Route exact path='/Contact' Component={Contact} />
          <Route exact path='/Blog' Component={Blog} />
          <Route exact path='/Blog/:id' Component={BlogDetail} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <GoToTop />
      </Router>
    </>
  )
}

export default App