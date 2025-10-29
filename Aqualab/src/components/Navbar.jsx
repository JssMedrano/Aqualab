import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className='aqualab-logo' src={logo} alt="Aqualab Logo" />
                <h1>Aqualab</h1>
            </div>
            <ul className="navbar-list">
                <li><Link className='navbar-links' to="/">Inicio</Link></li>
                <li><Link className='navbar-links' to="/conteudo">Conteudo</Link></li>
                <li><Link className='navbar-links' to="/videos">Videos</Link></li>
                <li><Link className='navbar-links' to="/jogos">Jogos</Link></li>
            </ul>
            <div className='navbar-buttons' >
                <button className='navbar-butt1' >Entrar</button>
                <button className='navbar-butt2'>Cadastrar</button>
            </div>
        </nav>
    );
}

export default Navbar