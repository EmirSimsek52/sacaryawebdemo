import React from 'react'
import { layout } from '../../style';
import { RiTeamFill,RiCarFill,RiFlashlightFill } from "react-icons/ri";
import { AiFillControl } from "react-icons/ai";
import {SiFacebook,SiInstagram,SiGoogle,SiWhatsapp} from 'react-icons/si';
import { RiPhoneFill } from "react-icons/ri";
function Facecard() {
  return (
    <section  className={layout.sectionReverse}>
    <div>

     <div className='bg-[white] border-2 sm:w-[350px] w-[300px] m-2 rounded-xl'>
   
   <li>
   <div>

             <figure className='flex justify-center items-center'>
             <SiFacebook className='p-10 text-[purple]' size={400} />
             </figure>
             <h1 className='ml-6 sm:text-[26px] text-[20px]  text-[#32324e]'>
               Facebook Hesabımız
               </h1>
                       <div>
                     
             
               <div className='flex flex-row sm:text-[25px] text-[20px]'>
                 
                 <a href="https://www.facebook.com/sacarya.rental/?locale=tr_TR">
                 <button className='ml-6 mb-5 sm:mt-0 mt-2 bg-[#9F32B2] p-2 rounded-xl text-[white] text-[15px]'>
                   Görüntüleyin</button>
                 </a>
             
                        </div>
                       </div>
                    </div>        
                </li>
            </div>  
     </div>
</section>
  )
}

export default Facecard