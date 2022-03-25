import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { GlobalModelIF } from '@/interfaces/global';
import Stars from '../stars/index';
import Collapse from '../collapse/index';
import { DownCircleOutlined } from '@ant-design/icons';
import { scrollToHash } from '@/utils/general';

interface IndexProps extends Pick<GlobalModelIF, 'dispatch' | 'fold' | 'explainShow'> {}

const Illustration = (props: IndexProps) => {
  const { dispatch, fold, explainShow } = props;

  return (
    <div className={styles.normal}>
      <div
        className={`${styles.sky} ${
          fold === true ? styles.unfoldToFoldSky : fold === false ? styles.foldToUnfoldSky : ''
        }`}
      >
        <div style={{ position: 'relative' }} className={styles.illustration}>
          <div style={{ zIndex: '-1' }}>
            <Stars num={500}></Stars>
          </div>
          <img src={require('../../../assets/picture/cat.gif')} className={styles.cat}></img>
          <img
            src={require('../../../assets/picture/houseandpeople.png')}
            className={styles.house}
          ></img>
          <div className={styles.oricl}></div>
        </div>
        <div className={styles.cloud}>
          <img src={require('../../../assets/picture/cloud1.png')} className={styles.cloud1}></img>
          <img src={require('../../../assets/picture/cloud2.png')} className={styles.cloud2}></img>
          <img src={require('../../../assets/picture/cloud3.png')} className={styles.cloud3}></img>
          <img src={require('../../../assets/picture/cloud4.png')} className={styles.cloud4}></img>
          <img src={require('../../../assets/picture/cloud5.png')} className={styles.cloud5}></img>
        </div>
      </div>

      <div className={styles.collapseSky}>
        <Collapse></Collapse>
      </div>

      <div
        onClick={() => {
          dispatch({ type: 'myColor/EXPLAINSHOWANDUNSHOW' });
          scrollToHash('2');
        }}
        className={styles.down}
      >
        {/* <Link to="/explain"></Link> */}
        <div className={styles.downWord}>解读</div>
        <DownCircleOutlined
          className={styles.downIcon} /* onClick={() => { goToListPage('/explain') }} */
        />
      </div>
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

export default connect(mapStateToProps)(Illustration);
