import React, { useState } from 'react';
import styles from './index.less';
import { GlobalModelIF } from '@/interfaces/global';
import { connect } from 'dva';
import Illustration from './components/illustration/index';

interface IndexProps extends Pick<GlobalModelIF, 'dispatch' | 'fold' | 'explainShow'> {}

const Index = (props: IndexProps) => {
  const { dispatch, fold, explainShow } = props;

  return (
    <div className={styles.normal}>
      <div className={styles.first}>
        <Illustration></Illustration>
      </div>
      <div className={styles.second} id="second">
        2
      </div>
      <div className={styles.third}></div>
      <div className={styles.fourth}></div>
      <div className={styles.fifth}></div>
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
