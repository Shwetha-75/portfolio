import React,{forwardRef} from 'react'

export default forwardRef(
    function About(props,ref) {

        //  const windowWidth = React.useRef(window.innerWidth);
        //           const windowHeight = React.useRef(window.innerHeight);
                
        //           console.log('width: ', windowWidth.current);
        //           console.log('height: ', windowHeight.current);
                  // console.log("Hey I'm About executing here ")
        return (
          <div 
          className='section--tag'
          ref={ref}>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
              <h1>About</h1>
          </div>
        )
      }
)
 
