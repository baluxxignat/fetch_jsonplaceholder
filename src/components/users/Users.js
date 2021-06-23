import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                setUser(response)
            });

    }, []);

    return (
        <div>
            {
                users.map(user => <User item ={user}/> )
            }
        </div>

   );
 }