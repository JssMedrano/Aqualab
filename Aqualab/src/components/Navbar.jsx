import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, Navigate, NavLink } from "react-router-dom";
// import Home from "../views/Home";

import logo from "../assets/logo0.png";
import LoginSelector from "./LoginSelector";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState("selector");
  const [modalAction, setModalAction] = useState("login");

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="aqualab-logo" src={logo} alt="Aqualab Logo" />
        <a
          href="#home"
          className="scroll-down"
          aria-label="Ir a Home"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("home");
            const nav = document.querySelector(".navbar");
            const navHeight = nav ? nav.offsetHeight : 0;
            if (target) {
              const top =
                target.getBoundingClientRect().top +
                window.scrollY -
                navHeight -
                8;
              window.scrollTo({ top, behavior: "smooth" });
              target.setAttribute("tabindex", "-1");
              target.focus({ preventScroll: true });
            }
          }}
        >
          <h1>AquaLab</h1>
        </a>
      </div>
      <ul className="navbar-list">
        <li>
          <a
            href="#area-conteudo"
            className="scroll-down"
            aria-label="Ir a áreas de conteúdo"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("area-conteudo");
              const nav = document.querySelector(".navbar");
              const navHeight = nav ? nav.offsetHeight : 0;
              if (target) {
                const top =
                  target.getBoundingClientRect().top +
                  window.scrollY -
                  navHeight -
                  8;
                window.scrollTo({ top, behavior: "smooth" });
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
              }
            }}
          >
            Conteudo
          </a>
        </li>

        <li>
          <a
            href="#video-educativo"
            className="scroll-down"
            aria-label="Ir a Videos Educativos"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("video-educativo");
              const nav = document.querySelector(".navbar");
              const navHeight = nav ? nav.offsetHeight : 0;
              if (target) {
                const top =
                  target.getBoundingClientRect().top +
                  window.scrollY -
                  navHeight -
                  8;
                window.scrollTo({ top, behavior: "smooth" });
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
              }
            }}
          >
            Videos Educativos
          </a>
        </li>
        <li>
          <a
            href="#funcionalidade"
            className="scroll-down"
            aria-label="Ir a Funcionalidades"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("funcionalidade");
              const nav = document.querySelector(".navbar");
              const navHeight = nav ? nav.offsetHeight : 0;
              if (target) {
                const top =
                  target.getBoundingClientRect().top +
                  window.scrollY -
                  navHeight -
                  8;
                window.scrollTo({ top, behavior: "smooth" });
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
              }
            }}
          >
            Funcionalidades
          </a>
        </li>
      </ul>
      <div className="auth-buttons">
        <button
          className="entrar"
          onClick={() => {
            setModalAction("login");
            setModalView("selector");
            setShowModal(true);
          }}
        >
          Entrar
        </button>
        <button
          className="cadastrar"
          onClick={() => {
            setModalAction("cadastro");
            setModalView("selector");
            setShowModal(true);
          }}
        >
          Cadastrar
        </button>
      </div>
      <LoginSelector
        showModal={showModal}
        setShowModal={setShowModal}
        modalView={modalView}
        setModalView={setModalView}
        modalAction={modalAction}
        setModalAction={setModalAction}
      />
      
    </nav>
  );
}

export default Navbar;
