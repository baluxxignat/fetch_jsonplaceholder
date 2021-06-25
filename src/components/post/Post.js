export default function Post({toPost}) {
return (
    <div>
        <h1>{toPost.id}</h1> - <h2>{toPost.title}</h2>
        <button>PUSH FOR MORE INFO</button>
    </div>
   );
 }