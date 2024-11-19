import React from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import cart from "../assets/emptycart.png";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateSubtotal } =
    useCart();

  const increaseQuantity = (id, storage, currentQuantity) => {
    updateQuantity(id, storage, currentQuantity + 1);
  };

  const decreaseQuantity = (id, storage, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, storage, currentQuantity - 1);
    }
  };

  const shippingCost = 20;
  const subtotal = calculateSubtotal();
  const taxes = (subtotal * 0.14).toFixed(2);
  const total = (
    parseFloat(subtotal) +
    parseFloat(taxes) +
    shippingCost
  ).toFixed(2);

  return (
    <div className="cart-page section-py">
      <h1 className="header-container">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart-container">
          <img src={cart} alt="empty cart" />
          <p>Your cart is empty</p>
          <Link to="/">
            <button className="start-shopping">Start Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.storage}`} className="cart-item">
                <div className="item-details">
                  <img
                    src={item.images[0].image}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.storage}</p>
                  </div>
                </div>
                <div className="item-price">
                  <p>${item.price.toLocaleString()}</p>
                </div>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        decreaseQuantity(item.id, item.storage, item.quantity)
                      }
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        increaseQuantity(item.id, item.storage, item.quantity)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-total">
                  <p>${(item.price * item.quantity).toLocaleString()}</p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id, item.storage)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="total-container">
            <div className="totals">
              <div className="left">
                <div className="totals-item">
                  <span>Shipping:</span>
                </div>
                <div className="totals-item">
                  <span>Taxes (14%):</span>
                </div>
                <div className="totals-item">
                  <span>Subtotal:</span>
                </div>
                <div className="totals-item">
                  <span className="total-amount">Total:</span>
                </div>
              </div>
              <div className="right">
                <div className="totals-item">
                  <span>${shippingCost.toLocaleString()}</span>
                </div>
                <div className="totals-item">
                  <span>${taxes}</span>
                </div>
                <div className="totals-item">
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="totals-item">
                  <span className="total-amount">${total}</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="button-container">
              <Link to="/">
                <button className="continue-shopping-btn">
                  Continue Shopping
                </button>
              </Link>
              <Link to="/checkout">
                <button className="checkout-btn">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
