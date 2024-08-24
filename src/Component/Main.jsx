// import React from 'react'
// import Name from './Name';
// import Contact from './Contact';
// import { PiLessThan } from "react-icons/pi";
// // import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import GridCard from './Card';
// import { BiSolidUpArrow } from "react-icons/bi";
// // import ScrollToTop from "react-scroll-to-top";
// // import { TfiArrowCircleUp } from "react-icons/tfi";
// // import  {useInView } from 'react-intersection-observer';
// // import Slide from '@mui/material/Slide';
// export default function Main() {

//   const [cursor,setCursor]=React.useState({x:0,y:0});



//   React.useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursor({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const [status,setStatus]=React.useState(false);
//   const handleOnClickSetStatus=()=>{
//     setStatus(!status)
//   }
//   // const [isVisible, setIsVisible] = React.useState(false);

//   // Show button when page is scrolled down 300px
//   // const toggleVisibility = () => {
//   //     if (window.pageYOffset > 300) {
//   //         setIsVisible(true);
//   //     } else {
//   //         setIsVisible(false);
//   //     }
//   // };

//   // Scroll to top
//   // const scrollToTop = () => {
//   //     window.scrollTo({
//   //         top: 0,
//   //         behavior: 'smooth'
//   //     });
//   // };

//   // React.useEffect(() => {
//   //     window.addEventListener('scroll', toggleVisibility);
//   //     return () => {
//   //         window.removeEventListener('scroll', toggleVisibility);
//   //     };
//   // }, []);

//   const [isVisible,setIsVisible]=React.useState(false);
//   const toggleMoveTop=()=>{
//     if(window.pageYOffset>300)
//       {
//         setIsVisible(true);
//       }
//       else{
//         setIsVisible(false);
//       }
//   }
//   const handleOnScroll=()=>{
//        window.scrollTo({
//         top:0,
//         behavior:'smooth'
//        })
//   }
//   React.useEffect(()=>{
    
//     document.addEventListener('scroll', toggleMoveTop);
//     return () => {
//       document.removeEventListener('scroll', toggleMoveTop);
//     };
//   },[]);
//     // const settings = {
//     //   dots: true,
//     //   infinite: false,
//     //   speed: 500,
//     //   slidesToShow: 1,
//     //   slidesToScroll: 1,
//     //   vertical: true, // To scroll vertically like pages
//     //   verticalSwiping: true,
//     // };
  
//     // const pages = [
//     //   { id: 1, content: 'Page 1 Content' },
//     //   { id: 2, content: 'Page 2 Content' },
//     //   { id: 3, content: 'Page 3 Content' },
//     //   // Add more pages as needed
//     // ];
  
//   const handleOnClickGmail=()=>{
//     window.open('mailto:shweetha.sweety17@gmail.com','')
//   }

//   const handleOnClickLinkedIn=()=>{
//     window.open('https://www.linkedin.com/in/shwetha-k-0948ab228/','')
//   }


//   return (
//     <div>

//         <Name/>
//         <GridCard/>
//    <div className={`div-tag-arrow ${isVisible? 'visible':''}`}  >
//    < BiSolidUpArrow  onClick={handleOnScroll} visibility={isVisible} size={50}/>
//    </div>
//          {/* <button
//             className={`move-to-top ${isVisible ? 'visible' : ''}`}
//             onClick={scrollToTop}

//         >
//             Top
//         </button> */}
//         <Contact handleOnClickSetStatus={handleOnClickSetStatus}  />

       
// <div id={status ?'myNav':'hidden'} className="overlay">
//   <p style={{textAlign:'center'}}>Drop Your Message</p>
//   {/* <div  className="closebtn" onClick={()=>setStatus(false)}>&times;</div> */}
//   <PiLessThan className="closebtn" size={0} onClick={()=>setStatus(false)}/>
//   <div className="overlay-content">
//     <p onClick={handleOnClickGmail} className="gmail-tag">Gmail</p>
//     <p onClick={handleOnClickLinkedIn}  className="linkedin-tag">LinkedIn</p>
   
   
//   </div>
// </div>

// {status &&  (<div>
  
// <div
//         className="cursor-shadow"
//         style={{ left: `${cursor.x}px`, top:`${ cursor.y}px` }}
//       ></div>
//       <h1>hello</h1>
//       <div
//         className="cursor-text"
//         style={{ left: `${cursor.x}px`, top:`{${cursor.y }+ 30}px` }}
//       >
//         Your Text Here
//       </div>
// </div>)}

// {status===false&&  (<div>
  
//   <div
//           className="cursor-shadow-another"
//           style={{ left: `${cursor.x}px`, top:`${ cursor.y}px` }}
//         ></div>
//         <h1>hello</h1>
//         <div
//           className="cursor-text-another"
//           style={{ left: `${cursor.x}px`, top:`{${cursor.y }+ 30}px` }}
//         >
//           Your Text Here
//         </div>
//   </div>)}

// {/* <div style={{ height: '100vh', overflow: 'hidden' }}>
//       <Slider {...settings}>
//         {pages.map(page => (
//           <div key={page.id} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <h2>{page.content}</h2>
//           </div>
//         ))}
//       </Slider>
//     </div> */}


// {/* <h1>Hello, world!</h1>
// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

// <h1>Hello, world!</h1>

//       <div style={{ marginTop: "150vh" }} />
//       <ScrollToTop color='white' smooth /> */}
//     </div>
//   )
// }
import React from "react";
import Card from "./Card";
  export default function Main(){
    const[status,setStatus]=React.useState(false);
    const handleOnClickStatus=()=>{
      setStatus(!status);
    }
    return (
      <div>
   <Card
   status={status}
   handleOnClickStatus={handleOnClickStatus}
   />
      </div>
    )
  }