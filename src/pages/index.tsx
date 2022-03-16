import React, { useState } from 'react';
import styles from './index.less';
import Link from 'umi/link';
import Stars from '../pages/components/stars';
import Collapse from './components/collapse';
import { GlobalModelIF } from '@/interfaces/global';
import { connect } from 'dva';
import { DownCircleOutlined } from '@ant-design/icons';
import Explain from './explain/index';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { goToListPage } from '@/utils/general';

interface IndexProps extends Pick<GlobalModelIF, 'dispatch' | 'fold' | 'explainShow'> {}

const Index = (props: IndexProps) => {
  const { dispatch, fold, explainShow } = props;

  const skyDom = (
    <div>
      <div
        className={`${styles.sky} ${
          fold === true ? styles.unfoldToFoldSky : fold === false ? styles.foldToUnfoldSky : ''
        }`}
      >
        <Stars num={500}></Stars>
        <div style={{ position: 'relative' }} className={styles.illustration}>
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

      <div className={styles.collapseSky}>
        <Collapse></Collapse>
      </div>

      <div
        onClick={() => {
          dispatch({ type: 'myColor/EXPLAINSHOWANDUNSHOW' });
        }}
        className={styles.down}
      >
        {/* <Link to="/explain"></Link> */}
        <div>解读</div>
        <DownCircleOutlined /* onClick={() => { goToListPage('/explain') }} */ />
      </div>
    </div>
  );

  return (
    <div className={styles.normal}>
      <SwitchTransition mode="out-in">
        <CSSTransition key={explainShow ? 'on' : 'off'} classNames="explainShowBtn" timeout={1000}>
          {explainShow ? <Explain></Explain> : skyDom}
        </CSSTransition>
      </SwitchTransition>
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
