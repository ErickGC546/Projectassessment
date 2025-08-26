import React from 'react';
import './Banner.css';
import bannerImg from '../assets/banner.png'; 
import { FaShoppingCart } from "react-icons/fa";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-image">
          <img src={bannerImg} alt="Regalos artísticos" />
        </div>
        <div className="banner-content">
          <h1>Regalando Arte</h1>
          <h4>Descubre el arte que hay en nuestros regalos</h4>
          <h2>Convertimos momentos especiales en recuerdos inolvidables.</h2>
          <h4>Solicita nuestro catálogo</h4>
          <div className="cta-container">
            <button className="cta-button"><FaShoppingCart className="cart-icon"/>COMPRA AHORA</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;