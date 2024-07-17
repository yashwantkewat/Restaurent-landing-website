import React, { useState } from 'react';
import './FavouriteFood.css';
import pic from "../Assets/images/centralindian.jpg";
import pic1 from "../Assets/images/chinnese.jpg";
import pic2 from "../Assets/images/french.jpg";
import pic3 from "../Assets/images/item.png";
import pic4 from "../Assets/images/matarpanner.jpg";
import pic5 from "../Assets/images/northindian.jpg";
import pic6 from "../Assets/images/rollrecipi.jpg";
import pic8 from "../Assets/images/sweedish.jpg";
import pic9 from "../Assets/images/steamrool.jpg";
import pic10 from "../Assets/images/Biryani.jpg";
import pic11 from "../Assets/images/Centralindianfood.jpg";
import pic12 from "../Assets/images/Bada Pav.jpg";
import CheckoutForm from './CheckoutForm';

const FavouriteFood = () => {
  const products = [
    { id: 1, name: 'salman in coconut red Thai curry', price: 29.99, img: pic, description: 'get a guide to eating gourmet on a budge and serve thai curry.' },
    { id: 2, name: 'pasta and Noodle dish', price: 49.99, img: pic1, description: 'Dinner is better if you eat Together' },
    { id: 3, name: 'sweet and savery', price: 19.99, img: pic2, description: 'This is presenting sweet and savery from hyderabadi.' },
    { id: 4, name: 'organic salad', price: 49.99, img: pic3, description: 'Eat and offer healthier alternatives to traditional foods.' },
    { id: 5, name: 'Mexican bean salad ', price: 19.99, img: pic4, description: 'This is a plant based diet for beginners' },
    { id: 6, name: 'Moosapet ', price: 49.99, img: pic5, description: 'This is a health of moosapet from New delhi.' },
    { id: 7, name: 'Tacos hormel foods', price: 19.99, img: pic6, description: 'Healthy,quick and easy secret under from bengalore.' },
    { id: 8, name: 'Pancake premix', price: 49.99, img: pic8, description: 'Reggi banana pancake can you first time call' },
    { id: 9, name: 'Raspberry cake', price: 19.99, img: pic9, description: 'creamy and delicious yummy cake' },
    { id: 10, name: 'Special biryani ', price: 19.99, img: pic10, description: 'the hyderabadi biryani special menu for you' },
    { id: 11, name: 'Pink Blueberry cream ', price: 19.99, img: pic11, description: 'creamy and delicious yummy ' },
    { id: 12, name: ' Special Bada Pav ', price: 19.99, img: pic12, description: 'special mumbai bada pav for you ' }
  ];

  const [cart, setCart] = useState([]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCart([...cart, { ...product, quantity }]);
  };

  const incrementItem = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementItem = (productId) => {
    setCart(cart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const itemTotals = cart.reduce((acc, item) => {
    acc[item.id] = item.price * item.quantity;
    return acc;
  }, {});

  const grandTotal = Object.values(itemTotals).reduce((acc, total) => acc + total, 0);

  const toggleCheckoutForm = () => {
    setShowCheckoutForm(!showCheckoutForm);
  };

  return (
    <div className="product-list" id='popular'>
      <h1>Product List</h1>
      <ul className="products">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.img} alt="img not here" className="product-img" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
          </li>
        ))}
      </ul>
      <div className="cart-container">
        <h2>Cart</h2>
        <ul className="cart">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.img} alt="img not available" />
              <div className="item-details">
                <span>{item.name} - ${item.price * item.quantity}</span>
                <button className="animated-button" onClick={() => incrementItem(item.id)}>+</button>
                <button className="animated-button" onClick={() => decrementItem(item.id)}>-</button>
                <button className="animated-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total: $<strong>{grandTotal.toFixed(2)}</strong></p>
        <button onClick={toggleCheckoutForm}>
          {showCheckoutForm ? 'Close Checkout' : 'Checkout'}
        </button>
        {showCheckoutForm && <CheckoutForm />}
      </div>
    </div>
  );
};

export default FavouriteFood;