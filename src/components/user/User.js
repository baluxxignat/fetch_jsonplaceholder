import './User.css'
import {useState} from "react";
import {getUser} from "../api/API";

// const Openinfo = ({phone}) => {
//     return (<div> {phone}</div>)
// }

export default function User({inn}) {

    // let [toggle, setToggle] = useState(false);
    // const onToggle = () => setToggle(!toggle);



    let [user, setUser] = useState(null);

    // console.log(user);


    const onGetUser = (userId) => {
        getUser(userId).then(value => setUser(value.data))
    }


    return (
        <div className={'wrap'}>
            <div> {inn.id} - {inn.name}</div>
            <div>
                <button onClick={() =>
                    onGetUser(inn.id) }>
                    OPEN INFO</button>
            </div>
            {/*{toggle && <Openinfo phone={inn.phone}/>}*/}
            {
                user && <div>
                    {user.email} - {user.phone}
                    <button>OPEN POSTS</button>
                </div>
            }
        </div>
    );
}