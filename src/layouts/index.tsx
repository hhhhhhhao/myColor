import React from 'react';
import { Menu } from 'antd';
import router from 'umi/router';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <Menu mode="horizontal" defaultSelectedKeys={['introduce']} className={styles.header}>
        <Menu.Item key="introduce" onClick={()=>{router.push('/')}}>
          介绍与解读
        </Menu.Item>
        <Menu.Item key="test" onClick={()=>{router.push('/test')}}>
          测试
        </Menu.Item>
        <Menu.Item key="policy" onClick={()=>{router.push('/policy')}}>
          政策解读
        </Menu.Item>
        <Menu.Item key="analysis" onClick={()=>{router.push('/analysis')}}>
          数据分析
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  );
};

export default BasicLayout;
