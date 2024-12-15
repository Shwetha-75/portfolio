import React from 'react'
import { ReferenceContext } from '../App';
import Home from "../Sector-Home-Component/Home";
import About from "../Sector-About-Component/About";
import Experience from "../Sector-Experience-Component/Experience";
import Projects from "../Sector-Projects-Component/Projects";
import Contact from "../Sector-Contact-Component/Contact";
export default function Content() {
    const {home_ref
    ,about_ref
    ,projects_ref
    ,experience_ref
    ,contact_ref}=React.useContext(ReferenceContext);
  return (
    <>
    <Home
          ref={home_ref}
          />
          <About
          ref={about_ref}
          />
          <Projects
          ref={projects_ref}
          />
          <Experience
          ref={experience_ref}
          />
          <Contact
          ref={contact_ref}
          />
    </>
  )
}
