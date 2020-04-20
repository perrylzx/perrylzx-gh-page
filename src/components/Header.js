import React from "react";
import company_logo from "./company_logo.png";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <img className="logo" src={company_logo} width="100px" alt="logo" />
          <h1 id="url">PERRYLZX.GITHUB.IO</h1>
        </div>
        <div>
          <h6 id="contact">
            <a href="mailto:perry_lzx@outlook.com?Subject=" target="_top">
              Email
            </a>
            <br />
            <a href="https://www.linkedin.com/in/lim-zhi-xian-369840181">
              Linkedin
            </a>
            <br />
          </h6>
          <hr />
        </div>
      </div>
    );
  }
}
