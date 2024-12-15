import React,{forwardRef} from 'react'
import "./home.css";
import video from "./video1.mp4";
export default forwardRef(

    function Home(props,ref) {

        //  const windowWidth = React.useRef(window.innerWidth);
        //     const windowHeight = React.useRef(window.innerHeight);
          
        //     console.log('width: ', windowWidth.current);
        //     console.log('height: ', windowHeight.current);
        // console.log("Hey I'm Home executing here ")
              
        return (
          <div 
          className='section--tag'
          id="home--tag"
          ref={ref}>
            <div className='home--page--tag'>
            <div className='list--tag--home--page'>
              <ul>
                <li>Shwetha</li>
                <li>Engineering Graduate</li>
              </ul>
              <div className='box--tag'>

              </div>
            </div>

            <div className='line'>
            </div>

              
            <div className='video--tag' >
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
