import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
  <div>
    <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
     </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
