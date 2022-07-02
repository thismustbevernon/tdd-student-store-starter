import * as React from "react";
import "./Sidebar.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppngCart/ShoppingCart";

export default function Sidebar({
  isOpen,
  handleOnToggle,
  shoppingCart,
  handleOnSubmitCheckoutForm,
  handleOnCheckoutFormChange,
  checkoutForm,

  products,
  subtotal,
  cartSize
}) {
  return (
    <section className="sidebar">
      <section className={isOpen ? "sidenav open" : "sidenav closed"}>
        <div className="allitems">
          <button
            className={isOpen ? "toggle-button open" : "toggle-button closed"}
            onClick={handleOnToggle}
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <button className={isOpen ? "closedIcon open" : "closedIcon closed"}>
            <i className="material-icons md-48" onClick={handleOnToggle}>
              add_shopping_cart
            </i>
          </button>
        </div>
        <ShoppingCart
          products={products}
          subtotal={subtotal}
          cartSize={cartSize}
          isOpen={isOpen}
          shoppingCart={shoppingCart}
        />
        <CheckoutForm
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          checkoutForm={checkoutForm}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        />
      </section>
    </section>
  );
}
