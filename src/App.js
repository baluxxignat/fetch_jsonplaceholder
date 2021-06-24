import {useEffect, useState} from "react";
import {getUsers} from "./services/API";

export default function App() {

   let [users, setUsers] = useState([]);
   useEffect(() => {
       getUsers().then(response =>{
           setUsers(response);

       })
       
   },[]);




    return (
      <div>


      </div>
  );
}


