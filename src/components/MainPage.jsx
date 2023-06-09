import React from 'react'
import Hero from './Hero'
import styles from '../style'
import Stats from './Stats'
import { motion } from 'framer-motion';
import { animateX } from '../utils/motion';
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
        <Stats />
      </div>
    </div>
    </motion.div>
  )
}

export default MainPage