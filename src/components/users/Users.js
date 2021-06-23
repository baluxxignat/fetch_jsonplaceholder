import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUser] = useState([]);
    let [obj, setObj] = useState({
        counter: 0,
        name: 'Vasyl'
    });
  const inc = () => {
      setObj({...obj, counter: obj.counter + 1, counter2: ''})
  }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                setUser(response)
            });

    }, []);

    return (
        <div>
            <h1>Counter: {obj.counter}</h1>
            <button onClick={inc}>Enter</button>
            {
                users.map(user => <User key={user.id} item ={user}/> )
            }


        </div>

   );
 }