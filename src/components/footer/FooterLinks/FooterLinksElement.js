import React from "react";

function FooterLinksElement(props) {
  return (
    <a href={props.url}>
      <li>{props.text}</li>
    </a>
  );
}

export default FooterLinksElement;
