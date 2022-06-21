import * as React from "react"
import "./Navbar.css"
import Sidebar from "../Sidebar/Sidebar"


export default function Navbar() {
  return (
    <nav className="navbar">
      <p>navbar</p>
      <div className="content">
      <div className="logo"></div>
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#About">About US</a>
        </li>
        <li>
          <a href="/#Contact">Contact US</a>
        </li>
        <li>
          <a href="/But">Buy Now</a>
        </li>
      </ul>


      </div>

    </nav>
  )
}
