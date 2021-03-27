import axios from 'axios';

const instance = axios.create({
    /*
        axios.defaults.baseURL = '';
    axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    */

    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//Can use interceptors here too. When instancing this "axios" file, we can use it like a specialization, for authentication instances or something like that 
//instance.interceptors.request....

export default instance;