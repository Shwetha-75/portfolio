import React from 'react'
import Home from "../Sector-Home-Component/Home";
import About from "../Sector-About-Component/About";
import Experience from "../Sector-Experience-Component/Experience";
import Projects from "../Sector-Projects-Component/Projects";
import Contact from "../Sector-Contact-Component/Contact";
import "../Sector-Portfolio-Component/portfolio.css";

export default function Portfolio() {

  const homeRef=React.useRef(null);
  const aboutRef=React.useRef(null);
  const projectsRef=React.useRef(null);
  const experienceRef=React.useRef(null);
  const contactRef=React.useRef(null);


  const [activeId,setActiveId]=React.useState('');

  

  const handleOnClickScroll=(ref,value)=>{
    
     ref.current.scrollIntoView({
         behavior:'smooth',
         transition:'1s'
     })
    setActiveId(value)
  }
  
  React.useEffect(()=>{
    const handleOnScroll=()=>{
        
    }
    window.addEventListener('scroll',handleOnScroll)
    return ()=>{
      window.removeEventListener('scroll',handleOnScroll)
    }
  },[activeId])
  return (
    <>
      <nav
      className='navigationBar--tag'
    
      >
        <ul >
          <li 
          className={activeId==='Home'?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(homeRef,"Home")}}
          >
           Home 
          </li>

          <li 
          className={activeId==='About' ?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(aboutRef,"About")}}
          >
           About 
          </li>

          <li 
          className={activeId==='Projects'?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(projectsRef,"Projects")}}
          >
           Project  
          </li>

          <li 
          className={activeId==='Experience'?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(experienceRef,"Experience")}}
          >
           Experience 
          </li>
          
          <li 
          className={activeId==='Contact'?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(contactRef,"Contact")}}
          >
           Contact 
          </li>
        </ul>
      </nav>

      <Home
      ref={homeRef}
      />
      <About
      ref={aboutRef}
      />
      <Projects
      ref={projectsRef}
      />
      <Experience
      ref={experienceRef}
      />
      <Contact
      ref={contactRef}
      />
    </>
  )
}
