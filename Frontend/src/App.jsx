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
import FeatureDetails from './pages/home/FeatureDetails';
import WhyUsDetail from './pages/about/WhyUsDetail';
import BlogDetail from './pages/blog/BlogDetail';
import OurStrength from './pages/about/OurStrength';
import ResearchDevelopment from './pages/about/ResearchDevelopment';
import ServiceCity from './pages/home/ServiceCity';

function App() {
  const animatedRef = useRef(false);
  useEffect(() => {
    if (!animatedRef.current) {
      Aos.init();
      animatedRef.current = true;
    }
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route exact path='/ServiceCity/:name' Component={ServiceCity} />
          <Route exact path='/ServiceCity/:name/:caption' Component={ServiceImages} />
          <Route exact path='/Features/:id' Component={FeatureDetails} />
          <Route exact path='/AboutUs/:id' Component={WhyUsDetail} />
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
