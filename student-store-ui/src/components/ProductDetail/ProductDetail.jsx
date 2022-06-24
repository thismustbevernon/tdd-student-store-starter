import * as React from "react";
import "./ProductDetail.css";
import Hero from "../Hero/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  const [product, setProduct] = useState();
  let { productId } = useParams();
  console.log("this is the product id", { productId });
  const isLoading = !Boolean(product);
  const whenLoading = "";

  const quantity = 0;
  const whenLoaded = (
    <ProductView
      product={product}
      productId={productId}
      quantity={quantity}
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemToCart={handleRemoveItemToCart}
    />
  );

  const show = isLoading ? <h1> Loading...</h1> : whenLoaded;

  useEffect(async () => {
    console.log("ProductId: ", productId);
    const url = `https://codepath-store-api.herokuapp.com/store/`;
    const newUrl = url + productId;
    const response = await axios.get(newUrl);

    console.log("respose:", response);
    setProduct(response.data.product);
  }, []);

  return (
    <div className="product-detail">
      <Navbar />
      <Sidebar />
      {show}
      <p>Product Detail</p>
  
    </div>
  );
}
