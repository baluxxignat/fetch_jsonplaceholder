import {useEffect, useState} from "react";
import {getPosts, getPost} from "./services/API";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

export default function App() {

   let [posts, setPosts] = useState([]);
   let [body, setBody] = useState(null);
   
   function print_body(id) {
       getPost(id).then(value => setBody(value.data))
       console.log(id);
   }


   useEffect(() => {
       getPosts().then(response =>{
           setPosts(response.data);


       })
       
   },[]);
   



    return (
      <div>

        <Posts items = {posts} />
        <Post/>


      </div>
  );
}


