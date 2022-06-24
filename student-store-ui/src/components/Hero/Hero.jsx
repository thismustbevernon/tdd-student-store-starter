import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div id="bigger-container">
      <div id="welcome" className="hero">
        <div id="texts" className="intro">
          <div>
            {" "}
            <h1> Welcome!</h1>
            <div>
              {" "}
              <h1> Find Your Merch</h1>{" "}
            </div>
            <div>
              <p>
                We have all kinds of goodies. Click on any of the items to start
                filling up your shopping cart. Checkout whenever you're ready
              </p>
            </div>
          </div>
        </div>

        <img className="hero-img"
          id="image"
          src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
        />
      </div>
    </div>
  );
}
