import React, { useState } from 'react';
import '../styles/LoginSelector.css';
import Profesor from '../assets/profesor.jpg';
import Aluno from '../assets/estudante.jpg';
import LoginModal from './LoginModal';
import LoginAluno from './LoginAluno';
import LoginProfessor from './LoginProfessor';
import CadastroAluno from './CadastroAluno';
import CadastroProfessor from './CadastroProfessor';

const LoginSelector = ({ showModal: propShowModal, setShowModal: propSetShowModal, modalView: propModalView, setModalView: propSetModalView, modalAction: propModalAction, setModalAction: propSetModalAction }) => {
  const [localShowModal, setLocalShowModal] = useState(false);
  const [localModalView, setLocalModalView] = useState('selector');
  const [localModalAction, setLocalModalAction] = useState('login');

  const showModal = propShowModal !== undefined ? propShowModal : localShowModal;
  const setShowModal = propSetShowModal !== undefined ? propSetShowModal : setLocalShowModal;
  const modalView = propModalView !== undefined ? propModalView : localModalView;
  const setModalView = propSetModalView !== undefined ? propSetModalView : setLocalModalView;
  const modalAction = propModalAction !== undefined ? propModalAction : localModalAction;
  const setModalAction = propSetModalAction !== undefined ? propSetModalAction : setLocalModalAction;
  const isControlled = propShowModal !== undefined || propSetShowModal !== undefined || propModalView !== undefined || propSetModalView !== undefined || propModalAction !== undefined || propSetModalAction !== undefined;
  // opciones: 'selector', 'aluno', 'professor', 'cadastroAluno', 'cadastroProfessor'

  const handleAlunoClick = () => {
    if (modalAction === 'cadastro') setModalView('cadastroAluno');
    else setModalView('aluno');
  };
  const handleProfessorClick = () => {
    if (modalAction === 'cadastro') setModalView('cadastroProfessor');
    else setModalView('professor');
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setModalView('selector');
  };
  const handleBack = () => setModalView('selector');

  return (
    <div className="login-selector">
      {/* Navbar fallback when component is used standalone */}
      {!isControlled && (
        <header className="navbar">
          <div className="auth-buttons">
            <button className="entrar" onClick={() => setShowModal(true)}>Entrar</button>
            <button className="cadastrar" onClick={() => { setShowModal(true); setModalView('selector'); }}>Cadastrar</button>
          </div>
        </header>
      )}

      <LoginModal show={showModal} onClose={handleCloseModal} onBack={handleBack} showBack={modalView !== 'selector'}>
        {modalView === 'selector' && (
          <>
            <h2></h2>
            <div className="options">
              <button className="option professor" onClick={handleProfessorClick}>
                <img src={Profesor} alt="Professor" />
                <span className='letras'>PROFESSOR</span>
              </button>
              <button className="option aluno" onClick={handleAlunoClick}>
                <img src={Aluno} alt="Aluno" />
                <span className='letras'>ALUNO</span>
              </button>
            </div>
          </>
        )}

        {modalView === 'aluno' && (
          <LoginAluno onSubmit={() => setShowModal(false)} onSwitchToCadastro={() => setModalView('cadastroAluno')} />
        )}

        {modalView === 'professor' && (
          <LoginProfessor onSubmit={() => setShowModal(false)} onSwitchToCadastro={() => setModalView('cadastroProfessor')} />
        )}

        {modalView === 'cadastroAluno' && (
          <CadastroAluno onSubmit={() => setShowModal(false)} onSwitchToLogin={() => setModalView('aluno')} />
        )}

        {modalView === 'cadastroProfessor' && (
          <CadastroProfessor onSubmit={() => setShowModal(false)} onSwitchToLogin={() => setModalView('professor')} />
        )}
      </LoginModal>
    </div>
  );
};

export default LoginSelector;
