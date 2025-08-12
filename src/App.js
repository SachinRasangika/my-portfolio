import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectView from './components/ProjectView';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router basename="/my-portfolio">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-view" element={<ProjectView />} />
          <Route path="/before-after-slider" element={<BeforeAfterSlider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
