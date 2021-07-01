import './User.css'
import {useState} from "react";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

const Openinfo = ({phone}) => {
    return (<div> {phone}</div>)
}

export default function User({inn}) {

    let [toggle, setToggle] = useState(false);
    const onToggle = () => setToggle(!toggle);

    let [toggle2, setToggle2] = useState(false);
    const onToggle2 = () => setToggle2(!toggle2);

    let [toggle3, setToggle3] = useState(false);
    const onToggle3 = () => setToggle3(!toggle3);

    return (
        <div className={'wrap'}>

            <div>
                {inn.id} - {inn.name}</div>

            <div>
                <button onClick={onToggle}>OPEN DETAILS</button>
            </div>

            {
                toggle && <div className={'wrap'}>
                    <Openinfo phone={inn.phone}/>
                    <div>
                        <button onClick={onToggle2}>OPEN POSTS</button>
                    </div>
                    {
                        toggle2 && <div>
                            <Posts id={inn.id}/>
                            <div>
                                <button onClick={onToggle3}>OPEN COMMENTS</button>
                            </div>
                            {
                                toggle3 && <div>
                                    <Comments id={inn.id}/>
                                </div>
                            }
                        </div>
                    }
                </div>
            }
        </div>

    );
}