import React,{forwardRef} from 'react'

export default forwardRef(
    function Experience(props,ref) {

        //  const windowWidth = React.useRef(window.innerWidth);
        //           const windowHeight = React.useRef(window.innerHeight);
                
        //           console.log('width: ', windowWidth.current);
        //           console.log('height: ', windowHeight.current);
        // console.log("Hey I'm Experience executing here ")
        
        return (
          <div 
          className='section--tag'
          
          ref={ref}>
            <h1>Experience</h1>
           
          </div>
        )
      }


)

