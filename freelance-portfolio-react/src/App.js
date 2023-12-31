import './styles/main.css';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Project from './pages/Project';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import ScrollToTop from "./utils/scrollToTop"
import Schedule from './pages/Schedule';
import Schedules from './pages/Shedules';
import Welcome from './pages/Welcome';


function App() {
  return (
      <div className="App">
          <Router>
              <ScrollToTop/>
          <Navbar />
             <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/project/:id" element={<Project />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/schedules" element={<Schedules />} />
                  <Route path="/schedule/:id" element={<Schedule />} />
                  <Route path="/welcome" element={<Welcome />} />
             </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
