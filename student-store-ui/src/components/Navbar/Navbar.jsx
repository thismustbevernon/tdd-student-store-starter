import * as React from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="logo" />
      <div className="navbar-items">
     
        <p className="navbar-item">Home</p>
        <p className="navbar-item">About</p>
        <p className="navbar-item">Contact</p>
        <p className="navbar-item">Buy Now</p>
      </div>
    </nav>
  );
}
