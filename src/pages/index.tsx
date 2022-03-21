import React, { useState } from 'react';
import styles from './index.less';
import { GlobalModelIF } from '@/interfaces/global';
import { connect } from 'dva';
import Illustration from './components/illustration/index';
import { ScrollBar } from './components/scrollBar/index';

interface IndexProps extends Pick<GlobalModelIF, 'dispatch' | 'fold' | 'explainShow'> {}

const Index = (props: IndexProps) => {
  const { dispatch, fold, explainShow } = props;

  return (
    <div className={styles.normal}>
      <div className={styles.scrollSnap}>
        <div className={styles.first}>
          <Illustration></Illustration>
        </div>
        <div className={styles.second} id="second">
          2
        </div>
        <div className={styles.third}>3</div>
        <div className={styles.fourth}>4</div>
        <div className={styles.fifth}>5</div>
      </div>
      <ScrollBar barNum={4}></ScrollBar>
    </div>
  );
};

function mapStateToProps(state: { myColor: GlobalModelIF }) {
  const { fold, explainShow } = state.myColor;
  return {
    fold,
    explainShow,
  };
}

export default connect(mapStateToProps)(Index);
