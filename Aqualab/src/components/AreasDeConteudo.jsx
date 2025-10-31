import '../styles/AreasDeConteudo.css';
import { Link } from 'react-router-dom';


function AreasDeConteudo({icon, title, description}) {
    return (
        <section className="areas-de-conteudo-section">
            <img className="area-de-conteudo-icon" src={icon} alt={title} />
            <h2 className='area-de-conteudo-title'>{title}</h2>
            <p className='area-de-conteudo-description'>{description}</p>
            <Link className='link-section' to={`/conteudo/${title}`}>→  Ver Mais</Link>
        </section>
    );
}

export default AreasDeConteudo;