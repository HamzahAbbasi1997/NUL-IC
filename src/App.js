import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import DonatePage from './pages/donate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/donate" element={<DonatePage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
