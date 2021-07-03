import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                setUsers(response)
            });
    }, []);


    return (
        <div>
            {
                users.map((value => <User key={value.id} userinfo={value}/>))
            }
        </div>
    );
}