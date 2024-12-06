import React, { useState } from 'react';
import '../Allcss/FavouriteFood.css';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const FavouriteFood = () => {
  const products = [
    { id: 1, name: 'salman in coconut red Thai curry', price: 29.99, img: "https://media.istockphoto.com/id/1003411832/photo/creamy-shrimp-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=I1KG_VFfs3oE8w-7MqgQYpjr-tbYoHLyM5NwbbmWf7U=", description: 'get a guide to eating gourmet on a budge and serve thai curry.' },
    { id: 2, name: 'pasta and Noodle dish', price: 49.99, img: "https://media.istockphoto.com/id/1501531610/photo/delicious-plate-of-italian-food-pink-sauce-pasta-closeup-on-the-bowl-horizontal-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=9BxkRzd_GAYJn8h7ouxjEjDMfJn2WHqGQnwzyynInw4=", description: 'Dinner is better if you eat Together' },
    { id: 3, name: 'sweet and savery', price: 19.99, img: "https://media.istockphoto.com/id/174650273/photo/thai-curry-with-fish-vegetables-and-rice-in-asian-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=JQMbC5NI-NHmurT5G9zJAyIrcdsQpsSwOfxY1QFskKk=", description: 'This is presenting sweet and savery from hyderabadi.' },
    { id: 4, name: 'organic salad', price: 49.99, img: "https://media.istockphoto.com/id/1425572827/photo/bean-sprouts-salad-on-rustic-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=MnrlHM5lEir09p0Hku4F6Llyd2iMsiSjl1lQjvyvz7w=", description: 'Eat and offer healthier alternatives to traditional foods.' },
    { id: 5, name: 'Mexican bean salad ', price: 19.99, img:"https://media.istockphoto.com/id/175197961/photo/salad-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=mZo1VLF5DlFC03VyfsOlX7CWl7aZOHfeb6zCJHLTiRo=", description: 'This is a plant based diet for beginners' },
    { id: 6, name: 'Moosapet ', price: 49.99, img: "https://media.istockphoto.com/id/1355188908/photo/sausages-with-green-peas-on-a-colored-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=9BAOI-VswZtFzBkBv-XHULQ7IWhRzkH5H3aQj5Ejfns=", description: 'This is a health of moosapet from New delhi.' },
    { id: 7, name: 'Tacos hormel foods', price: 19.99, img:"https://media.istockphoto.com/id/1270124269/photo/american-pancakes-with-fruits-on-table-close-up.jpg?s=612x612&w=0&k=20&c=EkG4PXN46nFrhIa2nrLUWCPsWbJhwocGQYTRv0p0xJk=", description: 'Healthy,quick and easy secret under from bengalore.' },
    { id: 8, name: 'Pancake premix', price: 49.99, img: "https://media.istockphoto.com/id/1137114428/photo/homemade-colorful-pancakes.jpg?s=612x612&w=0&k=20&c=eNGZ6aFuwgFc7IjctC17Ogbs9Rq3hPTEK2B9RHZSpv4=", description: 'Reggi banana pancake can you first time call' },
    { id: 9, name: 'Raspberry cake', price: 19.99, img: "https://media.istockphoto.com/id/515200692/photo/delicious-breakfast-in-bed.webp?a=1&b=1&s=612x612&w=0&k=20&c=v8tn6wGNN_atURt8QXVHLxMlbYkZ-dg21TC-N-XPPxY=", description: 'creamy and delicious yummy cake' },
    { id: 10, name: 'Special biryani ', price: 19.99, img: "https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.jpg?s=612x612&w=0&k=20&c=tBMCVZt7CW0KRBqkRg-MDySzxMiQqzUamGU9IHnH13Q=", description: 'the hyderabadi biryani special menu for you' },
    { id: 11, name: 'Pink Blueberry cream ', price: 19.99, img: "https://media.istockphoto.com/id/2156587362/photo/blueberry-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=-j126mMd4EfXlCP-1LnL9BEpdg3899_P0ihgfg_1isE=", description: 'creamy and delicious yummy ' },
    { id: 12, name: ' Special Bada Pav ', price: 19.99, img: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.webp?a=1&b=1&s=612x612&w=0&k=20&c=nFSSNL37Rtl6brmMOMiBfaZy0itNgBEO2dnK5I1FlGU=", description: 'special mumbai bada pav for you ' }
  ];
  const { cart, addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);

    // Sweetalert popup
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="product-list" id='popular'>
      <h1 style={{textAlign:"center",fontSize:'3rem'}} >Product List</h1>
      <ul className="products">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.img} alt="img not here" className="product-img" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart">
              Add to Cart
            </button>

          </li>
        ))}
      </ul>
          
      </div>
  );
};

export default FavouriteFood;