import React from 'react';
import styles from './index.less';

export const Fovea = () => {
  return (
    <div className={styles.fovea}>
      <img src={require('@/assets/picture/2.png')} className={styles.foveaStructure}></img>
      <div className={styles.cell}>
        <div className={styles.cellGreen}>
          <img src={require('@/assets/picture/绿-视锥细胞.png')}></img>
          <p></p>
        </div>
        <div className={styles.cellRed}>
          <img src={require('@/assets/picture/红-视锥细胞.png')}></img>
        </div>
        <div className={styles.cellBlue}>
          <img src={require('@/assets/picture/蓝-视锥细胞.png')}></img>
        </div>
        <div className={styles.cellLight}>
          <img src={require('@/assets/picture/视杆细胞.png')}></img>
        </div>
      </div>
    </div>
  );
};
