import React from 'react'
import "./card.css";
import { SlArrowDown } from "react-icons/sl";
export default function Card(props) {
  const [onHoverMail,setOnHoverMail]=React.useState(false);
  const [onHoverLinkedIn,setOnHoverLinkedIn]=React.useState(false);
  const [onHoverLeetCode,setOnHoverLeetCode]=React.useState(false);
  const [onHoverHackerRank,setOnHoverHackerRank]=React.useState(false);

  
  return (
    <div >

      <nav 
      id={props.status?"myNav":"hidden"}
           className="div-tag-navigation-bar">
        <ul>
         
        <li 
        className={onHoverLinkedIn?'linkedIn-tag':''}
        onMouseOver={()=>setOnHoverLinkedIn(true)} 
        onMouseLeave={()=>setOnHoverLinkedIn(false)}>
            Linked In
          </li>
          <li>
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div--g':""} style={{display:'inline-flex'}}>G</div> 
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div--o-1':""} style={{display:'inline-flex'}}>o</div> 
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div--o':""} style={{display:'inline-flex'}}>o</div> 
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div--g':""} style={{display:'inline-flex'}}>g</div> 
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div--l':""} style={{display:'inline-flex'}}>l</div>   
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div--e':""} style={{display:'inline-flex'}}>e</div>   
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div---':""} style={{display:'inline-flex'}}>-</div> 
           <div onMouseOver={()=>setOnHoverMail(true)} onMouseLeave={()=>setOnHoverMail(false)} className={onHoverMail?'google-tag-div--mail':''} style={{display:'inline-flex'}}>{" "}mail</div> 

          </li>
          <li
          className={onHoverLeetCode?'leetcode-tag':''}
          onMouseOver={()=>setOnHoverLeetCode(true)}
          onMouseLeave={()=>setOnHoverLeetCode(false)}
          >
           Leet Code
          </li>
          <li
          className={onHoverHackerRank?'hackerRank-tag':''}
          onMouseOver={()=>setOnHoverHackerRank(true)}
          onMouseLeave={()=>setOnHoverHackerRank(false)} >
           Hacker Rank
          </li>

        </ul>
        <div onClick={props.handleOnClickStatus}>
        
          
       </div>
        
        </nav>   
    
   
    </div>
  )
}
