import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-548c6.firebaseio.com/'
});

export default instance;