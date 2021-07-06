import {useEffect, useState} from "react";
import {getUserPosts} from "../servises/API";
import Post from "../post/Post";
import {Route, Switch, useParams} from "react-router-dom";

export default function Posts({id}) {

    let  [posts, setPosts] = useState([]);
    console.log(id);

    useEffect(()=>{
        getUserPosts(id).then(value => setPosts(value.data))
    },[id]);

return (
    <div>
        {
             posts.map(value => <Post key={value.id} value={value}/>)
        }

    </div>
   );
 }