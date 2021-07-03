import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(response => {
                         setComments(response)
                    });

    }, []);

return (
    <div>
        {
            comments.map((value => <Comment key={value.id} userComments={value}/>))
        }
    </div>
   );
 }