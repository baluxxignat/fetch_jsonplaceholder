const url = 'https://jsonplaceholder.typicode.com/posts';
const getPostsOfUser = (id) =>  fetch(url + '?userId=${id}').then(response => response.json());
export {getPostsOfUser}