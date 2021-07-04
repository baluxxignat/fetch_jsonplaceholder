import {Link} from "react-router-dom";

export default function User({props}) {
return (
    <div>
        {props.name}
        - <Link to={'/users/' + props.id}>User Posts </Link >
    </div>
   );
 }