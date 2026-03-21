import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import Contact from './Contacts';

function App() {
  return (
    <>
      <main className='min-h-screen'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
