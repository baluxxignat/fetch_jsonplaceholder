import axios from "axios";

let postInstance = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const  getComments = () => postInstance('/comments')
const  getPosts = () => postInstance('/posts');
const  getUsers = () => postInstance('/users');
export {getUsers, getPosts, getComments};