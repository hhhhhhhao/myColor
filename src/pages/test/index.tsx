import React, { useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { connect } from 'dva';
import ColorTest from './colorTest/index';
import WordTest from './wordTest/index';
import { SwapOutlined } from '@ant-design/icons';

export const Test = () => {
  const [startTest, setStartTest] = useState(false);
  const [startOrBack, setStartOrBack] = useState(0);
  return (
    <div className={styles.normal}>
      <div
        className={styles.rightBar}
        onClick={() => {
          setStartTest(!startTest);
        }}
        onMouseEnter={() => {
          setStartOrBack(1);
        }}
        onMouseLeave={() => {
          setStartOrBack(2);
        }}
      >
        <SwapOutlined
          className={`${styles.switch} ${
            startOrBack === 0 ? '' : startOrBack === 1 ? styles.switchLeft : styles.switchRight
          }`}
        />
        <div
          className={`${styles.startOrBack} ${
            startOrBack === 0
              ? ''
              : startOrBack === 1
              ? styles.startOrBackShow
              : styles.startOrBackFade
          }`}
        >
          {startTest ? '返回' : '开始测试'}
        </div>
      </div>

      <div className={styles.colorTest}>
        {startTest ? <ColorTest></ColorTest> : <WordTest></WordTest>}
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test);
