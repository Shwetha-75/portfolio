import React from 'react'
import Home from "../Sector-Home-Component/Home";
import About from "../Sector-About-Component/About";
import Experience from "../Sector-Experience-Component/Experience";
import Projects from "../Sector-Projects-Component/Projects";
import Contact from "../Sector-Contact-Component/Contact";


export default function Portfolio() {
  const home_ref=React.useRef(null);
  const about_ref=React.useRef(null);
  const projects_ref=React.useRef(null);
  const experience_ref=React.useRef(null);
  const contact_ref=React.useRef(null);
  

  const handleOnClickHome=()=>{
         home_ref.current.scrollIntoView({
          behavior:'smooth'
         })
  }


  const handleOnClickAbout=()=>{
    about_ref.current.scrollIntoView({
      behavior:'smooth'
    })
  };

  const handleOnClickProject=()=>{
    projects_ref.current.scrollIntoView({
      behavior:'smooth'
    })
  }

  const handleOnClickExperience=()=>{
    experience_ref.current.scrollIntoView({
      behavior:'smooth'
    })
  }
  const handleOnClickContact=()=>{
    contact_ref.current.scrollIntoView({
      behavior:'smooth'
    })
  }
  return (
    <div>
      <nav
      style={{
        position:'fixed',
        backgroundColor:'red',
        width:'100%'
      }}
      >
        <ul>
          <li 
          onClick={handleOnClickHome}
          >
           Home 
          </li>

          <li 
          onClick={handleOnClickAbout}
          >
           About 
          </li>

          <li 
          onClick={handleOnClickProject}
          >
           Project 
          </li>

          <li 
          onClick={handleOnClickExperience}
          >
           Experience 
          </li>
          
          <li 
          onClick={handleOnClickContact}
          >
           Contact 
          </li>
        </ul>
      </nav>

      <Home
      ref={home_ref}
      />
      <About
      ref={about_ref}
      />
      <Experience
      ref={experience_ref}
      />
      <Projects
      ref={projects_ref}
      />
      <Contact
      ref={contact_ref}
      />
    </div>
  )
}
