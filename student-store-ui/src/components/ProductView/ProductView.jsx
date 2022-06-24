import * as React from "react";
import "./ProductView.css";
import Hero from "../Hero/Hero";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="product">
      <h1 className="product-id">Product#{productId}</h1>

      <ProductCard
        showDescription={true}
        product={product}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}
