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

export const scrollToHash = (elemTo: string) => {
  if (elemTo) {
    let anchorElement = document.getElementById(elemTo);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const debounce=(fn:Function, ms:number) =>{
  let timer:ReturnType<typeof setTimeout>|null;
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(arguments)
      timer = null;
    }, ms);
  }
}