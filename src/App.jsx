import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portofolio from './components/portofolio/Portofolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import './app.scss'
import { useState } from 'react';

function App() {
  const [menueOpen , setMenueOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menueOpen= {menueOpen} setMenueOpen={setMenueOpen}  />
      <div className="sections">
          <Intro />
          <Portofolio />
          <Works />
          <Contact />
      </div>
    </div>
  );
}

export default App;
