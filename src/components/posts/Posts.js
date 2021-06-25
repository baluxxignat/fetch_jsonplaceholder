import Post from "../post/Post";
import {logDOM} from "@testing-library/react";

export default function Posts({items}) {

    return (

        <div>

        {
            items.map(post => <Post item={post}/>)

        }
        </div>
    );
 }



// export default function Users({items, selectUser}) {
//
//     return (
//         <div>
//
//             {
//                 items.map(u => <User key ={u.id} item={u} selectUser={selectUser} />)
//             }
//
//         </div>
//     );
// }