import React from 'react';
import '../styles/CadastroAluno.css';

const CadastroAluno = ({ onSubmit, onSwitchToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div>
      <h2>Cadastro Aluno</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
        <label htmlFor="matricula">Matrícula:</label>
        <input type="text" id="matricula" name="matricula" placeholder="Digite sua matrícula" required />
        <label htmlFor="escola">Escola:</label>
        <input type="text" id="escola" name="escola" placeholder="Digite o nome da escola" required />
        <button type="submit" className="entrar-btn">CADASTRAR</button>
      </form>
      <p className="cadastro-link">
        Você já tem conta? <button type="button" className="link-button" onClick={() => onSwitchToLogin && onSwitchToLogin()}>Entre</button>
      </p>
    </div>
  );
};

export default CadastroAluno;
