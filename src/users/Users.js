import {useEffect, useState} from "react";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import Userposts from "../user-posts/Userposts";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(response => {
                         setUsers([...response])
                    });
    },[]);

return (
    <div>
        {
            users.map((value => <User key={value.id} props={value}/>))
        }

        <Switch>
            <Route path={'/users/:id'} component={Userposts}/>
        </Switch>

    </div>
   );
 }