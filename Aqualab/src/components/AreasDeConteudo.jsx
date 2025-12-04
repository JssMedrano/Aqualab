import React, { useState, useRef } from "react";
import '../styles/AreasDeConteudo.css';
import LoginSelector from '../components/LoginSelector.jsx';


function AreasDeConteudo({ icon, title, description, rota }) {
    const cardRef = useRef(null);

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const [showModal, setShowModal] = useState(false);
    const [modalView, setModalView] = useState("selector");
    const [modalAction, setModalAction] = useState("login");

    function handleMove(e) {
        if (prefersReducedMotion) return;
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateY = ((x - midX) / midX) * 8; // degrees
        const rotateX = -((y - midY) / midY) * 8;

        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        el.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 28px rgba(0,0,0,0.18)`;
    }

    function handleLeave() {
        const el = cardRef.current;
        if (!el) return;
        el.style.transform = '';
        el.style.boxShadow = '';
    }

    return (
        <section
            className="card-area-de-conteudo"
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            aria-label={title}
        >
            <img className="area-de-conteudo-icon" src={icon} alt={title} />
            <h2 className='area-de-conteudo-title'>{title}</h2>
            <p className='area-de-conteudo-description'>{description}</p>
            <a className="link-section" onClick={() => { setModalAction('login'); setModalView('selector'); setShowModal(true); }}>
                →  Ver Mais
            </a>
            

            <LoginSelector
                showModal={showModal}
                setShowModal={setShowModal}
                modalView={modalView}
                setModalView={setModalView}
                modalAction={modalAction}
                setModalAction={setModalAction}
            />
        </section>
    );  
}

export default AreasDeConteudo;