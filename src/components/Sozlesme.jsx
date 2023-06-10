import React from 'react'
import { motion } from 'framer-motion';
import { animateX } from '../utils/motion';

import styles,{layout} from '../style';
const Sozlesme = () => {
  return (
    <motion.div animate={animateX()} className="flex justify-center items-center flex-col">
        <h1 className='text-3xl font-poppins font-400 mb-10'>
            Sözleşme
        </h1>
            <ol className='felx justify-start font-poppins text-xl text-center lisozlesme'>
                <li>1. Aracı kiralıyacak kişi 20 yaşından ve büyük ve en az 2 yıl ehliyet sahibi olmalıdır. </li>
                <li>2. Araç kiralandığı süre boyunca kullanılan otoyollar HGS ile ödenmektedir ve ücretler aracın geri teslim alınırken müşteriden tahsilatı yapılır.</li>
                <li>3. Araçlarda günlük kilometre sınır vardır. Araçlar bölümünde aracın günlük kilometre sınırı belirtilmektedir. Aşılan her kilometre için 3₺ ödeme yapılır.</li>
            </ol>
    </motion.div>
  )
}

export default Sozlesme