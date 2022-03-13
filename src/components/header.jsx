import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

export default function Header() {
  return (
    <header>
      <h1
        className="header-title"
        onClick={() => {
          window.location.pathname = "/";
        }}
      >
        🤝HRnet
      </h1>
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
