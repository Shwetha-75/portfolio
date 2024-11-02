import React from "react";
import Main from "./Component/Main";

// import animatedGirl from './assets/animated-girl.gif';
function App() {

  React.useEffect(() => {
    // Detect if the device supports hover
    const supportsHover = window.matchMedia('(hover: hover)').matches;

    if (!supportsHover) {
      // Remove the hover class if hover is not supported
      document.body.classList.add('no-hover');
    }
  }, []);
  return (
    <div className="Main">
    
     <Main/>
   
  
    
    </div>
  );
}

export default App;
