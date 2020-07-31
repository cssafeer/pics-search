import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID 6FPr8gQAUnUtwKGuKdkD9zp4sfMQXe_PnZsopOJ1I4U'
    }
});
