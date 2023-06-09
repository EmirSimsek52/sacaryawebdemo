import React from 'react'
import styles from '../style'
import Navbar from './Navbar'
const NavbarPro = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
            <Navbar/>
    </div>
  </div>
  )
}

export default NavbarPro