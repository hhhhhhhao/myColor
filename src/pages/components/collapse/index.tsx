import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import { CloseSquareOutlined } from '@ant-design/icons';
import { GlobalModelIF } from '@/interfaces/global';
import { foldFunc } from '@/utils/general';
interface CollapseProps extends Pick<GlobalModelIF, 'dispatch' | 'fold' | 'test'> {}

const Collapse = (props: CollapseProps) => {
  const { dispatch, test, fold } = props;

  return (
    <div className={styles.word}>
      <div className={styles.wordTitle}>色觉测试</div>
      <div className={styles.wordSubTitle}>
        <p>
          请成为永恒的白昼，用你太阳的光线做我的日落，与你永不分离。请成为看不见的黄昏，让我的不安和渴望成为你迟疑不决的暮色，成为你不确定的色彩。
        </p>
      </div>
      <Button
        className={styles.wordButton}
        onClick={() => {
          foldFunc(fold, true, dispatch);
        }}
      >
        介绍
      </Button>
      <div
        className={`${styles.collapse} ${
          fold === true ? styles.unfoldToFold : fold === false ? styles.foldToUnfold : ''
        }`}
      >
        {fold ? (
          <div className={styles.board}>
            <CloseSquareOutlined
              className={styles.closeButton}
              onClick={() => {
                foldFunc(fold, false, dispatch);
              }}
            />
            <p className={styles.boardWord}>{test}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state: { myColor: GlobalModelIF }) {
  const { test, fold } = state.myColor;
  return {
    test,
    fold,
  };
}

export default connect(mapStateToProps)(Collapse);
