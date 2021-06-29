import axios from "axios";

let postInstance = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const  getPosts = () => postInstance('/posts');
const  getUsers = () => postInstance('/users');
const  getUser = (id) => postInstance('/users/' + id);
export {getUsers, getUser, getPosts};