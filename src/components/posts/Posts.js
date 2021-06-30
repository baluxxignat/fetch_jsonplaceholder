import User from "../user/User";
import {useEffect, useState} from "react";
import {getPosts} from "../api/API";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([])
    
    useEffect(() => {
        getPosts().then((value => {
            setPosts(value.data);
            console.log(value.data);
        }))
    }, [])

return (
    <div>
        posts.map(value => <Post text = {value} />)
    </div>
   );
 }