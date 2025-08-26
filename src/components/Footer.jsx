import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMotorcycle, FaMapMarkerAlt, FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineAccessTime, MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import logo from '../assets/logo.png';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="titul">Regalando Arte</h2>
          <p>
            Convertimos momentos especiales en recuerdos inolvidables con
            regalos personalizados.
          </p>
        </div>

        <div className="footer-section">
          <h3>Despachos</h3>
          <ul>
            <li><FaMotorcycle />Envíos a todo Lima y el Callao</li>
            <li><MdOutlineAccessTime size={20}/>Recibe tu pedido en minutos</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li><a href="#"><MdEmail />contacto@regalandoarte.com</a></li>
            <li><a href="#"><IoMdCall />920171265</a></li>
            <li><a href="#"><FaMapMarkerAlt />Solo delivery: Lima</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#"><FaRegArrowAltCircleRight />Politicas de privacidad</a></li>
            <li><a href="#"><FaRegArrowAltCircleRight />Terminos y condiciones</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <img src={logo} alt="Logo"/>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Regalando Arte - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
