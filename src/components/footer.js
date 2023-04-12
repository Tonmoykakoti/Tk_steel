import React from "react";
import { pageLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, text, href } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link" rel="noreferrer">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; T.k Steel & Hardware
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
