import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Testimonial from './components/testimonial/Testimonial';
import Services from './components/services/Services';
import Projects from './components/portfolio/Projects';
import ProjItem from './components/port/ProjItem';
function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Projects />
      <Testimonial />
      <Contact />
      {/* <Footer /> */}
      {/* <ProjItem /> */}
    </div>
  );
}

export default App;
