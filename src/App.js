import {useEffect, useState} from "react";
import {getPosts, getPost} from "./services/API";
import Posts from "./components/posts/Posts";
import Body from "./components/body/Body";

export default function App() {

   let [posts, setPosts] = useState([]);
   let [body, setBody] = useState(null);

   
   function print_body(id) {
       console.log(id);
       getPost(id).then(value => console.log(value.data))

   }


   useEffect(() => {
       getPosts().then(response =>{
           setPosts(response.data);
       })
   },[]);
   

    return (
      <div>

        <Posts items = {posts} print_body={print_body}/>
        <hr/>
        {
            body && <Body groot = {body}/>
        }


      </div>
  );
}


