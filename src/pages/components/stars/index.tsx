import React from 'react';
import styles from './index.less';

type propsType = {
  num: number;
};
const Stars = (props: propsType) => {
  const randomNumber = (min: number, max: number) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };
  const starsVariable = (): React.CSSProperties => {
    const widthVal = randomNumber(1, 5);
    const topVal = randomNumber(0, document.body.clientHeight * 2);
    const heightVal = randomNumber(0, document.body.clientWidth * 2);
    const opacityVal = Math.random().toFixed(1);
    const filterVal = Math.random().toFixed(2);

    return {
      position: 'absolute',
      top: String(topVal - 850) + 'px',
      left: String(heightVal - 850) + 'px',
      borderRadius: '50%',
      opacity: String(opacityVal),
      width: String(widthVal) + 'px',
      height: String(widthVal) + 'px',
      filter: 'blur(' + String(filterVal) + 'px)',
    };
  };

  return (
    <div>
      {[...Array(props.num)].map((value, index) => {
        return (
          <div
            style={starsVariable()}
            key={index}
            className={`${styles.stars} ${styles.blinking}`}
          ></div>
        );
      })}
    </div>
  );
};

export default React.memo(Stars, () => {
  return true;
});
