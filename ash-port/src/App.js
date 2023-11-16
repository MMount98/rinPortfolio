import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./componeents/Navbar"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NavBar />
    </Router>
    </>
  );
}

export default App;
