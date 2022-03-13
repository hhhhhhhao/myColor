import React,{ useEffect }  from 'react';
import styles from './index.less';
import  axios  from 'axios'
import Link from 'umi/link';
import router from 'umi/router';
import Stars from '../pages/components/stars';

export default function() {
  async function getDate(){
    axios.get('/api')
    .then((res)=>{
    console.log(res);
      console.log(res);
    })
  }
  useEffect(() => {
    getDate()
  })

  return (
    <div className={styles.normal}>
      <div className={styles.sky}>
        <Stars num={500}></Stars>
        <div style={{position:"relative"}}>
          <img src={require('../assets/picture/houseandpeople.png')} className={styles.house}></img>
          <div className={styles.oricl}></div>
          <img src={require('../assets/picture/cat.gif')} className={styles.cat}></img>
        </div>
        <div className={styles.cloud}>
          <img src={require('../assets/picture/cloud1.png')} className={styles.cloud1}></img>
          <img src={require('../assets/picture/cloud2.png')} className={styles.cloud2}></img>
          <img src={require('../assets/picture/cloud3.png')} className={styles.cloud3}></img>
          <img src={require('../assets/picture/cloud4.png')} className={styles.cloud4}></img>
          <img src={require('../assets/picture/cloud5.png')} className={styles.cloud5}></img>
        </div>
      </div>
      <ul className={styles.list}>
        <li>大多数水水水水水水水水水水</li>
      </ul>
      <Link to="/test">Go to test page</Link>
    </div>
  );
}
