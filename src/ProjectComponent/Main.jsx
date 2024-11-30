import React, { useState } from "react";
import "./Contact/card.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar.jsx";
export default function App() {

  const [activeSection, setActiveSection] = useState("home");
  const [fadeOut, setFadeOut] = useState(false);

  // const array=DataSet.map((data)=>{
  //   return(
  //     <Card
  //     title={data.title}
  //     image={data.image}
  //     description={data.description}
  //     />
  //   )
  // })

  const handleSetActive = (to) => {
      setFadeOut(true); 
      // Start fading out current section
      // Delay switching section until the fade out is done
      setTimeout(() => {
      setActiveSection(to);
      setFadeOut(false); 
      // Remove fade effect for the new section
    }, 600); 
  };

  return (
    <div className="App">
     
     <NavigationBar
      handleSetActive={handleSetActive}/>

     <div className="content-wrapper">
      
      <section
        id="home"
        style={{color:'white'}}
        className={`section 
        ${activeSection === "home" ?
        "active-section" : "hidden-section"} 
        ${fadeOut && activeSection === "home" ? "fade-out" : ""}`}>
       <Link to='/'>Project Landing page</Link>
      </section>

      <section
        id="about"
        style={{color:'white'}}
        className={`section 
        ${activeSection === "about" ?
        "active-section" : "hidden-section"} 
        ${fadeOut && activeSection === "about" ? "fade-out" : ""}`}>
                 <Link to='/about'>Shwetha K Engineering Graduate</Link>

      </section>

      <section
        id="projects"
        style={{color:'white'}}
        className={`section 
        ${activeSection ==="projects" ? 
        "active-section" :"hidden-section"} 
        ${fadeOut && activeSection === "projects" ? "fade-out" : ""}`}>
          <Link to='/project'> Projects</Link>
       
      </section>

      <section
        id="experience"
        style={{color:'white'}}
        className={`section 
        ${activeSection === "experience" ? 
        "active-section" : "hidden-section"} 
        ${fadeOut && activeSection === "experience" ? "fade-out" : ""}`}>
                        <Link to='/experience'>Intern</Link>

      </section>

      <section
        id="contact"
        style={{color:'white'}}
        className={`section 
        ${activeSection === "contact" ? 
        "active-section" : "hidden-section"} 
        ${fadeOut && activeSection === "contact" ? "fade-out" : ""}`} >
                  <Link to='/contact'> CONTACT ME</Link>

      </section>

      </div>
      </div>
 
  );
}
