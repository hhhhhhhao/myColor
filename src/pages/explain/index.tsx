import React from 'react';
import { UpCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
import { GlobalModelIF } from '@/interfaces/global';
import { connect } from 'dva';

interface IndexProps extends Pick<GlobalModelIF, 'dispatch'> {}

const Index = (props: IndexProps) => {
  const { dispatch } = props;

  return (
    <div className={styles.normal}>
      <div
        onClick={() => {
          dispatch({ type: 'myColor/EXPLAINSHOWANDUNSHOW' });
        }}
        className={styles.up}
      >
        <div>向上</div>
        <UpCircleOutlined />
      </div>
      <div className={styles.one}></div>
      <div className={styles.two}></div>
      <div className={styles.three}></div>
      <div className={styles.four}></div>
    </div>
  );
};

function mapStateToProps(state: { myColor: GlobalModelIF }) {
  const { explainShow } = state.myColor;
  return {
    explainShow,
  };
}

export default connect(mapStateToProps)(Index);
