import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo0.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className='aqualab-logo' src={logo} alt="Aqualab Logo" />
                <Link to="/"><h1>AquaLab</h1></Link>
            </div>
            <ul className="navbar-list">
                <li><Link className='navbar-links' to="/">Inicio</Link></li>
                {/* <li><a href="#area-de-conteudo">Conteudo</a></li> */}
                <li><Link className='navbar-links' to="/area-de-conteudo">Conteudo</Link></li>
                <li><Link className='navbar-links' to="/videos">Videos</Link></li>
                <li><Link className='navbar-links' to="/funcionalidades">Funcionalidades</Link></li>
            </ul>
            <div className='navbar-buttons' >
                <button className='navbar-butt1' >Entrar</button>
                <button className='navbar-butt2'>Cadastrar</button>
            </div>
        </nav>
    );
}

export default Navbar