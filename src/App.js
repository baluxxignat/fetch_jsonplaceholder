import {useEffect, useState} from "react";
import {getPosts} from "./services/API";
import Posts from "./components/posts/Posts";

export default function App() {

   let [posts, setPosts] = useState([]);


   useEffect(() => {
       getPosts().then(response =>{
           setPosts(response);


       })
       
   },[]);



    return (
      <div>

        <Posts posts = {posts} />



      </div>
  );
}


