import {Link, Route, Switch} from "react-router-dom";
import Posts from "../posts/Posts";
export default function User({value: {name, id}}) {
    console.log(id);
    return (
    <div>
        {name}-
        <Link to={'/users/' + id}>DETAILS</Link>



    </div>
   );
 }