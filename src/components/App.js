
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import ExperienceTime from './ExperienceTime';
import Contact from './Contact';
import Footer from './Footer';

import './styles/App.css';
import DataProvider from '../Helpers/Context';


const App = () => {
  return (
    <DataProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ExperienceTime />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </DataProvider>
  );
}

export default App;
