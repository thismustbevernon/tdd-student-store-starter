import * as React from "react";
import "./ProductDetail.css";
import Hero from "../Hero/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  const [product, setProduct] = useState();
  let { productId } = useParams();
  console.log("this is the product id", { productId });
  const isLoading = !Boolean(product);
  //const whenLoading = "";

  const quantity = 0;
  var loaded = (
    <ProductView
      product={product}
      productId={productId}
      quantity={quantity}
      handleAddItemToCart={handleAddItemToCart}
      handleRemoveItemToCart={handleRemoveItemToCart}
    />
  );

  //var show = isLoading ? <h1> Loading...</h1> : loaded;

  var show;
  if (isLoading) {
    show = <h1> Loading...</h1>;
  } else if (product === "Not Found") {
    show = <NotFound />;
  } else {
    show = loaded;
  }

  useEffect(async () => {
    console.log("ProductId: ", productId);

    try {
      const url = `https://codepath-store-api.herokuapp.com/store/`;
      const newUrl = url + productId;
      const response = await axios.get(newUrl);
      setProduct(response.data.product);
    } catch (error) {
      console.log("error", error);
      console.log(error?.response);
      if (error?.response?.status === 404) {
        setProduct("Not Found");
        console.log("the if statement");
      }
    }
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
