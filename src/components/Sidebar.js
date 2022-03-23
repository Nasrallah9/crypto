import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./../logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <div className="logo-header">
          <img src={logo} alt="logo" className="logo" />
          <span>Cryptoverse</span>
        </div>
        <AiOutlineClose className="close" onClick={closeSidebar} />
      </div>
      <ul className="links">
        <li>
          <Link to="/" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cryptocur" onClick={closeSidebar}>
            {" "}
            Cryptocurrencies
          </Link>
        </li>
        <li>
          <Link to="/exchange" onClick={closeSidebar}>
            Exchange
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
