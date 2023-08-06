import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import DonatePage from './pages/donate';
import PrayerPage from './pages/prayer';
import Event from './pages/event';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/donate" element={<DonatePage />} exact />
        <Route path="/prayer" element={<PrayerPage />} exact />
        <Route path="/openday" element={<Event />} exact />
      </Routes>
    </Router>
  );
}

export default App;
