import './App.css';
import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import {getUsers} from "./components/api/API";

function App() {


  let [members, setMembers]  = useState([]);

  useEffect(() => {
      getUsers().then((value => {
          setMembers(value.data);
      }))
  }, [])


  return (
      <div>

        <Users members = {members} />

      </div>

  );
}

export default App;
