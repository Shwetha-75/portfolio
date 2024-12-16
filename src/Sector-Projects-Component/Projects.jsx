import React,{forwardRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./project.css";
export default forwardRef(
    function Projects(props,ref) {
      // const windowWidth = React.useRef(window.innerWidth);
      // const windowHeight = React.useRef(window.innerHeight);
    
      // console.log('width: ', windowWidth.current);
      // console.log('height: ', windowHeight.current);
      // console.log("Hey I'm Projects executing here ")

        return (
          <div 
          className='section--tag'
          ref={ref}>
          
           <div className="container-fluid">

  <div className="row">
  <div className="col-sm-4" id='column--tag'>.col-sm-4</div>
  <div className="col-sm-4" id='column--tag--two'>.col-sm-4</div>
  <div className="col-sm-4" id='column--tag--three'>.col-sm-4</div>
</div>
</div>
          
  

          </div>
        )
      }
)

