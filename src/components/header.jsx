import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

export default function Header() {
  console.log();
  return (
    <header>
      <img className="logo" src="/logo.png" alt="HRnet" />
      <nav className="nav">
        {window.location.pathname === "/" ? (
          <Link className="nav-link" to="/employee-list">
            View Current Employees
          </Link>
        ) : (
          <Link className="nav-link" to="/">
            Home
          </Link>
        )}
      </nav>
    </header>
  );
}
