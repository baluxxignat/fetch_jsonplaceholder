import {useEffect, useState} from "react";
import {getPosts} from "../api/API";
import Post from "../post/Post";

export default function Posts({id}) {

    let [posts, setPosts] = useState([])
    
    useEffect(() => {
        getPosts().then((value => {
            setPosts(value.data);
            //console.log(value.data);
        }))
    }, [])

    let filter  = posts.filter(value => value.userId === id);

return (
    <div>
        {
            filter.map(value => <Post key={value.id} text = {value} />)
        }
    </div>
   );
 }