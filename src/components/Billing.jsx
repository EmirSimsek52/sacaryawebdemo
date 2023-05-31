
import styles, { layout } from "../style";
import Googlecard from "./iletisim/googlecard";
import Wpcard from "./iletisim/wpcard";
import Instacard from "./iletisim/instacard";
import Facecard from "./iletisim/facebookcard";

const Billing = () => (
  <section id="iletisim" className={layout.sectionReverse}>
         <div>
            <h1 className="flex-1 ml-6 mb-10 font-poppins font-400 ss:text-[52px] text-[32px] text-[#32324e]">
           İletişim
          </h1>   
          <ul className="flex sm:flex-row flex-col items-center">
            <li>
              <Googlecard/>
            </li>
            <li><Wpcard/></li>
            <li><Instacard/></li>
            <li><Facecard/></li>
          </ul>  
          </div>
  </section>
);

export default Billing;