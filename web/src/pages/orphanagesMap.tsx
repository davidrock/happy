import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/marker.svg';
import '../styles/pages/orphanages-map.css';

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :) </p>
        </header>

        <footer>
          <strong>Vila Velha</strong>
          <span>Espírito Santo</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size="32" color="#FFF" />
      </Link>
    </div>
  );
}
