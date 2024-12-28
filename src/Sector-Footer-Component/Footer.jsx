import React from 'react'
import "../Sector-Footer-Component/footer.css";
import Data from "./social_media";

export default function Footer() {

    const handleOnClick=(key)=>{
          if(key==='mail')
          {
            window.location=`mailto:${Data[key]}`

          }
          else{
            window.open(Data[key],"");
          }
        
    }
  return (
    <div id='footer--tag' className='container'>
        <div  className='row w-[80%] ml-[10%] bg-lime-500 flex justify-between text-center'>
            <ul className='list--tag--connections'>
                <li onClick={()=>handleOnClick('linkedIn')} > LinkedIn</li>
                <li  onClick={()=>handleOnClick('daily_dev')} className='mt-[50px] mb-[50px]'> daily.dev</li>
                
            </ul>
            <ul className='list--tag--connections'>
                <li onClick={()=>handleOnClick('dev')} >Dev Community</li>
                <li  className='mt-[50px] mb-[50px]' onClick={()=>handleOnClick('mail')}>Google-Mail</li>
            </ul>
            <ul className='list--tag--connections'>
                <li onClick={()=>handleOnClick('git')} >GitHub</li>
                <li onClick={()=>handleOnClick('leetCode')}  className='mt-[50px] mb-[50px]'>LeetCode</li>

            </ul>

            <ul className='list--tag--connections'>
                <li onClick={()=>handleOnClick('hackerRank')} >HackerRank</li>
            </ul>
        </div>
    </div>
  )
}
