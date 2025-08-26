import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Categoria from "./components/Categoria";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categoria />
      <ProductGrid />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default App;
