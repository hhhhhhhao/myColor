
import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';
import Eyes from './eyes/index.jsx'
import eyeData from './eyeData.json'
interface eyeDataInter { id: string; name: string, Introduction: string, Function: string }
export default function () {
  const first = useRef(null)
  const [eyeName, seteyeName] = useState('眼睛');
  const [eyeIntroduction, seteyeIntroduction] = useState('眼睛能辨别不同的颜色和光线的亮度，并将这些信息转变成神经信号，传送给大脑。');
  const [eyeFunction, seteyeFunction] = useState('是一个可以感知光线的器官');
  const stateRe = () => {
    seteyeName('眼睛');
    seteyeIntroduction('眼睛能辨别不同的颜色和光线的亮度，并将这些信息转变成神经信号，传送给大脑。');
    seteyeFunction("是一个可以感知光线的器官");
  }
  //cornea--角膜
  //pupil--瞳孔
  //lens--晶状体
  //uvea--虹膜
  //sclera--巩膜
  //vitreousHumour--玻璃体
  //hyaloidCanal--玻璃体动脉导管
  //opticNerve--视神经
  //retinalBloodVessels--视网膜血管
  //retina--视网膜
  useEffect(() => {
    let current = first.current as any;
    eyeData.map((value: eyeDataInter) => {
      console.log(value['id']);
      
      current.getElementById(value['id']).onmouseover = () => {
        seteyeName(value['name']);
        seteyeIntroduction(value['Introduction']);
        seteyeFunction(value['Function']);
      }

      current.getElementById(value['id']).onmouseout = () => {
        stateRe();
      }
    })

    
  }, [])

  return (
    <div className={styles.normal}>
      <Eyes ref={first}></Eyes>
      <div className={styles.triangle}></div>
      <div className={styles.eyeBoard}>
        <p className={styles.eyeName}>{eyeName}</p>
        <p className={styles.eyeIntroduction}>{eyeIntroduction}</p>
        <div className={styles.eyeLine}></div>
        <p className={styles.eyeFunction}>{eyeFunction}</p>
      </div>
    </div>
  );
}
