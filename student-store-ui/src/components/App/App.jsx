import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://codepath-store-api.herokuapp.com/store";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckOutForm] = useState(null);
  const [subtotal, setSubtotal] = useState(null);

  useEffect(async () => {
    const response = await axios.get(url);
    if (response.data.products) {
      setProducts(response.data.products);
    } else {
      setError("No Products Found");
    }
  }, []);

  function handleOnToggle(isOpen) {
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(productId) {
    let item = shoppingCart.find((element) => element.id === productId);

    if (item) {
      shoppingCart.map((item) => {
        if (item.id === productId) {
          //item.capacity += 1;
          item.quantity += 1;

          var tempPrice =
            products.find((item) => item.id === productId).price + subtotal;
          setSubtotal(tempPrice);

          return;
        }
      });
    } else {
      item = {
        id: productId,
        quantity: 1,
      };
      setShoppingCart(shoppingCart.concat(item));

      var tempPrice =
        products.find((item) => item.id === productId).price + subtotal;
      setSubtotal(tempPrice);
    }
  }

  function handleRemoveItemToCart(productId) {
    let item = shoppingCart.find((element) => element.id === productId);
    if (item) {
      if (item.quantity === 1) {
        shoppingCart.filter((prod) => {
          return prod.id !== productId;
        });
      } else {
        item.quantity -= 1;
      }
    }
  }

  function handleOnCheckoutFormChange(names, values) {
    let userInformation = {
      name: names,
      value: values,
    };

    setCheckOutForm(userInformation);
  }

  async function handleOnSubmitCheckoutForm(checkOutForm, shoppingCart) {
    const response = axios.post(url, {
      user: checkOutForm,
      shoppingCart: shoppingCart,
    });
  }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  shoppingCart={shoppingCart}
                  handleOnToggle={handleOnToggle}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnCheckoutFormChange}
                  isOpen={isOpen}
                  checkoutForm={checkoutForm}
                  setShoppingCart={setShoppingCart}
                  subtotal={subtotal}
                  cartSize={shoppingCart.length}
                  setSubtotal={setSubtotal}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemToCart}
                  isOpen={isOpen}
                  products={products}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  handleOnToggle={handleOnToggle}
                  checkoutForm={checkoutForm}
                  subtotal={subtotal}
                />
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
