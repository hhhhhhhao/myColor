import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';
import { Eyes } from './eyes/index.jsx';
import { Circle } from './circle/index';
import { DynamicArrow } from './dynamicArrow/index';
import { Fovea } from './fovea/index';
import { debounce } from '@/utils/general';
import eyeData from './eyeData.json';

interface eyeDataInter {
  id: string;
  name: string;
  Introduction: string;
  Function: string;
}
export const Two = React.forwardRef<HTMLInputElement | any, any>((props, ref) => {
  const eye = useRef(null);
  const [eyeStructureShow, seteyeStructureShow] = useState(true);
  const [circleShow, setcircleShow] = useState(false);
  const [eyeName, seteyeName] = useState('眼睛');
  const [eyeIntroduction, seteyeIntroduction] = useState(
    '眼睛能辨别不同的颜色和光线的亮度，并将这些信息转变成神经信号，传送给大脑。',
  );
  const [eyeFunction, seteyeFunction] = useState('是一个可以感知光线的器官');
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
  //fovea--中央凹
  useEffect(() => {
    let current = eye.current as any;

    eyeData.map((value: eyeDataInter) => {
      current.getElementById(value['id']).onmouseover = () => {
        seteyeName(value['name']);
        seteyeIntroduction(value['Introduction']);
        seteyeFunction(value['Function']);
      };
    });
  }, []);

  const fun = () => {
    seteyeStructureShow(true);
  };

  return (
    <div
      className={styles.normal}
      onScroll={e => {
        debounce(() => {
          let eyePosition = (eye as any).current.getBoundingClientRect().top;
          console.log(eyePosition);
          if (eyePosition <= -100) {
            setcircleShow(true);
          }
        }, 500)();
      }}
    >
      <div
        className={`${styles.eyeStructure} ${styles.eye} ${
          eyeStructureShow ? styles.eyeStructureShow : ''
        }`}
        ref={ref}
      >
        <Eyes ref={eye}></Eyes>
      </div>
      <div
        className={`${styles.eyeBoard} ${styles.eye} ${
          eyeStructureShow ? styles.eyeStructureShow : ''
        }`}
      >
        <p className={styles.eyeIntroduction}>{eyeIntroduction}</p>
        <p className={styles.eyeFunction}>{eyeFunction}</p>
        <p className={styles.eyeName}>{eyeName}</p>
      </div>
      <div className={`${eyeStructureShow ? styles.dynamicArrow : ''}`}>
        <DynamicArrow fun={fun}></DynamicArrow>
      </div>
      <div className={`${styles.eyePosition} ${eyeStructureShow ? styles.eyeStructureShow : ''}`}>
        <img src={require('../../assets/picture/eye-position.png')}></img>
      </div>
      {circleShow ? <Fovea></Fovea> : ''}
      {circleShow ? (
        <div className={styles.circle}>
          <Circle></Circle>
          <p className={styles.circleWorld}>中央凹</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
});
