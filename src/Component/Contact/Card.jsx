import React from 'react'
import "./card.css";
import Main from '../Form/Main';
export default function Card(props) {
  const [onHoverMail,setOnHoverMail]=React.useState(false);
  const [onHoverLinkedIn,setOnHoverLinkedIn]=React.useState(false);
  const [onHoverLeetCode,setOnHoverLeetCode]=React.useState(false);
  const [onHoverHackerRank,setOnHoverHackerRank]=React.useState(false);

  const handleOnClickLinkedIn=()=>{
    window.open('https://www.linkedin.com/in/shwetha-k-0948ab228/','')
  }

  const handleOnClickHackerRank=()=>{
    window.open('https://www.hackerrank.com/profile/shwetha_675','')
  }

  const handleOnClickLeetCode=()=>{
    window.open('https://leetcode.com/SHWETHA_K/','')
  }

  const handleOnClickGmail=()=>{
    window.open('mailto:shwethak412@gmail.com','')
  }
  return (
    < >
    
      <nav 
      id={props.status?"myNav":"hidden"}
           className="div-tag-navigation-bar">
        <ul>
       <li><Main/></li>
        <li 
        
        onClick={handleOnClickLinkedIn}
        className={onHoverLinkedIn?'linkedIn-tag':''}
        onMouseOver={()=>setOnHoverLinkedIn(true)} 
        onMouseLeave={()=>setOnHoverLinkedIn(false)}>
            Linked In
          </li>
          <li  onClick={handleOnClickGmail}>


          
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
          onClick={handleOnClickLeetCode}
          className={onHoverLeetCode?'leetcode-tag':''}
          onMouseOver={()=>setOnHoverLeetCode(true)}
          onMouseLeave={()=>setOnHoverLeetCode(false)}
          >
           Leet Code
          </li>
          <li
          onClick={handleOnClickHackerRank}
          className={onHoverHackerRank?'hackerRank-tag':''}
          onMouseOver={()=>setOnHoverHackerRank(true)}
          onMouseLeave={()=>setOnHoverHackerRank(false)} >
           Hacker Rank
          </li>
        </ul>
        <div onClick={props.handleOnClickStatus}>
        
          
       </div>
        
        </nav>   
    
   
    </>
  )
}
