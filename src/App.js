import './App.css';
import CHeader from './Header.js';
import AboutMe from './AboutMe.js';
import Footer from './Footer';


import Projects from './projects.json';

function App() {
  return (
    <div className="App">
      <CHeader />
      <div className='about-parent'>
      { 
        Projects.map(e => (
          <AboutMe project={e} />
        ))
      }
      </div>
      <Footer />
    </div>
  );
}

export default App;
