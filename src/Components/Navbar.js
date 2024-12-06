import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-scroll';
import { useCart } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { AiTwotoneDelete } from "react-icons/ai";

const Navbar = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleCheckoutForm = () => setShowCheckoutForm(!showCheckoutForm);

  return (
    <nav style={{ backgroundColor: "white" }}>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navbar-links-container">
        <Link to="home" smooth={true} duration={400}>Home</Link>
        <Link to="about" smooth={true} duration={1400}>About</Link>
        <Link to="testimonial" smooth={true} duration={2800}>Testimonials</Link>
        <Link to="contact" smooth={true} duration={2800}>Contact</Link>

        <div className="navbar-cart" onClick={() => setIsCartOpen(!isCartOpen)}>
          <BsCart2 className="navbar-cart-icon" />
          <span className="cart-count">{cart.length}</span>
        </div>

        {/* Cart Details Dropdown */}
        {isCartOpen && (
          <div className="cart-dropdown">
            <h3>Your Cart</h3>
            {cart.length > 0 ? (
              <>
                <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      <img src={item.img} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                        <div>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>-</button>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          <button onClick={() => removeFromCart(item.id)}><AiTwotoneDelete /></button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Cart Total and Checkout */}
                <div className="cart-total">
                  <h4>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
                  <button onClick={toggleCheckoutForm}>
                    {showCheckoutForm ? 'Close Checkout' : 'BUY NOW'}
                  </button>
                  {showCheckoutForm && <CheckoutForm />}
                </div>
              </>
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>
        )}
        <Link to="popular" smooth={true} duration={2800}>Favourite Food</Link>
      </div>

      {/* Hamburger icon for small devices */}
      <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "X" : "="}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="home" smooth={true} duration={400}>Home</Link>
          <Link to="about" smooth={true} duration={1400}>About</Link>
          <Link to="testimonial" smooth={true} duration={2800}>Testimonials</Link>
          <Link to="contact" smooth={true} duration={2800}>Contact</Link>
          <Link to="popular" smooth={true} duration={2800}>Favourite Food</Link>
          
          {/* Cart dropdown inside mobile menu */}
          <div className="navbar-cart" onClick={() => setIsCartOpen(!isCartOpen)}>
            <BsCart2 className="navbar-cart-icon" />
            <span className="cart-count">{cart.length}</span>
          </div>

          {isCartOpen && (
            <div className="cart-dropdown">
              <h3>Your Cart</h3>
              {cart.length > 0 ? (
                <>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <div>
                          <h4>{item.name}</h4>
                          <p>${item.price}</p>
                          <div>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>-</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="cart-total">
                    <h4>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
                    <button onClick={toggleCheckoutForm}>
                      {showCheckoutForm ? 'Close Checkout' : 'BUY NOW'}
                    </button>
                    {showCheckoutForm && <CheckoutForm />}
                  </div>
                </>
              ) : (
                <p>Your cart is empty!</p>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
