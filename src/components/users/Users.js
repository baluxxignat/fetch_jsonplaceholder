import User from "../user/User";

export default function Users({members}) {
    // console.log(members);
    return (
    <div>
        {
            members.map((value) => <User key={value.id} inn = {value} />)
        }
    </div>
   );
 }