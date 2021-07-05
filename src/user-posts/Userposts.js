import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPostsOfUser} from "../api/API";

export default function Userposts() {
//console.log(props);   // структура объекта Хистори
    
    let [posts, setPosts] = useState([]);
    let {id} = useParams();
    //console.log(id);
    useEffect(() => {
         getPostsOfUser(id).then(response => {
                         setPosts([...response])
                        console.log(response);
                    });

    }, [id]);


    return (
    <div>
        {
            JSON.stringify(posts)
        }
    </div>
   );
 }