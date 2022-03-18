import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Carousel, Input } from 'antd';

export const ColorTest = () => {
  const [fiveSeconds, setFiveSeconds] = useState(0)
  const carouselRef = useRef(null);
  const input = useRef(null);
  let fiveTimeOut: ReturnType<typeof setTimeout>;
  useEffect(() => {
    clearTimeout(fiveTimeOut);
    fiveTimeOut = setTimeout(() => {
      setFiveSeconds(2);
    }, 5000);
    return () => {
      console.log('out');
    }
  }, [fiveSeconds])

  const gotoNextImg = () => {
    (input as any).current?.setValue("");
    setFiveSeconds(preState => preState === 0 ? 1 : 0);
    clearTimeout(fiveTimeOut);
    (carouselRef as any).current?.next();
  }
  return (
    <div className={styles.normal}>
      <Carousel dotPosition='top' effect="fade" className={`${styles.carousel} ${fiveSeconds !== 0 && fiveSeconds !== 1 ? styles.blurShow : ""}`} ref={carouselRef}>
        <div>
          <img src={require('../../../assets/picture/colorBlind/54.png')}></img>
        </div>
        <div>
          <img src={require('../../../assets/picture/colorBlind/55.png')}></img>
        </div>
        <div>
          <img src={require('../../../assets/picture/colorBlind/56.png')}></img>
        </div>
        <div>
          <img src={require('../../../assets/picture/colorBlind/57.png')}></img>
        </div>
      </Carousel>
      <div className={styles.control}>
        <Input ref={input} className={styles.input} maxLength={4} onPressEnter={() => {
          gotoNextImg();
        }}></Input>
        <button className={styles.button} onClick={() => {
          gotoNextImg();
        }}>跳过</button>
      </div>
    </div>

  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColorTest);
