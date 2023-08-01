"use client";
import { useState } from "react";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [openMenus, setOpenMenu] = useState("navbar");

  const handleMenu = () => {
    setOpenMenu("open__menu");
  };
  const closeMenu = () => {
    setOpenMenu("navbar");
  };
  return (
    <header className="header">
      <div className="logo">
        <span>
          <small>BJ</small> Marketers
        </span>
      </div>
      <nav className={openMenus}>
        <div className="close__menu" onClick={closeMenu}>
          <span>Close</span>
        </div>
        <a href="#">Home</a>
        <a href="dd#">About</a>
        <a href="#">Service</a>
        <a href="dd#">Projects</a>
        <a href="#">Contact</a>
      </nav>
      <div className="nav__right">
        <a href="">
          <i>
            <BsSearch />
          </i>
        </a>
        <button>Get Started</button>
      </div>
      <div className="hambuger">
        <i onClick={handleMenu}>
          <FiMenu />
        </i>
      </div>
    </header>
  );
};

export default Navbar;
