import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { connect } from 'dva';

export const ColorTest = () => {
  const [show, setShow] = useState([false, false]);
  const [imgNum, setImgNum] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow([true, false]);
    }, 0);

    setTimeout(() => {
      setShow([true, true]);
    }, 1000);
  }, []);
  const showImg = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    setImgNum(Number(target.dataset['img']));
  };
  return (
    <div className={styles.normal}>
      <div className={`${styles.up} ${show[1] ? styles.show : styles.unshow}`}>
        <div className={styles.layout1}>
          <p className={styles.about}>关于</p>
          <p>
            全图谱共辑彩图100幅，其中先天性色觉检査围60幅，
            后天性色觉检査图40幅。组成的阿拉伯数字图、英文字母图、
            动物及其他物形图设计富有知识性、趣昧性，科学性强，实用性强。图形均可清楚认读，有的还可颠倒认读或竖读。适合国内外各民族、各类人群使用。
            《新编色觉检査图》集先天性色觉检査和后天性色觉检査于一书。不仅适合青年应征入伍，大学、中专招生，各行各业招工时之先天性色觉异常检査，而且还适合因患视神经病、视网膜脉络膜病、视中枢病、青光眼等所致色觉障碍的后天性色觉异常检査。
          </p>
        </div>
        <div className={styles.layout2}>
          <p>自然光环境下，距离屏幕50~70厘米，5秒内识别出数字、字母或图形</p>
          <p>测试时不允许戴有色眼镜，不允许用手指触划屏幕</p>
          <p>仅为熟悉色觉检查常规流程使用，测试结果受多种情况影响，切勿作为诊断依据。</p>
        </div>
        <div className={styles.layout3}>
          <p className={styles.description}>说明</p>
          <p
            data-img="1"
            onMouseLeave={() => {
              setImgNum(0);
            }}
            onMouseEnter={e => {
              showImg(e);
            }}
          >
            《新编色觉检査图》
          </p>
          <p
            data-img="2"
            onMouseLeave={() => {
              setImgNum(0);
            }}
            onMouseEnter={e => {
              showImg(e);
            }}
          >
            李春慧 / 李育宏
          </p>
          <p
            data-img="3"
            onMouseLeave={() => {
              setImgNum(0);
            }}
            onMouseEnter={e => {
              showImg(e);
            }}
          >
            辽宁科学技术出版社
          </p>
          <p
            data-img="4"
            onMouseLeave={() => {
              setImgNum(0);
            }}
            onMouseEnter={e => {
              showImg(e);
            }}
          >
            2019.11
          </p>
          <p
            data-img="5"
            onMouseLeave={() => {
              setImgNum(0);
            }}
            onMouseEnter={e => {
              showImg(e);
            }}
          >
            1994.09
          </p>
        </div>
      </div>

      <div className={styles.showImg}>
        {imgNum !== 0 && !Number.isNaN(imgNum) ? (
          <div>
            <img src={require(`../../../assets/picture/colorCard/${imgNum}.png`)}></img>
            <img src={require('../../../assets/picture/colorCard/6.png')}></img>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className={styles.down}>
        <img
          src={require('../../../assets/picture/The-misty-eyed-and -delicate-pencil-marks-of-Lee-Kyutae.jpg')}
        ></img>
        <div className={styles.mask}></div>
        <div className={`${show[0] ? styles.show : styles.unshow}`}>感受色彩</div>
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
