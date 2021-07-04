import {useEffect, useState} from "react";
import {getUsers} from "../servises/API";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";
import UserDetails2 from "../user-details-2/UserDetails2";

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]));
    }, []);

return (
    <div>
        {
            users.map((value => <User key={value.id} item={value} />))
        }

        <Switch>
            {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
            <Route path={'/users/:id'} component={UserDetails2}/>
        </Switch>

    </div>
   );
 }