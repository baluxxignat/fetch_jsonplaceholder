import Post from "../post/Post";

export default function Posts({items, print_body}) {

    return (

        <div>
        {
            items.map(post => <Post key = {post.id} item={post} print_body={print_body}/>)
        }
        </div>
    );
 }

