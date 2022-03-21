import React, { useState } from 'react';
import styles from './index.less';
import { NumberCounts } from '../NumberCounts/index';

export const ScrollBar = (props: any) => {
  const [barStyle, setbarStyle] = useState<{}>({ transform: 'translateY(0)' });
  const [numberCountsStyle, setnumberCountsStyle] = useState<{}>({ transform: 'translateY(0)' });
  const [nextNumber, setnextNumber] = useState(1);
  return (
    <div className={styles.normal}>
      <div className={styles.numberCounts} style={numberCountsStyle}>
        <NumberCounts nextNumber={nextNumber} barNum={props.barNum}></NumberCounts>
      </div>
      <div className={styles.nowBar} style={barStyle}></div>
      <div className={styles.scrollBar}>
        {Array(props.barNum)
          .fill(1)
          .map((val, ind) => (
            <div
              key={ind + 1}
              className={styles.bar}
              onClick={() => {
                setbarStyle({
                  transform: `translateY(${ind * 100}px)`,
                  transition: `ease-in-out .5s`,
                });
                setnumberCountsStyle({
                  transform: `translateY(${ind * 100}px)`,
                  transition: `ease-in-out .5s`,
                })
                setnextNumber(ind + 1);
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};
