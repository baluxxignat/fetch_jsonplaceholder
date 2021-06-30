import './User.css'
import {useState} from "react";
import Posts from "../posts/Posts";

const Openinfo = ({phone}) => {
    return (<div> {phone}</div>)
}

export default function User({inn}) {
    let [toggle, setToggle] = useState(false);
    const onToggle = () => setToggle(!toggle);

    return (
        <div className={'wrap'}>
            <div> {inn.id} - {inn.name}</div>
            <div>
                <button onClick={onToggle }>OPEN DETAILS</button>
            </div>
            {toggle && <div className={'wrap'}>
                <Openinfo phone={inn.phone}/>
                <button>OPEN POSTS</button>
            </div>}
            <Posts/>
        </div>
    );
}