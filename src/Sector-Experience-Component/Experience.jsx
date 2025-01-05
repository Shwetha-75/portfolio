import React,{forwardRef} from 'react';
import "./experience.css";
import data_set from "./data.js";
import AccordinComponent from '../Accordin-Component/AccordinComponent';
import DataSkill from "./skill.js";
import DataExp from "./data_set_exp.js";

export default forwardRef(
    function Experience(props,ref) {

        const [data,setData]=React.useState(data_set);
     
const skill=DataSkill.map((item)=>(
  <p key={item.id}>
  <li>{item.content}</li>
  </p>
));

const exp=DataExp.map((item)=>(
  <div className='mt-5 list--tag--paragraph' key={item.id}>
    

    <li className='paragraph-exp--title mt-2'>{item.title}</li>
  
    <p className='paragraph-exp--content'>
      <li className='list--tag--content '>
     {item.content}
      </li> 
      <li className='list--tag--content mt-2'>
        Tech
      </li>
      <li className='list---tech ml-[5%]'>
        
        {item.tech}</li>
      
    </p>
   </div>
))
        const handleOnClickOpen=(id)=>{
          setData(data.map((item)=>(
            item.id===id?{
              ...item,
              isOpen:!item.isOpen
            }:item
          )))
        }
        return (
          <div 
          className='section--tag'
          id="experience--tag"
          ref={ref}>
          <div className='w-[94%] ml-[3%] mt-40 h-[500px] flex '>
            <div className='shadow hover:shadow-2xl w-[68%] mr-[3%] h-[450px] mt-[25px] experience--tag--role'>
             <div>
             <h4 className='role--tag--heading'>
              Roles & Responsibilities
            </h4>
              <div className='mt-3 list--tag--paragraph'>
              {skill}
              </div>
              </div>
              <div className='mt-5 '>
                <h4 className='experience--tag'>Experience</h4>
                <h3 className='company--title mt-4'>Volvo Group India Pvt Ltd.{" "}<span className='text--span'>(March-24 - present)</span></h3>
               {exp}
              </div>
            </div>
           <div className='skill--tag w-[30%] h-[450px] mt-[25px]'>
                <h3 className=' text-center mt-2 header--tag--skills'>Skills</h3>
            <div >
              <AccordinComponent
              data={data}
              onClick={handleOnClickOpen}
              />
              <div>
              </div>
            </div>
           </div>
          </div>
          </div>
        )
      }
)

