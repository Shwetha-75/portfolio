import React, { useState } from "react";
import "./Contact/card.css";
import DataSet from "./Data_Set/data_set.js";
import Card from ".//CardContact/Card.jsx";
import Contact from "./Contact/Card.jsx";
import NavigationBar from "./NavigationBar/NavigationBar.jsx";
export default function App() {

  const [activeSection, setActiveSection] = useState("about");
  const [fadeOut, setFadeOut] = useState(false);
  const array=DataSet.map((data)=>{
    return(
      <Card
      title={data.title}
      image={data.image}
      description={data.description}
      />
    )
  })

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
          {array}
         </div>
      </section>

      <section
        id="contact"
        className={`section 
          ${activeSection === "contact" ? "active-section" : "hidden-section"} 
          ${fadeOut && activeSection === "contact" ? "fade-out" : ""}`} >
        CONTACT ME
        <Contact/>
      </section>
      </div>
 
  );
}
