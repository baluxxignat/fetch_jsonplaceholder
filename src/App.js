import {useEffect, useState} from "react";
import Forms from "./components/Forms";

export default function App() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(response => {
                         setUsers([...response])

                    });
    }, []);


    return (
      <div>
          <Forms users={users}/>
      </div>
  );
}


