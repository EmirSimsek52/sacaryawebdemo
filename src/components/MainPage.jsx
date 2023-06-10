import React from 'react'
import Hero from './Hero'
import styles from '../style'
import Stats from './Stats'
import { motion } from 'framer-motion';
import { animateX } from '../utils/motion';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <motion.div animate={animateX()}>
    <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
  </div>
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Link to={"/Sozlesme"} >
        <span className='text-gradient font-poppins font-bold hover:opacity-70 duration-300'>
        Kiralama şartlarını görüntüleyin.
        </span> 
        </Link>
      </div>
    
    </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>
    
    </div>
 
      
    </motion.div>
    
  )
}

export default MainPage