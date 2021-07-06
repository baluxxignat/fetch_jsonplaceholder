export default function Post({value}) {
    console.log(value);
return (
    <div>
        {value.id} {value.title}
    </div>
   );
 }