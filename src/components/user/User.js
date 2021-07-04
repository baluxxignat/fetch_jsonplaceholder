import {Link} from "react-router-dom";

export default function User({item, item: {name, id}}) {
return (
    <div>
        {name}
        {/*- <Link to={'/users/'+ id}>Details</Link>*/}
        - <Link to={
        {
            pathname: '/users/'+ id,  //переводит на Роут '/users/:id'
            state: item       //кроме самого роута, мы ПРОКИДУЕМ стэйт через тот же Роут в Юзердетаил2
        }
    }>Details</Link>
    </div>
   );
 }