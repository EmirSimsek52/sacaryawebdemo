
import styles, { layout } from "../style";
import { icon2,sacarya } from "../assets";
import { motion } from 'framer-motion';
import { animateX } from '../utils/motion';
const Information = () => (
    <motion.div animate={animateX()} className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
  <section id="hakkımızda" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="flex-1 ml-6 mb-10 font-poppins font-400 ss:text-[52px] text-[32px] text-[#32324e]">
        Hakkımızda
      </h2>
      <p className={`font-poppins font-normal  text-[18px] leading-[30.8px] text-black max-w-[470px] `}>
      <span  className="text-gradient font-bold">Sacarya</span> 
         {" "}araç kiralama olarak 30 yıllık tecrübemizle müşterilerimize en iyi hizmeti sunmaktan gurur duyuyoruz.
          Firmamız, araç kiralama sektöründe uzmanlaşmış ve müşteri memnuniyetini her zaman 
          önceliği olarak benimsemiştir. Güvenilirlik, şeffaflık ve müşteri memnuniyeti, işimizin temel değerleridir. 
          Her bir müşterimizin bireysel taleplerini anlamaya ve onlara özel çözümler sunmaya özen gösteririz.
        Müşterilerimize uygun fiyatlar ve esnek kiralama seçenekleri sunarak, bütçenize ve gereksinimlerinize uygun çözümler sağlarız.
        Bizimle işbirliği yaparak, güvenilir ve profesyonel bir araç kiralama deneyimi yaşayacaksınız. Sizlere hizmet 
        vermekten mutluluk duyacağımızı ve her aşamada yanınızda olacağımızı bilmenizi isteriz.
      </p>
    </div>
    <div className="flex-1 max-w-max md:ml-10 ml-0 md:mt-0 mt-10 relative flex justify-center items-center opacity-90 ">
        <img className="rounded-2xl" src={sacarya} />
        
    </div>
   
  </section>
  </div>
  </motion.div>
);

export default Information;