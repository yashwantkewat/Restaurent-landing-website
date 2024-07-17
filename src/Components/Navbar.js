/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from 'react-scroll';
import { useCart } from "../context/CartContext";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "home"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      link: "about"
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      link: "testimonial"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "contact"
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      link: "booking-now"
    },
  ];


  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // crud operation of cart details
  const { updateCartItem, removeCartItem } = useCart();
  

 
  return (

    <nav style={{marginBottom:"50px",backgroundColor:"white"}}>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>


      <div className="navbar-links-container">
        <Link to="home" smooth={true} duration={400}>Home</Link>
        <Link to="about" smooth={true} duration={1400}>About</Link>
        <Link to="testimonial" smooth={true} duration={2800}>Testimonials</Link>
        <Link to="contact" smooth={true} duration={2800}>Contact</Link>

        <Link to="#navbar-cart" smooth={true} duration={400} onClick={toggleCart}>
          <BsCart2 className="navbar-cart-icon" />
          <span className="cart-count">{cart.length}</span>
        </Link>

        {/* cart details show here in this  */}
        {showCart && (
          <div className="cart-details">
            <h3>Cart Details</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div className="item-info">
                <img src= {item.imageurl} alt="img not available" width={"100px"}/>
                 {item.id}  {item.name} - $ {item.price}  {item.rating}
                  </div>
                  <div className="item-actions">
                    <span>Qty: {item.quantity}</span>
                   </div>

                </li>
              ))}
            </ul>
          </div>
        )}

        {/* cart details show  in this endpoint */}

        <Link to="popular" smooth={true} duration={2800}>Favourite Food</Link>


      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link to={item.link} smooth={true} duration={500}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>

  );
};

export default Navbar;
