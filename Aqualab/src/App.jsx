import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from '../Routes.jsx'
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

 

export default App
