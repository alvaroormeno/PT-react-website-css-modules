import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../images/drive.png'

function Driver() {
  return (
    <div className={styles.drive}>
      <div className={styles.left}>
        <img src={Drive} alt="person driving" />
      </div>
      <div>
        <h2>Find your perfect car <span>to try before you buy</span></h2>
        <p>Make sure your future wheels work well with your lifestyle by taking time in the drivers seat.</p>
        <button>Browse Cars</button>
      </div>
    </div>
  )
} 

export default Driver