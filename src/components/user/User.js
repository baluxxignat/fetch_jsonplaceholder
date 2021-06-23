import Posts from "../posts/Posts";
import './user.css';

export default function User({item}) {
    return (
        <div>

            <div className={'big'}>{item.id} - {item.name}</div>
            <Posts id={item.id}/>

            <div/>
        </div>
    );
}