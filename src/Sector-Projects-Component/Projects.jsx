import React, { useState, forwardRef } from "react";
import data from "./data.js";
import "./project.css";
import Slider from "react-slick";

const Popup = ({ item, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className=" popup-content bg-black text-white rounded-xl p-5">
        
        <div className="text-center">
          
          <h2 className="text-xl text-lime-500 text-left font-semibold">{item.name}</h2>
       

         
            <ul className="text--project mt-4 ">
           {item.solution.map((item,index)=>(
            <li key={index}>{item}</li>
           ))}
            </ul>
         
          <p className="mt-7 text-lime-500 text-left font-semibold text-xl">Technology</p>
          <p className="mt-4 text-left" id="tch">{item.tech_stack}</p>
          <button
          className="popup-close mt-10 text-white px-3 py-1 rounded-full"
          onClick={onClose} >
          Close
        </button>
        </div>
       
      </div>
      
    </div>
  );
};

export default forwardRef(function Projects(props, ref) {
  const [popupItem, setPopupItem] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const handleReadMore = (item) => {
    setPopupItem(item);
  };

  const closePopup = () => {
    setPopupItem(null);
  };

  const cards = data.map((item) => (
    <div key={item.id} id="card--tag" className="bg-black h-50 text-white rounded-xl">
      {/* <div className="h-26 rounded-t-xl bg-black-500 flex justify-center text-justify items-center">
      <img src={item.image} alt="" className="h-24 w-24 rounded-full" /> 
      </div> */}
      <div className="flex flex-col text-center justify-center items-center p-4">
        <p className="text-xl text-lime-500 font-semibold p-3">{item.name}</p>
        <p className="mt-4">{item.para}</p>
        <button
          className="border border-lime-500 text-white w-40 text-lg mt-10 px-3 py-2 rounded-xl btn--project"
          onClick={() => handleReadMore(item)}
        >
          Read more
        </button>
      </div>
    </div>
  ));

  return (
    <div className="section--tag m-auto" id="section--tag--project" ref={ref}>
      <div className="w-3/4 m-auto">
        <div className="mt-10" id="project--tag" style={{ display: "flex" }}>
          <Slider className="overflow-y-hidden" {...settings}>
            {cards}
          </Slider>
        </div>
      </div>
      {popupItem && <Popup item={popupItem} onClose={closePopup} />}
    </div>
  );
});
