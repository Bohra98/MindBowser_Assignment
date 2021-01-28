import axios from 'axios';
import { API_BASE } from './apiConstant';

const client = axios.create({
    baseURL: API_BASE,
});

const request = (options) => {
    const onSuccess = (response) => {
        console.debug('Request Successfull',response);
        return response;
    };

    const onError = (error) => {
        if(error.response){
            console.log('Status:', error.response.status);
            console.log('Data:', error.response.data);
            console.log('Headers:', error.response.headers); 
        }else{
            console.log('Error Message:', error.message);
        }
        return Promise.reject(error.response || error.message);
    };
    return client(options)
     .then(onSuccess)
     .catch(onError);
};

export default request;