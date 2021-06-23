import Post from "../post/Post";
import {useEffect, useState} from "react";

export default function Posts({id}) {

    let [posts, setPost] = useState([]);
    let [flag, setFlag] = useState(true);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => {
                setPost(response)
            });

    }, []);

    function click () {
        setFlag(!flag);
        
    }



    return (
    <div>
        {
            flag && posts.filter(value => value.userId === id).map(user => <Post key={user.id} info ={user}/> )
        }

        <button onClick={click}>Clik</button>
    </div>
   );
 }