import * as React from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <Logo className="logo" />
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Contact</li>
        <li className="navbar-item">Buy Now</li>
      </ul>
    </nav>
  );
}
