import React from "react";
import "./Categoria.css";
import { FaArrowRight } from "react-icons/fa";
import cajasImg from '../assets/Cajas.png';
import cartelesImg from '../assets/Carteles.png';
import rosasImg from '../assets/Rosas.png';

const categories = [
  {
    id: 1,
    name: "Cajas de regalo",
    text: "Embellece cada ocasión con la frescura y elegancia de nuestros arreglos florales",
    image: cajasImg,
  },
  {
    id: 2,
    name: "Carteles Personalizados",
    text: "Nuestros carteles personalizados transmiten mucho más que emociones. Regala algo verdaderamente único y personalizado.",
    image: cartelesImg,
  },
  {
    id: 3,
    name: "Rosas y flores",
    text: "Embellece cada ocasión con la frescura y elegancia de nuestros arreglos florales",
    image: rosasImg,
  },
];

function Categories() {
  return (
    <section className="categories">
      <h1 className="categories-title">Categorías</h1>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.name} className="category-image" />
            <div className="category-content">
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-text">{cat.text}</p>
              <button className="category-button">
                Comprar ahora <FaArrowRight className="button-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;