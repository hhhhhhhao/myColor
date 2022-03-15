import React,{ useEffect }  from 'react';
import styles from './index.less';
import Link from 'umi/link';
import Stars from '../pages/components/stars';
import Collapse from './components/collapse';

export default function() {return (
    <div className={styles.normal}>
      <div className={styles.sky}>
        <Stars num={500}></Stars>
        <div style={{position:"relative"}} className={styles.illustration}>
          <img src={require('../assets/picture/cat.gif')} className={styles.cat}></img>
          <img src={require('../assets/picture/houseandpeople.png')} className={styles.house}></img>
          <div className={styles.oricl}></div>
        </div>
        <div className={styles.cloud}>
          <img src={require('../assets/picture/cloud1.png')} className={styles.cloud1}></img>
          <img src={require('../assets/picture/cloud2.png')} className={styles.cloud2}></img>
          <img src={require('../assets/picture/cloud3.png')} className={styles.cloud3}></img>
          <img src={require('../assets/picture/cloud4.png')} className={styles.cloud4}></img>
          <img src={require('../assets/picture/cloud5.png')} className={styles.cloud5}></img>
        </div>
      </div>

      <div className={styles.collapse}><Collapse></Collapse></div>

      <Link to="/test">Go to test page</Link>
    </div>
  );
}
