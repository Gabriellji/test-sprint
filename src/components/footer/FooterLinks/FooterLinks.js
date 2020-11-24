import React, { Component } from "react";
import FooterLinksElement from "./FooterLinksElement";
import { FooterLinkData } from "../../data/FooterLinkData";

class FooterLinks extends Component {
  state = {
    FooterLinkData,
  };
  render() {
    return (
      <div className="leftFooter">
        <ul>
          {this.state.FooterLinkData.map((data, index) => (
            <FooterLinksElement key={index} text={data.name} url={data.url} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FooterLinks;
