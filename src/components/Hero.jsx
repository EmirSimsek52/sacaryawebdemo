import styles from "../style";
import React, { useRef, useState } from "react";
import { discount, robot,car } from "../assets";

import emailjs from "@emailjs/browser";
const Hero = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kb3ilon",
        "template_9xriaye",
        ref.current,
        "_TEdz_PXCcoaA3XCj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };


  return (
    <section id="AnaSayfa" className={`flex md:flex-row flex-col sm:py-5 py-`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-20 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-400 ss:text-[72px] text-[52px] text-[#32324e] ss:leading-[80.8px] leading-[55px]">
            SACARYA İLE <br className="sm:block hidden" />{" "}
            <span className="text-[#9F32B2]">GÜVENLİ</span>{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-400 ss:text-[68px] text-[52px] text-[#32324e] ss:leading-[80.8px] leading-[45px] w-full">
          KİRALAYIN 
        </h1>
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-3 bg-[#e4e9f1] rounded-xl p-4'
        >
          <div className='mt-12 flex sm:flex-row flex-col gap-3'>
          <label className='flex flex-col'>
            <span className='text-black  font-medium mb-4'>İsminiz</span>
            <input
              type='text'
              name='name'
              
              placeholder="İsim"
              className='bg-tertiary py-2 px-2 placeholder:text-[#808080] text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Araç Marka veya Model</span>
            <input
              type='message'
              name='message'
             
              placeholder="Marka veya Model"
              className='bg-tertiary py-2 px-6 w-[230px] placeholder:text-[#808080] text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black  font-medium mb-4'>Telefon Numaranız</span>
            <input
              
              name='message'
             
              placeholder="Telefon Numaranız"
              className='bg-tertiary py-2 px-6 w-[230px] placeholder:text-[#808080] text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
       </div>
       <div className='mt-12 flex sm:flex-row flex-col gap-3'>
          <label className='flex flex-col'>
            <span className='text-black  font-medium mb-4'>Teslim Tarihi</span>
            <input
              type='date'
              name='message'
              
              placeholder="Marka veya Model"
              className='bg-tertiary py-2 px-6 sm:w-[210px] w-[225px] placeholder:text-[#808080] text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black  font-medium mb-4'>İade Tarihi</span>
            <input
              type='date'
              name='message'
             
              placeholder="Mail"
              className='bg-tertiary py-2 px-6 w-[225px] placeholder:text-[#808080] text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black  font-medium mb-4'>Teslim Edilcek Yer</span>
            <input
              
              name='message'
             
              placeholder="Teslimat Yeri"
              className='bg-tertiary py-2 px-6 sm:w-[230px] w-[225px] placeholder:text-[#808080] text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
       </div>
          <div className="flex flex-row">
          <button
            type='submit'
            className='bg-[#9F32B2] py-3 px-8  rounded-xl outline-none w-fit text-white font-bold'
          >
           Bilgileri Gönder
          </button>
          <label className="text-black"> {success &&
              "Talebiniz Alınmıştır en kısa sürede size geri döneceğiz."}</label>
          </div>
        </form>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={car} alt="billing" className="w-[100%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        
      </div>
    </section>
  );
};

export default Hero;