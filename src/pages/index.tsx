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
      <Stars num={500}></Stars>
      <div className={styles.sky}/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
      </ul>
      <Link to="/test">Go to test page</Link>
    </div>
  );
}
