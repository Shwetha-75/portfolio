import React from 'react'
import { TiPlus,TiMinus } from "react-icons/ti";

import "./accordin.css";

export default function AccordinComponent(props) {
    const [arrowUp,setArowUp]=React.useState(true);
   

    const handleOnClick=()=>{
          setArowUp(prev=>!prev)
    }
   
  return (
    <>
    <div className='container w-[96%] mt-[5%] ml-[2%] '>
           <div className='accordin--tag flex '>
                    <div className='py-2 w-100 '>React</div>
                    <div onClick={handleOnClick} className='py-2 w-10'> 
                     {arrowUp ? <TiPlus  className='mt-[5px]' />:< TiMinus className='mt-[5px]' />} 
                    </div>
            </div>
            <div className={!arrowUp?'active':"content--tag"}>

               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
               Content
            </div>

      
    </div>

    <div className='container w-[96%] mt-[5%] ml-[2%] '>
           <div className='accordin--tag flex '>
                    <div className='py-2 w-100 '>React</div>
                    <div     className='py-2 w-10'> 
                     {arrowUp ? <TiPlus  className='mt-[5px]' />:< TiMinus className='mt-[5px]' />} 
                    </div>
            </div>
            

      
    </div>
    </>
  )
}
