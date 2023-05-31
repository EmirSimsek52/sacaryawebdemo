import styles from "../style";
import { icon2 } from "../assets";

import {SiFacebook,SiInstagram,SiGoogle,SiWhatsapp} from 'react-icons/si';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}    flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={icon2}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`font-poppins font-normal text-black text-[18px] leading-[30.8px] mt-4 mx-7 max-w-[312px]`}>
        Adres: Bahçelievler, Doç. Dr. Bahriye Üçok Blv. no :59 D:b, 35500 Karşıyaka/İzmir
        </p>
      </div>


    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#9F32B2]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-[#32324e]">
        Copyright Ⓒ 2023 Sacarya Rental. Tüm Hakları Saklıdır.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
      <ul className="flex flex- row-auto text-[#9F32B2] sm:gap-10 gap-4">
              <li className="hover:opacity-50 duration-300" >
              <a  href="https://www.instagram.com/sacaryarental/"><SiInstagram size={30}/></a>
              </li>
              <li  className="hover:opacity-50 duration-300">
              <a href="https://g.co/kgs/zEfRVJ">
                <SiGoogle size={30}/></a>
              </li>
              <li  className="hover:opacity-50 duration-300">
              <a href="https://www.facebook.com/sacarya.rental/?locale=tr_TR"><SiFacebook size={30}/> </a>
              </li>
              <li  className="hover:opacity-50 duration-300">
                <a href="https://api.whatsapp.com/message/K6OXRA4YXBBOO1?autoload=1&app_absent=0"><SiWhatsapp size={30}/></a>
              </li>
            </ul>
        {/*socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] bg-[purple] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
          ))*/}
      </div>
    </div>
  </section>
);

export default Footer;