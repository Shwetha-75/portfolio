import React from 'react'
import Home from "../Sector-Home-Component/Home";
import About from "../Sector-About-Component/About";
import Experience from "../Sector-Experience-Component/Experience";
import Projects from "../Sector-Projects-Component/Projects";
import Contact from "../Sector-Contact-Component/Contact";
import "../Sector-Portfolio-Component/portfolio.css";

export default function Portfolio() {
  
  const home_ref=React.useRef(null);
  const about_ref=React.useRef(null);
  const projects_ref=React.useRef(null);
  const experience_ref=React.useRef(null);
  const contact_ref=React.useRef(null);


  const [activeId,setActiveId]=React.useState('');

  const [homeColor,setHomeColor]=React.useState(false);
  const [aboutColor,setAboutColor]=React.useState(false);


  const handleOnClickScroll=(ref,value)=>{
    if (value==='Home'){
      setHomeColor(true);
      setAboutColor(false);
    }
    else if(value==='About'){
      setHomeColor(false);
      setAboutColor(true);
    }
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
          className={activeId==='Home' || homeColor ?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(home_ref,"Home")}}
          
          >
           Home 
          </li>

          <li 
          className={activeId==='About' || aboutColor?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(about_ref,"About")}}
          >
           About 
          </li>

          <li 
          className={activeId==='Projects'?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(projects_ref,"Projects")}}
          >
           Project  
          </li>

          <li 
          className={activeId==='Experience'?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(experience_ref,"Experience")}}
          >
           Experience 
          </li>
          
          <li 
          className={activeId==='Contact'?'navigationBar--active':''}
          onClick={()=>{handleOnClickScroll(contact_ref,"Contact")}}
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
