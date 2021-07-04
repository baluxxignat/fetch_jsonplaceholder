import axios from "axios";

let postAllInfo = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


const getUsers = () => postAllInfo('/users');
const getUserId = (id) => postAllInfo ('/users/' + id);

export {getUsers, getUserId };