import Images from "../constants/image";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {
  const menu = [
    { mName: "หน้าหลัก", link: "/" },
    { mName: "เกี่ยวกับฉัน", link: "/about" },
    { mName: "บทความ", link: "/blog" },
    { mName: "ตัวอย่าง", link: "/template" },
  ];

  const [isActive, setIsActive] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleClose = () => {
    setIsClick(false);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Images.Logo} alt="" />
          </Link>
        </div>
        <ul className={isActive ? "menu active" : "menu"}>
          {menu.map((dest, index) => (
            <Link
              to={dest.link}
              key={index}
              onClick={() => {
                setIsActive(false);
              }}
            >
              <li>{dest.mName}</li>
            </Link>
          ))}
          <div className="contactBtn" onClick={handleClick}>
            ติดต่อเรา
          </div>
          <Contact action={isClick} onClose={handleClose} />
        </ul>
        <div className="mobile-menu">
          {!isActive ? (
            <GiHamburgerMenu
              onClick={handleActive}
              className="menuBtn"
              aria-label="Open menu"
            />
          ) : (
            <AiOutlineClose
              onClick={handleActive}
              className="menuBtn"
              aria-label="Close menu"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
