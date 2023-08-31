import './App.css';
import CHeader from './Header.js';
import AboutMe from './AboutMe.js';
import Footer from './LinkBar';


import Projects from './projects.json';

function App() {
  return (
    <div className="App">
    <Footer />
      <CHeader />
      <div className='about-parent'>
      { 
        Projects.map(e => (
          <AboutMe project={e} />
        ))
      }
      </div>
      
    </div>
  );
}

export default App;
