import React from "react";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterDescription from "./FooterDescription/FooterDescription";
import "./Footer.css"

function FooterApp() {
  return (
    <footer>
      <FooterLinks />
      <FooterDescription />
    </footer>
  );
}

export default FooterApp;
