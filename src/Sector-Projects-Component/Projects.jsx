import React,{forwardRef} from 'react'
import Data from "./data";
import Slider from "react-slick";
import "./project.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default forwardRef(
  

    function Projects(props,ref) {
      
      const settings = {
        dots: true,
        lazyLoad: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:1500,
        autoplaySpeed: 1500,
        cssEase: "linear",
        
      };

      const array=Data.map((item)=>(
        <div key={item.id} id=" "  className='bg-black h-[450px] text-white rounded-xl border border-sky-500'>
          <div className='h-56 rounded-t-xl bg-black-500 flex justify-center items-center'>
            <img  src={item.image} alt='' className="h-44 w-44 rounded-full"/>
          </div>
          <div className='flex flex-col justify-center items-center g-4 p-4'>
            <p className='text-xl text-sky-500 font-semibold p-3'>{item.name}</p>
            <p>{item.para}</p>
            <button className='bg-sky-900 text-white text-lg mt-10 px-6 py-3 rounded-xl'>Read more</button>
          </div>
        </div>
      ))
        return (
          <div className='w-4/5 m-auto' ref={ref}>
         
          <div className='mt-20' >
      <Slider {...settings}>
    {array}
    </Slider>
    </div>
    </div>
         
        
        )
      }
      
)

