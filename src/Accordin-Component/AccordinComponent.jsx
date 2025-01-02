import React from 'react'
import { TiPlus,TiMinus } from "react-icons/ti";
import "./accordin.css";

export default function AccordinComponent(props) {
  
     

     const array=props.data.map((item)=>(
      <div  key={item.id}>
      <div className='accordin--tag flex mt-3' onClick={()=>props.onClick(item.id)}>
                    <div className='py-2 w-100 accordin--tag--heading'>{item.title}</div>
                    <div  className='py-2 w-10 text-lime-500'> 
                     {!item.isOpen ? <TiPlus  className='mt-[5px] ' />:< TiMinus className='mt-[5px]' />} 
                    </div>
            </div>
            <div className={item.isOpen?'active mt-5':"content--tag mt-5"}>
              {item.content}
            </div>

      </div>
     ))
   
   
  return (
    <>
    <div className='container w-[96%] mt-[5%] ml-[2%]' >
           
      {array}
    </div>

    
    </>
  )
}
