import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './pages/Home'; // Corrected import path for Home.js in the 'pages' folder
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
