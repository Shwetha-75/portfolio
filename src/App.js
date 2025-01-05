
import React from"react";
import Portfolio from "./Sector-Portfolio-Component/Portfolio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Sector-Footer-Component/Footer";
import { BiSolidUpArrow } from "react-icons/bi";  

function App() {
 
  const [arrowUp,setArrowUp]=React.useState(false);
   const [isMobile,setMobile]=React.useState(false);
  const handleOnClickScroll=()=>{
    window.scrollTo({
      left:0,
      top:0,
      behavior:'smooth'
    })
  }
  React.useEffect(()=>{
    const handleOnVisibleScroll=()=>{
      setArrowUp(window.pageYOffset>50);
      
    }
   window.addEventListener('scroll',handleOnVisibleScroll);
   return ()=> window.removeEventListener('scroll',handleOnVisibleScroll);
  },[arrowUp]);


  React.useEffect(()=>{
    const handleSize=()=>{
      setMobile(window.innerWidth<=768)
    }
    handleSize();
    window.addEventListener('resize',handleSize);
    return ()=>window.removeEventListener('resize',handleSize)
  },[])

   if (isMobile){
    return (<div className="mobile-restriction">
        <h1>Access Restricted</h1>
        <p>This website is not available on mobile devices. Please use a desktop or larger screen.</p>
      </div>)
   }

  return(
    <>
    
     <Portfolio/>
     {arrowUp && <button 
     className="btn--scroll"
     onClick={handleOnClickScroll}><BiSolidUpArrow /></button>}
     <Footer/>
     
    </>

  )
}

export default App;


