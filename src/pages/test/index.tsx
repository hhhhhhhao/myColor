import React, { Component } from 'react';
import styles from './index.less';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Explain from '../explain/index';

export default class CSSTransitionDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>
          当前状态：{isShow ? '显示' : '隐藏'}
        </button>
        <SwitchTransition mode="out-in">
          <CSSTransition key={isShow ? 'on' : 'off'} classNames="explainShowBtn" timeout={1000}>
            {isShow ? <div>on</div> : <div>off</div>}
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
