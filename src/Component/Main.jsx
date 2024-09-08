import React, { useState } from "react";
import { Link} from "react-scroll";
import "./card.css"

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
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="about"
                onClick={() => handleSetActive("about")}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="projects"
                onClick={() => handleSetActive("projects")}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="blog"
                onClick={() => handleSetActive("blog")}>
                BLOG
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="contact"
                onClick={() => handleSetActive("contact")}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>

   
      <section

        id="about"
        className={`section 
          ${activeSection === "about" ?
             "active-section" : "hidden-section"} 
             ${fadeOut && activeSection === "about" ? "fade-out" : ""}`}
      >
        ABOUT
      </section>

      <section
        id="projects"
        className={`section ${activeSection === 
          "projects" ? 
          "active-section" : 
          "hidden-section"} ${fadeOut && 
            activeSection === "projects" ? "fade-out" : ""}`}
      >
        PROJECTS
      </section>

      <section
        id="blog"
        className={`section 
          ${activeSection === "blog" ? "active-section" : "hidden-section"} 
          ${fadeOut && activeSection === "blog" ? "fade-out" : ""}`}
      >
        BLOG
      </section>

      <section
        id="contact"
        className={`section 
          ${activeSection === "contact" ? "active-section" : "hidden-section"} 
          ${fadeOut && activeSection === "contact" ? "fade-out" : ""}`}
      >
        CONTACT ME
    
      <nav 
      id={status?"myNav":"hidden"}
           className="div-tag-navigation-bar">
        <ul
        style={{
          listStyle:'none'
        }}
        >
         
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
          <li
          onClick={handleOnClickGmail}
          >


          
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
