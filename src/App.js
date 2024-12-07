import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import ProjectView from './components/ProjectView'; // Update path if needed
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/project-view" element={<ProjectView />} /> {/* ProjectView page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
