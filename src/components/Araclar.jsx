
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
  <motion.div animate={animateX()} >

        <section>
          <div>
  
            <div>
           
          </div>
          <div className="">
          <div >
            <ul className="flex  flex-wrap gap-7 justify-center ">
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