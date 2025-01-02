import React,{forwardRef} from 'react'
import "./about.css";
export default forwardRef(
    function About(props,ref) {

        return (
          <div 
          className='section--tag'
          ref={ref}>
              <div className="about--me--tag">
            <ul>
            <li>
              <p>An</p> <p>enthusiastic</p> <p>automation</p> <p>engineer</p> <p>intern</p> <p>with</p> <p>a</p> <p>passion</p> <p>for</p> <p>creating</p> <p>seamless</p> <p>solutions</p><p>,</p> 
            </li>
              <li>
              <p>combining</p> <p>expertise</p> <p>in</p> <p>frontend</p> <p>development</p> <p>with</p> <p>React</p> <p>and</p> <p>backend</p> <p>proficiency</p> <p>using</p> <p>Flask</p><p>.</p> 
              </li>

            </ul>
            
           </div>
          </div>
        )
      }
)
 
