import React from 'react';
import './ProductGrid.css';
import { FaArrowRight } from "react-icons/fa";
import cartel1 from '../assets/Cartel1.png';
import cartel2 from '../assets/Cartel2.png';
import cartel3 from '../assets/Cartel3.png';
import cartel4 from '../assets/Cartel4.png';

const products = [
  { id: 1, name: 'Cartel de regalo grande personalizado', price: 'S/ 80.00', image: cartel1 },
  { id: 2, name: 'Cartel personalizado Paquete 4', price: 'S/ 70.00', image: cartel2 },
  { id: 3, name: 'Cartel personalizado Paquete 2', price: 'S/ 45.00', image: cartel3 },
  { id: 4, name: 'Cartel personalizado Paquete 1', price: 'S/ 40.00', image: cartel4 },
];

function ProductGrid() {
  return (
    <div className="product-section">
      <h1 className="product-title">Productos más vendidos</h1>
      <section className="product-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} className="product-img" />
          <div className="product-info">
            <p className="product-category">CARTELES PERSONALIZADOS</p>
            <a href="#" className="product-link"><h3>{p.name}</h3></a>
            <p className="price">{p.price}</p>
          </div>
        </div>
      ))}
      </section>
      <div className="product-btn-container">
        <button className="product-btn" onClick={() => window.location.href = '/#'}>Ver más productos <FaArrowRight /></button>
      </div>
    </div>
  );
}

export default ProductGrid;