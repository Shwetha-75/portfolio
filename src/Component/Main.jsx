import React, { useState } from "react";
import "./card.css";
// import Contact from "./ContactCards/Main";
import Card from ".//CardContact/Card.jsx";
import Main from "./Form/Main.jsx";
import NavigationBar from "./NavigationBar/NavigationBar.jsx";
export default function App() {

const[status,setStatus]=React.useState(false);
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
 const handleOnClickStatus=()=>{
   setStatus(!status);
 }

  const [activeSection, setActiveSection] = useState("about");
  const [fadeOut, setFadeOut] = useState(false);

  const handleSetActive = (to) => {
    setFadeOut(true); // Start fading out current section

    // Delay switching section until the fade out is done
    setTimeout(() => {
      setActiveSection(to);
      setFadeOut(false); // Remove fade effect for the new section
    }, 600); 
  };

  return (
    <div className="App">
     
     <NavigationBar
      handleSetActive={handleSetActive}
     />
   

   
      <section
        id="about"
        style={{color:'white'}}
        className={`section 
          ${activeSection === "about" ?
             "active-section" : "hidden-section"} 
             ${fadeOut && activeSection === "about" ? "fade-out" : ""}`}>
        Shwetha K 
        Engineering Graduate
      </section>

      <section
        id="projects"
        className={`section ${activeSection === 
          "projects" ? 
          "active-section" : 
          "hidden-section"} ${fadeOut && 
          activeSection === "projects" ? "fade-out" : ""}`}>
          Projects
      </section>

      <section
        id="blog"
        className={`section 
          ${activeSection === "blog" ? "active-section" : "hidden-section"} 
          ${fadeOut && activeSection === "blog" ? "fade-out" : ""}`}>
         <div className="app">
      <Card
        title="Beautiful Landscape"
        image="https://source.unsplash.com/random/300x200?nature"
        description="A beautiful view of a scenic landscape."
      />
      <Card
        title="City at Night"
        image="https://source.unsplash.com/random/300x200?city"
        description="A stunning view of the city skyline at night."
      />
      <Card
        title="Forest Path"
        image="https://source.unsplash.com/random/300x200?forest"
        description="A peaceful path through the forest."
      />
      {/* Add more cards as needed */}
    </div>

      </section>

      <section
        id="contact"
        className={`section 
          ${activeSection === "contact" ? "active-section" : "hidden-section"} 
          ${fadeOut && activeSection === "contact" ? "fade-out" : ""}`} >
        CONTACT ME
    
      <nav 
      id={status?"myNav":"hidden"}
           className="div-tag-navigation-bar">
        <ul
        style={{
          listStyle:'none'
        }}
        >
         <li><Main/></li>
        <li 
        style={{
          marginTop:'2%'
        }}
        onClick={handleOnClickLinkedIn}
        className={onHoverLinkedIn?'linkedIn-tag':''}
        onMouseOver={()=>setOnHoverLinkedIn(true)} 
        onMouseLeave={()=>setOnHoverLinkedIn(false)}>
            Linked In
          </li>
          <li onClick={handleOnClickGmail}>

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
        <div onClick={handleOnClickStatus}>
        
          
       </div>
        
        </nav>   
      </section>
      </div>
 
  );
}
