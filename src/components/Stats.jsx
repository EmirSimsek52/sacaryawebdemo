import { stats } from "../constants";
import styles from "../style";
import { SiHiveBlockchain, SiStrapi, SiFsecure, SiMeteor } from 'react-icons/si';
import { BsFillCarFrontFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import AboutCard from "./AboutCard";
const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
     
     <div className='grid sm:grid-cols-2 justify-center items-center lg:grid-cols-6 gap-4'>

{/* Card */}

<AboutCard  icon={<BsFillCarFrontFill  size={40} />} heading='İSTEDİĞİNİZ ARACI SEÇİN' />
<AboutCard  icon={<AiOutlineSend size={40} />} heading='İSTEKLERİNİZİ BİZE İLETİN' />
<AboutCard  icon={<SiStrapi size={40} />} heading='HEMEN İLETİŞİME GEÇELİM'  />

</div>

  </section>
);

export default Stats;