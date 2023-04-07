import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Egea from "./carspages/egea";
import Mercedes from "./carspages/mercedes";
import Clio from "./carspages/clio";
import Passat from "./carspages/passat";
import Cerato from "./carspages/kia";
import Megane from "./carspages/megane";
import Duster from "./carspages/duster";
import Elysee from "./carspages/elysee";
const Araclar = () =>  (
  <section id="Araclar" className={layout.section}>
<div className="flex justify-center items-center">
        <section>
          <div>
  
            <div>
            <h1 className="flex-1 ml-6 mb-10 font-poppins font-400 ss:text-[52px] text-[32px] text-[#32324e]">
           Araçlar
          </h1>     
          </div>
          <div>
            <ul className="flex sm:flex-row flex-col m-10">
              <li> <Egea/></li>
              <li> <Mercedes/></li>
              <li> <Clio/></li>
              <li> <Passat/></li>
            </ul> 
            </div>
            <div>
            <ul className="flex sm:flex-row flex-col m-10">
              <li> <Cerato/></li>
              <li> <Megane/></li>
              <li> <Duster/></li>
              <li> <Elysee/></li>
            </ul> 
            </div>
          </div>
        </section>  
    </div>
  </section>
);

export default Araclar;