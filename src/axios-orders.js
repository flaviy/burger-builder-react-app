import axios from 'axios';

const instance = axios.create(
  {
    baseURL : 'https://react-my-burger-f531f.firebaseio.com',
  },
)

export default instance;
