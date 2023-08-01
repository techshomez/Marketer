"use client";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>BJ Marketers</span>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="nav__right">
        <a href="">
          <i>
            <BsSearch />
          </i>
        </a>
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
