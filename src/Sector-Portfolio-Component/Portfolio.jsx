import React from 'react'
import About from "../Sector-About-Component/About";
import Projects from '../Sector-Projects-Component/Projects';
import Contact from "../Sector-Contact-Component/Contact";
import Home from '../Sector-Home-Component/Home';
import Experience from '../Sector-Experience-Component/Experience';
export default function Portfolio() {
    const home_ref=React.useRef(null);
    const about_ref=React.useRef(null);
    const project_ref=React.useRef(null);
    const experience_ref=React.useRef(null);
    const contact_ref=React.useRef(null);

    const handleOnClickHome=()=>{
        home_ref.current.scrollIntoView({
            'behavior':'smooth'
        })
    }
    const handleOnClickAbout=()=>{
        about_ref.current.scrollIntoView({
            'behavior':'smooth'
        })
    }
    const handleOnClickProject=()=>{
        project_ref.current.scrollIntoView({
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

       <nav style={{position:'fixed',backgroundColor:'red'
       }}>
        <ul>
            <li 
            onClick={handleOnClickHome}>
                Home
            </li>
            <li 
            onClick={handleOnClickAbout}>
                About
            </li>
            <li 
            onClick={handleOnClickProject}>
                Project
            </li>
            <li 
            onClick={handleOnClickExperience}>
                Experience
            </li>
            <li 
            onClick={handleOnClickContact}>
                Contact
            </li>

        </ul>
       </nav>
         <Home 
         home_ref={home_ref}
         />
         <About 
         about_ref={about_ref}
         />
         <Projects 
         project_ref={project_ref}
         />
         <Experience 
         experience_ref={experience_ref}
         />
         <Contact 
         contact_ref={contact_ref}
         />
    </div>
  )
}


  