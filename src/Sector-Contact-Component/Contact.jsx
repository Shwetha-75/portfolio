import React, { forwardRef } from 'react'
import "./contact.css"

export default forwardRef(
    function Contact(props,ref) {
       

        return (
          <div className='section--tag' id="contact--tag" ref={ref}>
        <div className='w-100  mt-40 flex h-[500px]'>

            <div className='ml-5 mt-5 h-[470px]  w-[50%]'>
              {/* form */}
              <form>
                <label for='name'>Enter your name <span className=" text-lime-100">*</span>{" "}: </label>
                <input type='text'  id='name' name='name'  required />
                <label for='email '>Enter your Email <span className=" text-lime-100">*</span>{" "}:</label>
                <input type='email' className='mt-5' id='email'  name='email' required />
                <label for='message'>Enter your message </label>
                <textarea  className='mt-10' id='message' />
                <div className='flex justify-center text-center'>
                <button className='mt-5  px-4 py-3 rounded-md border border-lime-900 w-[30%] bg-lime-900 rounded center' type='button' id="form-btn">Send</button>

                </div>
                </form>
              </div>


                <div className='w-[50%] ml-[5%] header--contact--tag'>
               
                  <h1 className='text text-center mt-[20%]'>Drop a Message  </h1>
                </div>
          </div>
          </div>
        )
      }
)

