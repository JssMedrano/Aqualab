import React from 'react';
import '../styles/LoginAluno.css';

const LoginAluno = ({ onSubmit, onSwitchToCadastro }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div>
      <h2>Login Aluno</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="matricula">Matrícula:</label>
        <input type="text" id="matricula" name="matricula" placeholder="Digite sua matrícula" required />
        <button type="submit" className="entrar-btn">ENTRAR</button>
      </form>
      <p className="cadastro-link">
        Você não tem conta? <button type="button" className="link-button" onClick={() => onSwitchToCadastro && onSwitchToCadastro()}>Cadastre-se</button>
      </p>
    </div>
  );
};

export default LoginAluno;
