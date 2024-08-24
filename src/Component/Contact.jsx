import React from 'react';
import { FcBusinessContact } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";

// import ContactOverlay from './ContactOverlay';

export default function Contact(props) {
    
   
  return (
    <div className='div-tag-contact'>
     <FcBusinessContact color='white' onClick={props.handleOnClickSetStatus} size={50}/>
      
       
     
    </div>
  )
}
