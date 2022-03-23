import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./../logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="container">
        <div className="logo-header">
          <img src={logo} alt="logo" className="logo" />
          <span>Cryptoverse</span>
        </div>
        <FaBars className="bars" onClick={openSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
