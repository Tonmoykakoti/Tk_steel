import React from "react";
// import logo from "../images/logo.svg";
import logoNew from "../TKSTEEL.png";
import { pageLinks } from "../data";
// import { socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logoNew} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links " id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-link" rel="noreferrer">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        {/* <ul className="nav-icons">
          {socialLinks.map((links) => {
            const { id, href, icon } = links;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;