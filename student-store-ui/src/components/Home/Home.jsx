import * as React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ProductDetail from "../ProductDetail/ProductDetail";

import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import About from "../About/About";


export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart
}) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <Hero/>
   
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        shoppingCart={shoppingCart}
      />
      <About/>
    </div>
  );
}
