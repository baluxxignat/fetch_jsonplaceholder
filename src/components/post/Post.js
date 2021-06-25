export default function Post({item}) {
return (
    <div>
        <h1>{item.id}</h1> - <h2>{item.title}</h2>
        <button>PUSH FOR MORE INFO</button>
    </div>
   );
 }