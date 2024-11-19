# Project Features

## Header and Navigation

Create a user-friendly header that includes a navigation menu, allowing users to easily access different sections of the website. This header should be visually appealing and consistent across all pages.

## Homepage

Develop a homepage that adapts to different screen sizes and devices. The homepage will include dynamic sections, such as a categories section, which showcases various product categories and allows users to explore easily.

## Key Pages

Build essential pages that provide critical information and functionalities, such as product listings, contact information, and FAQs. These pages should be designed for easy navigation and accessibility.

## Product Pages

Develop comprehensive product pages that provide users with detailed information about each product, including technical specifications, images, and pricing. This will help users make informed purchasing decisions.

## User Authentication

Create a system for user registration, login, and profile management. This feature will allow users to create accounts, log in to access personalized features, and manage their profile information.

## Responsive Design

Ensure that all components of the application are responsive and look good on all devices, including desktops, tablets, and smartphones. This involves using flexible layouts and styles that adjust based on screen size.

# Shopping Cart Feature

This feature allows users to add products to their cart, modify quantities, and proceed through a checkout process. The application features localStorage persistence, order calculation, and form validation on the checkout page.

## Features

- _Add to Cart_: Users can add products to their cart, including selecting specific configurations (e.g., different storage options).
- _Modify Cart_: Increase or decrease the quantity of products or remove items from the cart.
- _Order Calculation_: Automatically calculates subtotal, taxes, shipping, and total cost.
- _Persistent Data_: Cart data is saved in localStorage so it persists even when the page is refreshed.
- _Checkout_: Users can input their shipping details and payment method to place an order.
- _Form Validation_: Validates required form fields such as shipping and payment details before placing an order.

## Key Components

### 1. CartContext.js

This file manages the cart functionality using React's useContext and useState hooks to provide global state for the cart. It includes functions to manage cart items and persists cart data to localStorage.

#### Key Functions

- _addToCart(product)_: Adds a product to the cart or increases its quantity if it’s already present.
- _removeFromCart(id, storage)_: Removes a product from the cart based on its ID and storage option.
- _updateQuantity(id, storage, quantity)_: Updates the quantity of a product already in the cart.
- _calculateSubtotal()_: Calculates the subtotal of all items in the cart.

### 2. CartPage.js

This component displays the shopping cart interface. Users can view products, modify quantities, or remove products directly from the cart. It also shows a summary of the cart's totals including taxes, shipping, and subtotal.

#### Features

- _Product Management_: View cart items, modify quantities, or remove products.
- _Order Summary_: Displays the subtotal, taxes, shipping cost, and total price.
- _Interactive UI_: Reactively updates the cart state based on user actions (e.g., increasing or decreasing quantity).

## Order Calculation

- _Subtotal_: Calculated as the sum of the prices of all items in the cart.
- _Taxes_: Set at 14% of the subtotal.
- _Shipping_: A fixed shipping cost of $20.
- _Grand Total_: The final total includes the subtotal, taxes, and shipping.

---

## Checkout Page

### Features

- _Form Input Handling_: Users input their shipping and billing details.
- _Payment Method Selection_: Supports multiple payment methods such as Credit Card and PayPal.
- _Credit Card Validation_: If "Credit Card" is selected, the form validates fields like card number, expiration date (MM/YY), and CVV.
- _Order Summary_: Displays a summary of the items in the cart, including taxes, shipping costs, and the grand total.
- _Form Validation_: Validates that all required fields are filled out before submission.

### How It Works

1. _Form Inputs_: Users fill in the checkout form with personal and payment information.
2. _Payment Method_: Users select either "Credit Card" or "PayPal" as their payment method.
3. _Order Summary_: Displays a breakdown of the order, including items, shipping, and taxes.
4. _Form Validation_: The form ensures all fields are correctly filled out before submitting. If validation passes, the order is placed. If not, errors are displayed to the user.

## Order Calculation on Checkout

- _Subtotal_: The total price of items in the cart.
- _Taxes_: 14% of the subtotal.
- _Shipping_: Fixed at $20.
- _Grand Total_: Sum of subtotal, taxes, and shipping.
