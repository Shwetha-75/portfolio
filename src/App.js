import React from "react";
// import Main from "./Main";
// import Home from "./Component/Main";
// import About from "./AboutComponent/Main";
// import Project from "./ProjectComponent/Main";
// import Contact from "./ContactComponent/Main";
// import Experience from "./ExperienceComponent/Main";
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Portfolio from "./Sector-Portfolio-Component/Portfolio";
function App() {

  // React.useEffect(() => {
  //   // Detect if the device supports hover
  //   const supportsHover = window.matchMedia('(hover: hover)').matches;

  //   if (!supportsHover) {
  //     // Remove the hover class if hover is not supported
  //     document.body.classList.add('no-hover');
  //   }
  // }, []);
  // return (
  //   <div className="Main">
  //    <Router>
  //        <Main/>
  //           <Routes>
  //           <Route exact path='/'element={<Home/>}>
  //           </Route>
  //           <Route path='/about' element={<About/>}>
  //           </Route>
  //           <Route path='/project' element={<Project/>}>
  //           </Route>
  //           <Route path='/experience' element={<Experience/>}>
  //           </Route>
  //           <Route path='/contact' element={<Contact/>}>
  //           </Route>
  //           </Routes>
  //       </Router>
  //   </div>
  // );

  return(
    <>
    <Portfolio/>
    </>

  )
}

export default App;
