import router from 'umi/router';

export function goToListPage(path: string) {
  router.push(path);
}

export function foldFunc(fold: boolean | null, payload: boolean | null, dispatch: Function) {
  if (fold === null && payload === true) {
    dispatch({
      type: 'myColor/UNFOLDANDROLD',
      payload: true,
    });
  } else if (fold === true && payload === false) {
    dispatch({
      type: 'myColor/UNFOLDANDROLD',
      payload: false,
    });
    setTimeout(() => {
      dispatch({
        type: 'myColor/UNFOLDANDROLD',
        payload: null,
      });
    }, 2000);
  }
}
