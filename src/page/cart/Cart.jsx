import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import PageTransition from "../../components/PageTransition";

function Cart() {
  const { cartItem, increesQuantity ,decreesQuantity ,removeFromCart} = useContext(CartContext);

  const total = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItem.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty {">>"} </h2>
        <Link to="/" className="btn">
          Continue Shopping
        </Link>
      </div>
      
    );
  }

  return (
   <PageTransition>
     <div className="checkout">
      <div className="order-summary">
        <h1>Order Summary</h1>
        <div className="items">
          {cartItem.map((item, index) => (
            <div className="item-cart" key={index}>
              <div className="image-name">
                <div className="img-item">
                  <img src={item.images[0]} alt={item.title} />
                </div>

                <div className="content">
                  <h4>{item.title}</h4>
                  <p className="price-item">${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => decreesQuantity(item.id)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => increesQuantity(item.id)}>+</button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="delete-item">
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
        <div className="bottom-summary">
          <div className="shop-table">
            <p>Total:</p>
            <span className="total-checkout">${total.toFixed(2)}</span>{" "}
          </div>
          <div className="button-div">
            <button type="submit">Place Order</button>
            <button
              onClick={() => {
                localStorage.removeItem("cartItem");
                window.location.reload();
              }}
              className="btn-clear"
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
   </PageTransition>
  );
}

export default Cart;
