import React, { useState, useImperativeHandle, useRef } from 'react';
import styles from './index.less';
import { NumberCounts } from '../NumberCounts/index';
import { scrollToHash } from '@/utils/general';

interface scrollBarProps {
  barNum: number;
  onChange?: Function /*do something with the key of div*/;
}

export const ScrollBar = React.forwardRef<HTMLInputElement | any, scrollBarProps>((props, ref) => {
  const scrollBarRef = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return { pageChange }
    },
  )
  const [barStyle, setbarStyle] = useState<{}>({ transform: 'translateY(0)' });
  const [numberCountsStyle, setnumberCountsStyle] = useState<{}>({ transform: 'translateY(0)' });
  const [nextNumber, setnextNumber] = useState(1);
  const pageChange = (ind: number) => {
    setbarStyle({
      transform: `translateY(${ind * 100}px)`,
      transition: `ease-in-out .5s`,
    });
    setnumberCountsStyle({
      transform: `translateY(${ind * 100}px)`,
      transition: `ease-in-out .5s`,
    });
    setnextNumber(ind + 1);

    scrollToHash(String(ind + 1))
  }
  
  return (
    <div className={styles.normal} ref={scrollBarRef}>
      <div className={styles.numberCounts} style={numberCountsStyle}>
        <NumberCounts nextNumber={nextNumber} barNum={props.barNum}></NumberCounts>
      </div>
      <div className={styles.nowBar} style={barStyle}></div>
      <div className={styles.scrollBar}>
        {Array(props.barNum)
          .fill(1)
          .map((_, ind) => (
            <div
              key={ind + 1}
              className={styles.bar}
              onClick={() => { pageChange(ind) }}
            ></div>
          ))}
      </div>
    </div>
  );
});
