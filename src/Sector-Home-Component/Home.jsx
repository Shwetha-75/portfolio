import React,{forwardRef} from 'react'
import "./home.css";
import video from "./video1.mp4";
import Slider from "react-slick";

export default forwardRef(
     
    function Home(props,ref) {    
      const array=[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1].map((item,index)=>(
       
          <p key={index} className='text-green-600'>{item}</p>
        
      ));
        

      const settings = {
        dots: true, 
        infinite: true, 
        autoplay: true,
        speed: 300, 
        autoplaySpeed: 300,
        slidesToShow: 10, 
        slidesToScroll: 10,
      
       
        
      };

      let result=[];
      for(let i=0;i<7;i++){
        result.push(
          <Slider key={i} className='overflow-y-hidden slider--tag--binary' {...settings}>
          {array}

         </Slider>
        )
      }

        return (
          <div 
          className='section--tag'
          id="home--tag"
          ref={ref}>
            <div className='home--page--tag'>
            <div className='list--tag--home--page'>
              <ul>
                <li>Shwetha</li>
                <li id='title--tag'>
                  Computer Science & Engineering Graduate</li>
              </ul>
              <div className='box--tag overflow-y-hidden'>
                {result}
            
               
                
              </div>
              <div className='present--title--tag'>
                <p className='present--tag'>Present,</p>
                <p>Automation Engineer - GAT{' '}
                  <span>@ Volvo Group India Pvt Ltd.</span> 
                  </p>
              </div>
            </div>

            <div className='line'>

            </div>

              
            <div className='video--tag'>
            <video autoPlay muted loop fluid='false' width='200px'>
              <source src={video} type="video/mp4" >
              </source>
              </video>
            </div>

            </div>
           
          </div>
        )
      }
      
)
