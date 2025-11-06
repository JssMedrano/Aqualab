import '../styles/Funcionalidades.css';

function Funcionalidades({ icon, title, description }) {
    return (
        <div className="funcionalidades-card">
            <div>
            <img className="funcionalidades-icon" src={icon} alt ={title} />
            </div>
            <div>
            <h3 className="funcionalidades-title">{title}</h3>
            <p className="funcionalidades-description">{description}</p>
            </div>
        </div>
    );
}

export default Funcionalidades;