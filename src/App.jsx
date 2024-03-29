import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Work from './components/Work';

function App ()
{

  return (
    <div className='scroll-smooth bg-slate-50'>
      <Sidenav />
      <Main />
      <AboutMe />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
