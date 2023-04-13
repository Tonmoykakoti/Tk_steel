import React from "react";
import logoNew from "../TKSTEEL.png";
import { pageLinks } from "../data";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logoNew} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <div className="links-container " ref={linksContainerRef}>
          <ul
            className={`${showLinks ? "nav-links show-links" : "nav-links"}`}
            id="nav-links"
            ref={linksRef}
          >
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
        </div>

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
