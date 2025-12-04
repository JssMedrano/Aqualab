import React from 'react';
import '../styles/CadastroProfessor.css';

const CadastroProfessor = ({ onSubmit, onSwitchToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div>
      <h2>Cadastro Professor</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
        <label htmlFor="identificador">Identificador:</label>
        <input type="text" id="identificador" name="identificador" placeholder="Digite seu identificador" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" required />
        <button type="submit" className="entrar-btn">CADASTRAR</button>
      </form>
      <p className="cadastro-link">
        Você já tem conta? <button type="button" className="link-button" onClick={() => onSwitchToLogin && onSwitchToLogin()}>Entre</button>
      </p>
    </div>
  );
};

export default CadastroProfessor;
