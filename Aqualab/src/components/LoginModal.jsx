import React from 'react';
import { createPortal } from 'react-dom';
import '../styles/LoginModal.css';

const LoginModal = ({ show, onClose, onBack, showBack = false, children }) => {
  if (!show) return null;

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const modalContent = (
    <div className="modal-overlay" onClick={handleOverlay}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {showBack && (
            <button className="icon-btn" onClick={onBack} aria-label="Voltar">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          <button className="icon-btn close" onClick={onClose} aria-label="Fechar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {children}
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};

export default LoginModal;
