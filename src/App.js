import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ToolList from './pages/ToolList';
import ToolDetail from './pages/ToolDetail';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<ToolList />} />
        <Route path="/tool/:id" element={<ToolDetail />} />
      </Routes>
    </Router>
  );
}

export default App; 