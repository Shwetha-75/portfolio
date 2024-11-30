import React from "react";
import {Link} from "react-scroll";
import "../NavigationBar/navigation.css";


export default function NavigationBar(props) {


 

  return (
    <>
    <header  className="nav">
        <Link 
                activeClass="active"
                className="active"
                smooth
                spy
                to="/home"
                onClick={() => {props.handleSetActive("home")}}>
               Home
        </Link>
  
        <Link
                activeClass="active"
                className="active"
                smooth
                spy
                to="/about"
                onClick={() => {props.handleSetActive("about")}}>
                About
        </Link>
        <Link
                activeClass="active"
                className="active"
                smooth
                spy
                to="/projects"
                onClick={() => {props.handleSetActive("projects")}}>
                Projects
        </Link>
        <Link
                activeClass="active"
                className="active"
                smooth
                spy
                to="/experience"
                onClick={() => {props.handleSetActive("experience")}}>
                Work Experience
          </Link>
          <Link
                activeClass="active"
                className="active"
                smooth
                spy
                to="/contact"
                onClick={() => {props.handleSetActive("contact")}}>
                Contact
          </Link>
          
      </header>
    </>
  )
}
