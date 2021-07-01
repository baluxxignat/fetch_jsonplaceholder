import {getPosts} from "../api/API";
import {useEffect, useState} from "react";
import Post from "../post/Post";
import Comment from "../comment/Comment";

export default function Comments({id}) {
    let [comments, setComments] = useState([])

    useEffect(() => {
        getPosts().then((value => {
            setComments(value.data);
            //console.log(value.data);
        }))
    }, [])

    let filter2  = comments.filter(value => value.userId === id);

    return (
        <div>
            {
                filter2.map(value => <Comment key={value.id} item = {value} />)
            }
        </div>
    );
}