import './App.css';
import CHeader from './Header.js';
import AboutMe from './AboutMe.js';
import ProjectsList from './ProjectList';
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
      <AboutMe/>
      <ProjectsList projects={Projects} />
    </div>
  );
}

export default App;
