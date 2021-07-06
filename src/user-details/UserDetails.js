import {useEffect, useState} from "react";
import {getUserId} from "../servises/API";
import {Route, Switch, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Posts from "../posts/Posts";

export default function UserDetails(props) {

    let [user, setUser] = useState({});
    let {id} = useParams();

    useEffect(()=> {
        getUserId(id).then(value => {
            setUser ({...value.data});
        })
    }, [id]);

return (
    <div>
            <br/>
            <div>{user.name}</div>
            <br/>
            <div>{user.email}</div>
            <br/>
            <div>{user.phone}</div>
        {
            <Link to={'/users/'+ id + '/posts'}>USER POSTS</Link>
        }
        <Switch>
            <Route path={'/users/' + id + '/posts'} component={()=>{
                console.log('asdad');
                return <Posts id={id}/>
            }}/>
        </Switch>
    </div>
   );
 }