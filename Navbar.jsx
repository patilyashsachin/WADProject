import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div class="nav1">
          <div>
            <h1>Website Services</h1>
          </div>
          <ul class="ul1">
            <Link to="/" className="link">
              <i class="fa-solid fa-moon"></i>
            </Link>
            <Link to="/Home" className="link">
              Home
            </Link>
            <Link to="/" className="link">
              Blog
            </Link>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </ul>
          <div class="butt">
            <Link to="/Login">
              <button class="butt1">Login</button>
            </Link>
            <Link to="/Register">
              <button class="butt1">Signup</button>
            </Link>
          </div>
        </div>
        <hr></hr>
        <div class="nav2">
          <div class="icon">
            <Link to="/" className="link">
              <i class="fa-solid fa-house fa-xl"></i>
            </Link>
          </div>
          <div class="webname">
            <ul class="ul2">
              <Link to="/Blog" className="link">
                Blog
              </Link>
              <Link to="/Personal" className="link">
                Personal
              </Link>
              <Link to="/Portfolio" className="link">
                Portfolio
              </Link>
              <Link to="/NonProfit" className="link">
                Non-Profit
              </Link>
              <Link to="/News" className="link">
                News
              </Link>
            </ul>
          </div>
          <div class="search">
            <input type="search"></input>
            <Link to="#" className="link">
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </Link>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default Navbar;
