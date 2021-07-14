import {useState} from "react";

export default function Forms({users}) {


    let [user, setUser] = useState({});
    let userChoose = (e) => {
        //console.log(e.target.value);
        setUser (users.find(user => user.id === e.target.value))
    };

return (
    <div>
        <form onSubmit={userChoose}>
            <select value={user} onChange={userChoose}>
                {
                    users.map(value => <option value={value.id} key={value.id} >{value.name}</option>)
                }
            </select>
        </form>
    </div>
   );
 }