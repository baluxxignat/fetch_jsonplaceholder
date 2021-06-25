import Post from "../post/Post";

export default function Posts({posts}) {

    return (
        {
            posts.map(value => <Post toPost={value}/>)
        }
    );
 }