import './Post.css';
export default function Post({item, print_body}) {
return (
    <div>
        <div className={'wrap'}>
            <h1>{item.id}</h1> - <h2>{item.title}</h2>
        </div>

        <div><button className={'btn'} onClick={() => {
            print_body(item.id);
        }}>PUSH FOR MORE INFO</button></div>
    </div>
   );
 }
