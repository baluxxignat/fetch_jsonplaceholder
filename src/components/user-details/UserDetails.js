import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserId} from "../servises/API";

export default function UserDetails(props) {


    // let {match:{params:{id}}} = props;     //1 способ

    let {id}= useParams();          //2 способ
    // console.log(id);

    let [user, setUser] = useState({});

    useEffect(()=>{
        getUserId(id).then(value => {
            setUser({...value.data});
        })
    },[id]);

return (
    <div>
        {
            JSON.stringify(user)
        }
    </div>
   );
 }