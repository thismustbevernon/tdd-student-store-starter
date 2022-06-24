import * as React from "react";
import "./ProductGrid.css";

import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddITemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  return (
    <div className="product-grid">


      {products.map((product) => {
        return (
          <ProductCard
            showDescription={false}
            product={product}
            productId={product.id}
            quantity={shoppingCart.quantity}
            handleAddITemToCart={handleAddITemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
        );
      })}
    </div>
  );
}
