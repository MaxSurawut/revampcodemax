import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section">
        <div className="footer-icon">
          <AiFillFacebook className="icon" /> &nbsp;:&nbsp; CODEMAX
        </div>
        <div className="footer-icon">
          <MdPhoneInTalk className="icon" /> &nbsp;:&nbsp; 092-448-6399
        </div>
      </div>
    </div>
  );
}

export default Footer;
