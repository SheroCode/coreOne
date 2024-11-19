import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, calculateSubtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const [formInputs, setFormInput] = useState({
    firstName: "",
    lastName: "",
    billingAddress: "",
    billingCity: "",
    extraNotes: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({}); // To hold validation errors

  const shippingCost = 20;
  const taxes = calculateSubtotal() * 0.14;
  const grandTotal = calculateSubtotal() + shippingCost + taxes;

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    // Basic fields validation
    if (!formInputs.firstName) formErrors.firstName = "First Name is required";
    if (!formInputs.lastName) formErrors.lastName = "Last Name is required";
    if (!formInputs.billingAddress)
      formErrors.billingAddress = "Billing Address is required";
    if (!formInputs.billingCity)
      formErrors.billingCity = "Billing City is required";

    // Credit card fields validation if payment method is Credit Card
    if (paymentMethod === "Credit Card") {
      if (!formInputs.cardNumber)
        formErrors.cardNumber = "Card Number is required";
      if (!/^\d{16}$/.test(formInputs.cardNumber))
        formErrors.cardNumber = "Card Number must be 16 digits";
      if (!formInputs.cardName)
        formErrors.cardName = "Name on Card is required";
      if (!formInputs.expiry) formErrors.expiry = "Expiration Date is required";
      if (!/\d{2}\/\d{2}/.test(formInputs.expiry))
        formErrors.expiry = "Expiration Date format should be MM/YY";
      if (!formInputs.cvv) formErrors.cvv = "CVV is required";
      if (!/^\d{3,4}$/.test(formInputs.cvv))
        formErrors.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // return true if no errors
  };
  //prevents the default form submission behavior
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission
      console.log("Form is valid. Proceed with submission...");
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <h2>Your Order</h2>

        <div className="order-items">
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <h6>
                {item.name} - {item.storage}{" "}
              </h6>

              <p>
                {" "}
                {item.quantity} x {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="order-totals">
          <p>Shipping: $ {shippingCost.toLocaleString()} </p>
          <p>Taxes ( 14% ): $ {taxes.toLocaleString()} </p>
          <p>Subtotal: $ {calculateSubtotal().toLocaleString()} </p>
          <h3>Total : $ {grandTotal.toLocaleString()} </h3>
        </div>
      </div>
      <div className="checkout-form">
        <h2>Shipping Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formInputs.firstName}
              onChange={(event) => {
                setFormInput({ ...formInputs, firstName: event.target.value });
              }}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formInputs.lastName}
              onChange={(event) => {
                setFormInput({ ...formInputs, lastName: event.target.value });
              }}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="billingAddress"
              placeholder="Billing Address"
              required
              value={formInputs.billingAddress}
              onChange={(event) => {
                setFormInput({
                  ...formInputs,
                  billingAddress: event.target.value,
                });
              }}
            />
            {errors.billingAddress && (
              <span className="error">{errors.billingAddress}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="billingCity"
              placeholder="Billing City"
              required
              value={formInputs.billingCity}
              onChange={(event) => {
                setFormInput({
                  ...formInputs,
                  billingCity: event.target.value,
                });
              }}
            />
            {errors.billingCity && (
              <span className="error">{errors.billingCity}</span>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="extraNotes"
              placeholder="Extra notes......."
              value={formInputs.extraNotes}
              onChange={(event) => {
                setFormInput({
                  ...formInputs,
                  extraNotes: event.target.value,
                });
              }}
            />
          </div>

          <h2>Select Payment Methods</h2>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === "Credit Card"}
                onChange={handlePaymentMethodChange}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={handlePaymentMethodChange}
              />
              PayPal
            </label>
          </div>

          {paymentMethod === "Credit Card" && (
            <div className="form-group credit-card-info">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required
                value={formInputs.cardNumber}
                onChange={(event) => {
                  setFormInput({
                    ...formInputs,
                    cardNumber: event.target.value,
                  });
                }}
              />
              {errors.cardNumber && (
                <span className="error">{errors.cardNumber}</span>
              )}

              <input
                type="text"
                name="cardName"
                placeholder="Name on Card"
                required
                value={formInputs.cardName}
                onChange={(event) => {
                  setFormInput({
                    ...formInputs,
                    cardName: event.target.value,
                  });
                }}
              />
              {errors.cardName && (
                <span className="error">{errors.cardName}</span>
              )}

              <input
                type="text"
                name="expiry"
                placeholder="Expiration Date (MM/YY)"
                required
                value={formInputs.expiry}
                onChange={(event) => {
                  setFormInput({
                    ...formInputs,
                    expiry: event.target.value,
                  });
                }}
              />
              {errors.expiry && <span className="error">{errors.expiry}</span>}

              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                required
                value={formInputs.cvv}
                onChange={(event) => {
                  setFormInput({
                    ...formInputs,
                    cvv: event.target.value,
                  });
                }}
              />
              {errors.cvv && <span className="error">{errors.cvv}</span>}
            </div>
          )}

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
