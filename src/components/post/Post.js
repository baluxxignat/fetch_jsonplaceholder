import './Post.css';
export default function Post({item}) {
return (
    <div>
        <div className={'wrap'}>
            <h1>{item.id}</h1> - <h2>{item.title}</h2>

        </div>
        <div><button>PUSH FOR MORE INFO</button></div>
    </div>
   );
 }
