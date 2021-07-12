import {useSelector, useDispatch} from "react-redux";
import './App.css';
import {useEffect, useState} from "react";


const Child = () => {
    const counter = useSelector((state) => state.counterValue);
    //console.log(counter);
    const posts = useSelector((state) => state.posts);
    return (
        <div >
            <h1>{counter}</h1>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <p>{post.url}</p>

                    </div>
                ))
            }
        </div>
    )
}

function App() {
    const dispatch = useDispatch();

    let [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(response => {
                setPost([...response])
                //console.log(posts);
            });

    }, []);

    dispatch ({
        type: 'SET_POST',
        payload: posts,
    })

    return (

        <div >

            <Child/>

            <div className={'d-flex'} >
                <button onClick={() => {
                    dispatch({type: 'INC'})
                }}>INC
                </button>

                <button onClick={() => {
                    dispatch({type: 'DEC'})
                }}>DEC
                </button>

                <button onClick={() => {
                    dispatch({type: 'RESET'})
                }}>RESET
                </button>

            </div>

            {/*<div>*/}

            {/*    <input/>*/}

            {/*    <button onClick={() => {*/}
            {/*        dispatch({type: 'CASTUM', payload: input})*/}
            {/*    }}>YOUR NUMBER*/}
            {/*    </button>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;
