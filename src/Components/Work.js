import React from "react";
import "../Allcss/work.css"


const Work = () => {
  const workInfoData = [
    {
      image: "https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=DifbHjpQKU2p_-53a5w5kDvL3X-RPkP5eUqrK0Fud78=",
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: "https://media.istockphoto.com/id/1268467641/photo/small-portion-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=ENWZlgToatCWg6i-UoJJL0WXkdt7ZYak-z2f7hihkz4=",
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: "https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.jpg?s=612x612&w=0&k=20&c=XLsAk571Z2kEe_x6TnXWSzsG95-2agp-TcYswQrKHuo=",
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: "https://media.istockphoto.com/id/646332198/photo/palak-paneer.jpg?s=612x612&w=0&k=20&c=N-giDhr5Vsmd--VYQn0G1NkWsmZ3bLJzlES-0-0UEqg=",
      title: "our trending meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: "https://media.istockphoto.com/id/1225582525/photo/traditional-french-toasts-with-blueberries-strawberries-and-powdered-sugar-on-white-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mygrw7WzFG1OahYgdLx-R0_2TFNgYOUlYFJ63Mod9Pg=",
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: "https://media.istockphoto.com/id/2184015700/photo/puff-aloo-patties.webp?a=1&b=1&s=612x612&w=0&k=20&c=4zmnK5aJnZYngM5ogR1vOK8cWg-aSA9aNJNaR9i7mpQ=",
      title: "our trending meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work" >
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          
          We provide the quality food overall taste , and quantity wise as well.
        </p>
      </div>
      <div className="work-section-bottom"  >
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} style={{backgroundColor:"rgb(154, 154, 208)" , color:"white"}} >
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
