import axios from "axios";


let postInstance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`});

 const getUsers = () => postInstance (`/users`);
 const getUserId = (id) => postInstance (`/users/` + id);
 const getUserPosts = (id) => postInstance (`/users/` + id + '/posts');

 export {getUsers, getUserId, getUserPosts};