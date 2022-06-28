import * as React from "react";
import "./Contact.css";
//import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <div id="Contact" className="contact">
      <div className="content">
        <a id="ContactUs">
        <h3>Contact Us</h3>
        </a>
        <div className="summary">
          <ul className="info">
            <li>
              <span className="label">Email :</span>
              <span> code@path.org</span>
            </li>
            <li>
              <span className="label">Phone :</span>
              <span> 1-800-CODEPATH</span>
            </li>
            <li>
              <span className="label">Address :</span>
              <span>123 Fake Street, San Francisco, CA</span>
            </li>
            <li>
              <span>Socials: </span>
              <span className="socials">
                {/* <SocialIcon
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
                /> */}
              </span>
            </li>
          </ul>
          <div className="media">
            <img alt="codepath" src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
}