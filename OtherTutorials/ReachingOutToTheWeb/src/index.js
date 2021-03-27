import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
    request => {
        console.log(request);
        //Edit request config
        //Got to return the request, or else it will block the further requests from child components
        return request;
    }
    , error => {
        console.log(error);
        //enables to log globally the error, in case we want to log to a place, or show the log in the UI
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        console.log(response);
        return response;
    }
    , error => {
        console.log(error);
        //enables to log globally the error, in case we want to log to a place, or show the log in the UI
        return Promise.reject(error);
    }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

