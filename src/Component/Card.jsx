import React from 'react'
import "./card.css";
import { SlArrowDown } from "react-icons/sl";
export default function Card(props) {

  return (
    <div  
   >

      <nav id={props.status?"myNav":"hidden"}
           className="div-tag-navigation-bar">
        <ul>
         
        <li
        
        style={{
          color:'white',
          
        }}
        >
            Linked In
          </li>
          <li
        
          style={{
            color:'white',
         

          
          }}
          >
           <div className='google-tag-div--g' style={{display:'inline-flex'}}>G</div> 
           <div className='google-tag-div--o-1' style={{display:'inline-flex'}}>o</div> 
           <div className='google-tag-div--o' style={{display:'inline-flex'}}>o</div> 
           <div className='google-tag-div--g' style={{display:'inline-flex'}}>g</div> 
           <div className='google-tag-div--l' style={{display:'inline-flex'}}>l</div>   
           <div className='google-tag-div--e' style={{display:'inline-flex'}}>e</div>   
           <div className='google-tag-div---' style={{display:'inline-flex'}}>-</div> 
           <div className='google-tag-div--mail' style={{display:'inline-flex'}}>{" "}mail</div> 

          </li>
          <li
          
          style={{
            color:'white',
            
          }}
          >
           Leet Code
          </li>
          <li
          
          style={{
            color:'white',
            
          }}
          >
           Hacker Rank
          </li>

        </ul>
        <div
        style={{
          width:'100%',
        
        }}
           onClick={props.handleOnClickStatus}
        >
        
          
     </div>
        
        </nav>   
    
   
    </div>
  )
}
