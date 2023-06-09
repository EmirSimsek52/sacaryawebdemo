
import styles, { layout } from "../style";

import Egea from "./carspages/egea";
import Mercedes from "./carspages/mercedes";
import Clio from "./carspages/clio";
import Passat from "./carspages/passat";
import Cerato from "./carspages/kia";
import Megane from "./carspages/megane";
import Duster from "./carspages/duster";
import Elysee from "./carspages/elysee";
import { motion } from 'framer-motion';
import { animateX } from '../utils/motion';
const Araclar = () =>  (
  <section id="Araclar"  className={`${styles.paddingX} ${styles.flexCenter}`}>
  <motion.div animate={animateX()} className={`${styles.boxWidth}`}>

        <section>
          <div>
  
            <div>
            <h1 className="flex-1 ml-6 mb-10 font-poppins font-400 ss:text-[52px] text-[32px] text-[#32324e]">
           Araçlar
          </h1>     
          </div>
          <div className="">
          <div>
            <ul className="flex  flex-wrap gap-7 ">
              <li> <Egea/></li>
              <li> <Mercedes/></li>
              <li> <Clio/></li>
              <li> <Passat/></li>
              <li> <Cerato/></li>
              <li> <Megane/></li>
              <li> <Duster/></li>
              <li> <Elysee/></li>
            </ul> 
            </div>
    
            </div>
          </div>
        </section>  
    </motion.div>
  </section>
);

export default Araclar;