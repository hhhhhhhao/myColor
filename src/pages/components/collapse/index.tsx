import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import { GlobalModelIF } from '@/interfaces/global';

interface CollapseProps {
    dispatch: Function,
    test: any,
}

const Collapse=(props: CollapseProps) =>{
    const [fold, setfold] = useState(false);
    const { dispatch, test } = props;
    useEffect(() => {
        dispatch({
            type: 'myColor/fetch',
            payload: {
                page: 1,
            },
        })
    })

    return (
        <div className={styles.word}>
            <div className={styles.wordTitle}>色觉测试</div>
            <div className={styles.wordSubTitle}>
                <p>请成为永恒的白昼，用你太阳的光线做我的日落，与你永不分离。请成为看不见的黄昏，让我的不安和渴望成为你迟疑不决的暮色，成为你不确定的色彩。</p>
            </div>
            <Button className={styles.wordButton} onClick={() => { setfold(!fold) }}>介绍</Button>
            <div className={`${styles.collapse} ${fold ? styles.unfoldToFold : styles.foldToUnfold}`}>{test}</div>
        </div>
    )
}

function mapStateToProps(state: { myColor: GlobalModelIF }) {
    const { test } = state.myColor.test;
    return {
        test
    };
}

export default connect(mapStateToProps)(Collapse);

