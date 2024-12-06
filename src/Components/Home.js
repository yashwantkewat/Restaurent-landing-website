import React, { useState, useEffect } from 'react';
import "../Allcss/Home.css";

const Home = () => {
  const [sliderItems, setSliderItems] = useState([
    { src: "https://media.istockphoto.com/id/1164955042/photo/omelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=SzzioSrXMFALYR8LsyEowTsT1LODn924kL-XMXfYnfg=", title: 'Egg paratha', type: 'New egg paratha' },
    { src: "https://media.istockphoto.com/id/1292637257/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=0xbbDCOhb_rLXHueLmoc0zBzmE8FR7xrDyvjflUlEQ8=", title: 'Noodles', type: 'New noodles jappanese' },
    { src: "https://media.istockphoto.com/id/1137114428/photo/homemade-colorful-pancakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=mWc5P2rnAHWrYzp2PfN2UVJcTTsbR3A8_KtT1qoKBhE=", title: 'Pencake', type: 'New pencake from spain' },
    { src: "https://media.istockphoto.com/id/1250680319/photo/red-and-fresh-cherries-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=y7E8k3XxluK6cIbWatZf_GyFV0X1Bp3BjKVHyEBLjUA=", title: 'cherries', type: 'New cherries for health' }
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
    <> 

    <div id='home'>   

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
        </>
  );
};

export default Home;