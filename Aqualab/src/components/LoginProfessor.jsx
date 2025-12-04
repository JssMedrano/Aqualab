import React from 'react';
import '../styles/LoginProfessor.css';

const LoginProfessor = ({ onSubmit, onSwitchToCadastro }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div>
      <h2>Login Professor</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />
        <button type="submit" className="entrar-btn">ENTRAR</button>
      </form>
      <p className="cadastro-link">
        Você não tem conta? <button type="button" className="link-button" onClick={() => onSwitchToCadastro && onSwitchToCadastro()}>Cadastre-se</button>
      </p>
    </div>
  );
};

export default LoginProfessor;
