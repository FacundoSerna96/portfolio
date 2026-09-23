
import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import ExperienceTime from './ExperienceTime';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import NetworkCanvas from './NetworkCanvas';
import LoadingScreen from './LoadingScreen';

import './styles/App.css';
import DataProvider from '../Helpers/Context';


const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <DataProvider>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {/* Fixed background canvas */}
      <NetworkCanvas />

      {/* Gradient overlay: transparent over hero, fades to bg below */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        background: 'linear-gradient(to bottom, transparent 55vh, rgba(var(--bg-rgb), 0.4) 80vh, rgba(var(--bg-rgb), 0.6) 100vh)',
      }} />

      {/* Content above both layers */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <ExperienceTime />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />
    </DataProvider>
  );
}

export default App;
