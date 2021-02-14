import axios from 'axios';

// const BACKEND_URL = "http://localhost:5000/posts";

// export const fetchMemes = () => axios.get(BACKEND_URL);
// export const createMeme = (newMeme) => axios.post(BACKEND_URL, newMeme);

const  Axios=axios.create({
    baseURL:'http://localhost:5000'
});

export default Axios;