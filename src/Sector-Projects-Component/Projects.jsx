import React,{forwardRef} from 'react'
import data from "./data.js";
import "./project.css";

export default forwardRef(
  

    function Projects(props,ref) {
      
    
         const array=data.map((item)=>(
          <div key={item.id} id="card--tag"  className='bg-black ml-10 h-50 text-white rounded-xl border border-lime-500' >
          <div className='h-56 rounded-t-xl bg-black-500 flex justify-center items-center'>
            <img  src={item.image} alt='' className="h-44 w-44 rounded-full"/>
          </div>
          <div className='flex flex-col text-center justify-center items-center g-4 p-4'>
            <p className='text-xl text-lime-500 font-semibold p-3'>{item.name}</p>
            <p>{item.para}</p>
            <button className='bg-lime-900 text-white w-40 text-lg mt-10 px-3 py-3 rounded-xl'>Read more</button>
          </div>
        </div>
         ))

        return (
          <div className='section--tag ' ref={ref}>
          <div className='w-3/4 m-auto'>
          <div className='mt-10' id="project--tag" style={{display:'flex'}}>
      
        {array}
      
        
       
           </div>

           </div>
          
           </div>
         
        
        )
      }
      
)

