import React, { useState, useRef, useEffect } from 'react';
import styles from './index.less';

interface NumberCountsProps {
  nextNumber: number;
  barNum: number;
}
export const NumberCounts = (props: NumberCountsProps) => {
  const [slideStyle, setSlideStyle] = useState<{}>({ transform: 'translateY(0)' });
  const showRef = useRef(null);
  useEffect(() => {
    let slideDistance = (1 - props.nextNumber) * 30;
    setSlideStyle({
      transform: `translateY(${slideDistance}px)`,
      transition: `ease-in-out .5s`,
    });
  }, [props.nextNumber]);

  return (
    <div className={styles.outer}>
      <div>·</div>
      <div className={styles.normal}>
        <div className={styles.show} ref={showRef}></div>
        <div style={slideStyle} className={styles.numberArray}>
          {Array(props.barNum)
            .fill(1)
            .map((_, index) => (
              <div key={index} className={styles.number}>
                0{index + 1}
              </div>
            ))}
        </div>
      </div>
      <div>·</div>
    </div>
  );
};
