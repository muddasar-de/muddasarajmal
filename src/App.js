import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Testimonial from './components/testimonial/Testimonial';
import Services from './components/services/Services';
import Projects from './components/portfolio/Projects';
import BounceLoader from 'react-spinners/BounceLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <div className='loader'>
          <BounceLoader color='#4db5ff' loading={loading} size={80} />
        </div>
      ) : (
        <div>
          <Header />
          <Nav />
          <About />
          <Services />
          <Experience />
          <Projects />
          {/* <Testimonial /> */}
          <Contact />
          <Footer />
          {/* <ProjItem /> */}
        </div>
      )}
    </div>
  );
}

export default App;
