import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/wa-logo.jpeg.jpeg";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./Header.css";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

function TopHeader() {
  const { cartItem, favorites } = useContext(CartContext);
  return (
    <div className="top-header">
      <div className="container">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "160px", height: "auto" }}
            className="logo"
          />
        </Link>
        <SearchBox />
        <div className="header_icons">
          <div className="icon">
            <Link to="/favorites">  
              <FaRegHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;