import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Partners from './pages/Partners';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partenaires" element={<Partners />} />
        <Route path="/zourka-Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
