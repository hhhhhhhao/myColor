import axios from 'axios';

export function getData() {
  return new Promise((resolve, reject) => {
    axios.get('/api').then(res => {
      if (res.status == 200) {
        resolve(res);
      }
      reject('error');
    });
  });
}
