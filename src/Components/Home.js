import React, { useState, useEffect } from 'react';
import pic from "../Assets/berriescake.jpg"
import pica from "../Assets/burger.jpg"
import picb from "../Assets/eggparatha.jpg"
import picc from "../Assets/noodles.jpg"
import picd from "../Assets/pencake.jpg"
import pice from "../Assets/cherries.jpg"
import "./Home.css";
import Navbar from './Navbar';

const Home = () => {
  const [sliderItems, setSliderItems] = useState([
    { src: pic, title: 'cherries', type: 'New berries cake' },
    { src: pica, title: 'burger', type: 'New burger chesse' },
    { src: picb, title: 'Egg paratha', type: 'New egg paratha' },
    { src: picc, title: 'Noodles', type: 'New noodles jappanese' },
    { src: picd, title: 'Pencake', type: 'New pencake from spain' },
    { src: pice, title: 'cherries', type: 'New cherries for health' }
  ]);

  const [direction, setDirection] = useState('');

  const moveSlider = (direction) => {
    setDirection(direction);
    if (direction === 'next') {
      setSliderItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    } else {
      setSliderItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
    }
  };

  useEffect(() => {
    const slider = document.querySelector('.slider');
    const handleAnimationEnd = () => {
      setDirection('');
    };
    slider.addEventListener('animationend', handleAnimationEnd, { once: true });
    return () => {
      slider.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [direction]);

  
  return (
    <div id='home'>   
         <Navbar />

      <div className={`slider ${direction}`}>
        
          <div className="list">
            {sliderItems.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.src} alt="" />
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="type">{item.type}</div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="thumbnail">
            {sliderItems.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.src} alt="" />
              </div>
            ))}
          </div>

          <div className="nextPrevArrows">
            <button className="prev" onClick={() => moveSlider('prev')}> &lt; </button>
            <button className="next" onClick={() => moveSlider('next')}> &gt; </button>
          </div>
        </div>
        </div>
  );
};

export default Home;