import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";

function App() {


  let [members, setMembers]  = useState([]);

  


  return (
      <div>

        <Users/>

      </div>

  );
}

export default App;
