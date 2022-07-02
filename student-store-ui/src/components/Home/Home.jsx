import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

//![](https://media.giphy.com/media/Dub286rrymEsiKemnF/giphy.gif)
//![](https://media.giphy.com/media/HrQWf8g1XweGw58EBo/giphy.gif)

import { useState } from "react";

export default function Home(props) {
  const [clothing, setClothing] = useState(null);
  const [food, setFood] = useState(null);

  const [accessories, setAccessories] = useState(null);
  const [tech, setTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(true);
  const [all, setAll] = useState(null);

  const handleOnTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleToggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleReset = () => {
    props.setShoppingCart([]);
    props.setSubtotal(0);
  };

  const handleAll = () => {
    if (all) {
      setAll(false);
    } else {
      setAll(true);
      setClothing(false);
      setFood(false);
      setTech(false);
      setAccessories(false);
      setSelectedCategory("");
    }
  };

  const handleTech = () => {
    if (tech) {
      setTech(false);
    } else {
      setTech(true);
      setAll(false);
      setClothing(false);
      setFood(false);

      setAccessories(false);
      setSelectedCategory("tech");
    }
  };
  const handleClothing = () => {
    if (clothing) {
      setClothing(false);
    } else {
      setClothing(true);
      setAll(false);

      setFood(false);
      setTech(false);
      setAccessories(false);
      setSelectedCategory("clothing");
    }
  };

  var searchItems = props.products.filter((datum) => {
    return datum.name.toLowerCase().includes(searchText.toLowerCase());
  });

  if (selectedCategory != "") {
    searchItems = searchItems.filter((datum) => {
      return datum.category === selectedCategory;
    });
  }

  return (
    <div className="home">
      <Navbar />
      <Sidebar
        checkoutForm={props.checkoutForm}
        isOpen={props.isOpen}
        shoppingCart={props.shoppingCart}
        products={props.products}
        subtotal={props.subtotal}
        handleOnCheckOutFormChange={props.handleOnCheckOutFormChange}
        handleOnToggle={props.handleOnToggle}
        setSubtotal={props.setSubtotal}
        cartSize={props.cartSize}
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
      />
      <Hero />
      <nav className="sub-navbar">
        <div className="content">
          <div className="row">
            <div className="search-bar">
              <input
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleOnTextChange}
              />
              <i className="material-icons">search</i>
            </div>
            <div className="links">
              <span className="help">
                <i className="material-icons">help</i>
                Help
              </span>
              <div className="cart" onClick={handleReset}>
                Reset Cart
                <i className="material-icons">shopping_cart</i>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="hamburger-menu">
              <i className="material-icons" onClick={() => handleToggle()}>
                menu
              </i>
            </div>
            <ul
              className={open ? "category-menu open" : "category-menu closed"}
            >
              <li
                className={all ? "is-active" : "is-inactive"}
                onClick={() => handleAll()}
              >
                <button>All Categories</button>
              </li>
              <li
                className={clothing ? "is-active" : "is-inactive"}
                onClick={() => handleClothing()}
              >
                <button>Clothing</button>
              </li>
              <li
                className={food ? "is-active" : "is-inactive"}
                onClick={() => handleFood()}
              >
                <button>Food</button>
              </li>
              <li
                className={accessories ? "is-active" : "is-inactive"}
                onClick={() => handleAccessories()}
              >
                <button>Accessories</button>
              </li>
              <li
                className={tech ? "is-active" : "is-inactive"}
                onClick={() => handleTech()}
              >
                <button>Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <a id="BuyNow"></a>

      <ProductGrid
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        products={searchItems}
        shoppingCart={props.shoppingCart}
      />

      <About />
      <Contact />
      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4>Categories</h4>
                <ul>
                  <li>All Categories</li>
                  <li>Clothing</li>
                  <li>Food</li>
                  <li>Accessories</li>
                  <li>Tech</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Find a Store</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                  <li>Careers</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Money Refund</li>
                  <li>Order Status</li>
                  <li>Shipping Info</li>
                  <li>Open Dispute</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Account</h4>
                <ul>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Account Setting</li>
                  <li>My Orders</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Our App</h4>
                <ul>
                  <li>
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"
                      alt="app store"
                    />
                  </li>
                  <li>
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
                      alt="app store"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// import * as React from "react";
// import "./Home.css";
// import Sidebar from "../Sidebar/Sidebar";
// import Navbar from "../Navbar/Navbar";
// import ProductDetail from "../ProductDetail/ProductDetail";

// import ProductGrid from "../ProductGrid/ProductGrid";
// import Hero from "../Hero/Hero";
// import About from "../About/About";

// export default function Home({
//   products,
//   handleAddItemToCart,
//   handleRemoveItemToCart,
//   shoppingCart
// }) {
//   return (
//     <div className="home">
//       <Navbar />
//       <Sidebar />
//       <Hero/>

//       <ProductGrid
//         products={products}
//         handleAddItemToCart={handleAddItemToCart}
//         handleRemoveItemToCart={handleRemoveItemToCart}
//         shoppingCart={shoppingCart}
//       />
//       <About/>
//     </div>
//   );
// }
