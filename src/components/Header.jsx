import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { IoSearchSharp, IoCartOutline } from "react-icons/io5";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo"> 
        <img src={logo} alt="Logo"/> 
      </div>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <div className="dropdown">
          <button
            className={dropdownOpen ? 'active' : ''}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            type="button"
          >
            Regalos
          </button>
          <div className={`dropdown-content${dropdownOpen ? ' show' : ''}`}>
            <a href="#">Cajas de regalo</a>
            <a href="#">Carteles personalizados</a>
          </div>
        </div>
        <a href="#">Ofertas</a>
        <a href="#">Destacados</a>
        <a href="#">Contacto</a>
      </nav>
      
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button type="submit"><IoSearchSharp /></button>
        </div>
        <div className="cart"><a href="#"><IoCartOutline size={20}/></a></div>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </header>
  );
}

export default Header;