// const getUsers = () => {
//     return  fetch('https://jsonplaceholder.typicode.com/users')
//              .then(response => response.json());
// };
// const getUser = (id) => {
//     return  fetch('https://jsonplaceholder.typicode.com/users' +id)
//         .then(response => response.json());
// };
// export {getUser, getUsers};


import axios from "axios";

let axe = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const  getUsers = () => axe();
const  getUser = (id) => axe('/' + id);
export {getUsers, getUser};