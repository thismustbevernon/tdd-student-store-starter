import * as React from "react";
import Logo from "../Logo/Logo";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="logo" />

      <div className="socials">
        <div className="sociallinks">
          <SocialIcon
            url="https://twitter.com/codepath?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            network="twitter"
            bgColor="#2c4047"
            fgColor="#fff"
          />

          <SocialIcon
            url="https://www.instagram.com/codepathorg/"
            network="instagram"
            bgColor="#2c4047"
            fgColor="#fff"
          />

          <SocialIcon
            url="https://www.facebook.com/codepath.org/"
            network="facebook"
            bgColor="#2c4047"
            fgColor="#fff"
          />
        </div>
      </div>

      <ul className="link">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <a href="/#AboutUs"> About Us </a>
        </li>
        <li>
          <a href="/#ContactUs"> Contact Us </a>
        </li>
        <li>
          <a href="/#BuyNow"> Buy Now</a>
        </li>
      </ul>
    </nav>
  );
}



























// import * as React from "react";
// import "./Navbar.css";
// import Sidebar from "../Sidebar/Sidebar";
// import Logo from "../Logo/Logo";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <Logo className="logo" />
//       <div className="navbar-items">
     
//         <p className="navbar-item">Home</p>
//         <p className="navbar-item">About</p>
//         <p className="navbar-item">Contact</p>
//         <p className="navbar-item">Buy Now</p>
//       </div>
//     </nav>
//   );
// }
