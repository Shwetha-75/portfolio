import React,{forwardRef} from 'react';
import "./experience.css";
import AccordinComponent from '../Accordin-Component/AccordinComponent';

export default forwardRef(
    function Experience(props,ref) {

        
        return (
          <div 
          className='section--tag'
          id="experience--tag"
          ref={ref}>
          <div className='w-100  mt-40 h-[500px] flex '>

            <div className='border border-sky-500 shadow hover:shadow-2xl w-[78%] mr-[3%] h-[450px] mt-[25px]'>

            </div>
           <div className='w-[20%] h-[450px] mt-[25px]'>

            <div >
              <h3 className='text-center mt-2 header--tag--skills'>Skills</h3>
              <AccordinComponent/>
              <div>
              </div>
        
            </div>
           </div>

          </div>
          </div>
        )
      }


)

