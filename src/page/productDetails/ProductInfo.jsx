import React, { useContext } from "react";
import {
  FaRegHeart,
  FaRegStarHalfStroke,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/context/CartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const { cartItem, addToCart, addToFav, favorites, removefromfav } = useContext(CartContext); 
  const navigate = useNavigate();

  const isInCart = cartItem.some((i) => i.id === product.id);
  const isInFav = favorites.some((i) => i.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong> added to Cart
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

  const handleAddToFav = () => {
    if (isInFav) {
      removefromfav(product.id); 
      toast.error(`${product.title} Removed from favorites`);
    } else {
      addToFav(product);
      toast.success(`${product.title} Added to favorites`);
    }
  };

  return (
    <div className="details-item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
      <p className="price">$ {product.price}</p>
      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        Hurry Up! Only <span>{product.stock} Product</span> left in stock.
      </h5>

      <button
        className={`btn ${isInCart ? "in-cart" : ""}`}
        onClick={handleAddToCart}
      >
        {isInCart ? "Item in cart" : "Add to cart"} <TiShoppingCart />
      </button>

      <div className="icons">
        <span className={isInFav ? "in-favorites" : ""} onClick={handleAddToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;