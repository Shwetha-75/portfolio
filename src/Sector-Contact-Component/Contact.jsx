import React, { forwardRef } from 'react'
import "./contact.css"
export default forwardRef(
    function Contact(props,ref) {
       

        return (
          <div 
          className='section--tag' id="contact--tag"
          ref={ref}>
        <div className='w-100 border mt-40 border-sky-500 h-[500px] '>

            <div className=' ml-5 mt-5 h-[470px]  w-[50%]  '>
              {/* form */}
              <from>
                <input type='text'   name='name' placeholder='enter your name'/>
                <input type='email' className='mt-5'  name='email' placeholder="enter your email"/>
                <textarea  className='mt-5' placeholder='enter the message '/>
                <button className='mt-5  px-4 py-3 border border-lime-900 w-[30%] bg-lime-900 rounded center' type='button'>Send</button>
              </from>

                </div>
                <div>
                  {/*logo's  */}
                </div>
          </div>
          </div>
        )
      }
)

