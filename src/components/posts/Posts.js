import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(()=> {
         fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(response => {
                         setPosts(response)
                    });

    }, []);

return (
    <div>
        {
            posts.map((value => <Post key={value.id} userPosts={value}/>))
        }
    </div>
   );
 }