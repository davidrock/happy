import React from 'react';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfatnatos e mude o dia de mutias crianças.</p>
        </main>

        <div className="location">
          <strong>Vila Velha</strong>
          <span>Espírito Santo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}
