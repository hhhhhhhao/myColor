import axios from 'axios'

function getDate() {
    return new Promise((resolve, reject) => {
        axios.get('/api')
            .then((res) => {
                if(res.status==200){
                    resolve(res);
                }
                reject('error');
            })
    })

}

export default getDate;