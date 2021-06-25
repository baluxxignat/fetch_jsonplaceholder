import axios from "axios";

let postInstance = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const  getPosts = () => postInstance();
const  getPost = (id) => postInstance('/' + id);
export {getPosts, getPost};