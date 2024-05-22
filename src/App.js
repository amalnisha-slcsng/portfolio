import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';
import Resume from './components/Resume';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects></Projects>
      <Resume></Resume>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
