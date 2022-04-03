import React, { useRef } from 'react';
import styles from './index.less';
import { GlobalModelIF } from '@/interfaces/global';
import { connect } from 'dva';
import Illustration from './components/illustration/index';
import { ScrollBar } from './components/scrollBar/index';
import { debounce } from '@/utils/general';
import Two from './two/index';
import Three from './three/index';

interface IndexProps extends Pick<GlobalModelIF, 'dispatch' | 'fold' | 'explainShow'> { }

const Index = (props: IndexProps) => {
  const scrollBarRef = useRef<any>(null)
  const { dispatch, fold, explainShow } = props;
  //44
  //-669.6000366210938
  //-1383.2000732421875
  //-2096.800048828125
  //-2810.400146484375
  return (
    <div className={styles.normal}>
      <div className={styles.scrollSnap} onScroll={() => {
        debounce(() => {
          switch (Math.ceil(Number(document.getElementById('mainPage1')?.getBoundingClientRect().y))) {
            case 48:
              scrollBarRef.current.pageChange(0);
              break;
            case -665:
              scrollBarRef.current.pageChange(1);
              break;
            case -1379:
              scrollBarRef.current.pageChange(2);
              break;
            case -2092:
              scrollBarRef.current.pageChange(3);
              break;
          }
        }, 500)()

      }}>
        <div className={styles.first} id="mainPage1">
          <Illustration></Illustration>
        </div>
        <div className={styles.second} id="mainPage2">
          <Two></Two>
        </div>
        <div className={styles.third} id="mainPage3">
          <Three></Three>
        </div>
        <div className={styles.fourth} id="mainPage4">
          4
        </div>
      </div>
      <ScrollBar barNum={4} ref={scrollBarRef}></ScrollBar>
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
