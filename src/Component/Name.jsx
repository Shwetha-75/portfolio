import React from 'react'
import { Nav, NavItem } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Name() {
  return (
    <div className='nav-tag'>

        <Nav className='nav-tag-element' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <NavItem className='nav-tag-item'>
                <h1 style={{maxWidth:'fit-content',color:' hsl(10, 10%, 100%)' ,textDecoration:'none'}}className='name-tag'><span>SHWETHA</span> <span>K</span></h1>
            </NavItem>
        </Nav>
    </div>
  )
}
