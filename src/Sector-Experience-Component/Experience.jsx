import React,{forwardRef} from 'react';
import "./experience.css";
import data_set from "./data";
import AccordinComponent from '../Accordin-Component/AccordinComponent';

export default forwardRef(
    function Experience(props,ref) {

        const [data,setData]=React.useState(data_set);


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
          <div className='w-100  mt-40 h-[500px] flex '>

            <div className='shadow hover:shadow-2xl w-[68%] mr-[3%] h-[450px] mt-[25px]'>
             <div>
             <h4>
              Roles & Responsibilities
            </h4>
              <p>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>    
              </p>
              </div>

              <div>

                <h4>Experience</h4>
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

