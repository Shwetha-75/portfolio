import React, { forwardRef } from 'react'
import "./contact.css"
import { send } from 'emailjs-com';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default forwardRef(
    function Contact(props,ref) {
 
       const [formStatus,setFormStatus]=React.useState(false);
       

       const [toSendMessage,setToSendMessage]=React.useState({
        from_name:'',
        to_name:'Shweth K',
        message:'',
        reply_to:''
       });

      //  on changing input field 

       const handleOnChange=(event)=>{
      
        setToSendMessage((prev)=>({
          ...prev,
          [event.target.name]:event.target.value
        }))
       };

       const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log(toSendMessage)
        send(
            'service_lhnxl1w',
            'template_5v4tld2',
            toSendMessage,
            '8UblYlsTQ9eIlP-um'
          )
            .then((response) => {
                  console.log(response.status)
            })
            .catch((err) => {
               console.log(err)
            });
            // disabling the submit button 
            setFormStatus(true);

          //  2s set some delay while resetting all the input filed and 
          // on click on the button to submit 
            setTimeout(()=>{
              setToSendMessage({
                from_name:'',
                to_name:'Shwetha K',
                message:'',
                reply_to:''
              })
              // Enabling submit button
              setFormStatus(false);
            },2000);
            
      };

        return (
          <div className='section--tag' id="contact--tag" ref={ref}>
        <div className='w-100 ml-[10%] mt-40 flex h-[500px]'>

            <div className='ml-5 mt-5 h-[470px]  w-[35%]'>
              {/* form */}
              <form onSubmit={handleOnSubmit} >
                <label 
                htmlFor='name'>
                  Enter your name 
                  <span 
                  className="text-lime-100">*</span>{" "}: 
                </label>
                <input 
                type='text'  
                id='name' 
                name='from_name' 
                value={toSendMessage.from_name}  
                onChange={handleOnChange} required 
                />
                <label 
                htmlFor='email '>
                  Enter your Email 
                  <span 
                  className="text-lime-100">*</span>{" "}:
                </label>
                <input 
                type='email' 
                className='mt-5' 
                id='email'  
                onChange={handleOnChange} 
                name='reply_to' 
                value={toSendMessage.reply_to}
                required />
                <label 
                htmlFor='message'>
                  Enter your message 
                  </label>
                <textarea  
                className='mt-10' 
                id='message' 
                value={toSendMessage.message}
                onChange={handleOnChange} 
                name='message' />
                <div 
                className='flex justify-center text-center'>
                {!formStatus && <button 
                className='mt-5  px-4 py-3 rounded-md border border-lime-900 w-[30%] bg-lime-900 rounded center' 
                type='submit' 
                id="form-btn">Send</button> }
                {formStatus && <div className="wrapper"> 
                  <svg className="checkmark " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                   <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
                   <path className="checkmark__check  " fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                </div>}
                </div>
                </form>
              </div>

              
                <div className='w-[35%] ml-[10%] header--contact--tag  '>
                
                <DotLottieReact
      src="https://lottie.host/0f3c7204-adfc-45ec-88a4-2a2fae511f6e/81iCj3VPQy.lottie"
      loop
      autoplay
    />
                </div>
          </div>
          </div>
        )
      }
)

