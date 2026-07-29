import React, { useContext } from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart, FaShare, FaCheck } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";

function Product({ item }) {
  const navigate = useNavigate();

  const { cartItem, addToCart, addToFav, favorites, removefromfav } =
    useContext(CartContext);

  const isInCart = cartItem.some((i) => i.id === item.id);
 
  const hanleAddToCart = () => {
    addToCart(item);

    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong> 
          added to Cart
          <div>
            <button onClick={() => navigate("/cart")} className="btn">
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 } 
    );
  };

  const isInFav = favorites.some((i) => i.id === item.id);

  const handleAddToFav = () => {
    if (isInFav) {
      removefromfav(item.id);
      toast.error(`${item.title} Removed from favorites`);
    } else {
      addToFav(item);
      toast.success(`${item.title} Add to favorites`);
    }
  };
  return (
    <div className={`product ${isInCart ? `in-cart` : ""}`}>
      <Link to={`/product/${item.id}`}>
        <span className="stats-cart">
          <FaCheck /> in cart
        </span>

        <div className="img-product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name-product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>

      <div className="icons">
        <span className="btn-add-cart" onClick={hanleAddToCart}>
          <FaCartArrowDown />
        </span>
        <span
          className={isInFav ? "in-favorites" : ""}
          onClick={handleAddToFav}
        >
          <FaRegHeart />
        </span>{" "}
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
