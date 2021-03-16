import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-313ab.firebaseio.com/'
});

export default instance;