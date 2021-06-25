import {useEffect, useState} from "react";
import {getPosts} from "./services/API";
import Posts from "./components/posts/Posts";

export default function App() {

   let [posts, setPosts] = useState([]);
   let [body, setBody] = useState(null);
   
   function print_body() {
       
   }


   useEffect(() => {
       getPosts().then(response =>{
           setPosts(response.data);


       })
       
   },[]);
   



    return (
      <div>

        <Posts items = {posts} />



      </div>
  );
}


