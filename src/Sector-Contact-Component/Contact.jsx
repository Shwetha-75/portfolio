import React, { forwardRef } from 'react'
import "./contact.css"
export default forwardRef(
    function Contact(props,ref) {
       

        return (
          <div 
          className='section--tag'
          id="contact--tag"
          ref={ref}>
          <div className='w-100 border border-sky-500 h-[500px] '>

            <h1>contact</h1>
          </div>
          </div>
        )
      }
)

