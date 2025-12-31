
import './App.css'
import Navbar from './components/Navbar'
import NewNavbar from './components/NewNavbar'

import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {

  return (
    <><NewNavbar></NewNavbar>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
