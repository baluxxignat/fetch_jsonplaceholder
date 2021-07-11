import {useSelector, useDispatch} from "react-redux";
import './App.css';

const Child = () => {
    const counter = useSelector((state) => state.counterValue);
    //console.log(counter);
    return (
        <div >
            <h1>{counter}</h1>
        </div>
    )
}

function App() {
    const dispatch = useDispatch();
    let input = () => {
      return document.querySelector('input').value;
    }

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

            <div>

                <input/>

                <button onClick={() => {
                    dispatch({type: 'CASTUM', payload: input})
                }}>YOUR NUMBER
                </button>
            </div>

        </div>
    );
}

export default App;
