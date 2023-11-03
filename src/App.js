import './App.css';
import CHeader from './Header.js';
import AboutMe from './AboutMe.js';
import Footer from './LinkBar';
import Navbar from './Navbar.js';


import Projects from './projects.json';

function App() {
  const sortedProjects = Projects.sort((a, b) => a.rank - b.rank);
  return (
    <div className="App">
    {/* <Footer />
      <CHeader />
      <div className='about-parent'>
      { 
        sortedProjects.map(e => (
          <AboutMe project={e} />
        ))
      }
      </div> */}
      <Navbar />
      <CHeader/>
    </div>
  );
}

export default App;
