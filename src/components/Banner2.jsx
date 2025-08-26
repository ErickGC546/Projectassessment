import React from 'react';
import './Banner.css';
import banner2Img from '../assets/banner2.png'; 

function Banner2() {
  return (
    <section className="banner">
          <div className="banner-container">
            <div className="banner-content">
              <h1>
                Siempre es un buen momento<br />
                para hacer sentir a alguien<br />
                especial.
              </h1>
              <p>Cajas de regalo | Carteles personalizados</p>
            </div>
            <div className="banner-image">
              <img src={banner2Img} alt="Regalos artísticos" />
            </div>
          </div>
        </section>
  );
}

export default Banner2;