import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
