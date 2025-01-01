import React,{forwardRef} from 'react'
import data from "./data.js";
import "./project.css";
import Slider from "react-slick";
export default forwardRef(
  

    function Projects(props,ref) {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
    
         const array=data.map((item)=>(
          <div key={item.id} id="card--tag"  className='bg-black  h-50 text-white rounded-xl ' >
          <div className='h-26 rounded-t-xl bg-black-500 flex justify-center text-justify items-center'>
            <img  src={item.image} alt='' className="h-24 w-24 rounded-full"/>
          </div>
          <div className='flex flex-col text-center justify-center items-center g-4 p-4'>
            <p className='text-xl text-lime-500 font-semibold p-3'>{item.name}</p>
            <p>{item.para}</p>
            <button className='border border-lime-500 text-white w-40 text-lg mt-10 px-3 py-2 rounded-xl btn--project'>Read more</button>
          </div>
        </div>
         ))

        return (
          <div className='section--tag m-auto ' id='section--tag--project' ref={ref}>
          <div className='w-3/4 m-auto'>
          <div className='mt-10' id="project--tag" style={{display:'flex'}}>
          <Slider className='overflow-y-hidden' {...settings}>
            {array}
            </Slider>
           </div>
           </div> 
           </div>
         
        
        )
      }
      
)

