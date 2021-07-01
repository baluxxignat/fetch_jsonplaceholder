import {useReducer} from "react";

function  reducer (state, action) {               // не меняются названия
    switch (action.type) {
        case  'INCREMENT_A':
            return {...state, a: state.a + action.payload};   //{a:0, b:0} click {a:1, b:0}
        case  'INCREMENT_B':
            return {...state, b: state.b + action.payload};
        default:
            return {...state};
    }
}
export default function App() {
  let [state, dispatch] = useReducer(reducer,{ a:0, b:0})              //let {a, b} = state;

  return (
    <div>

        <button onClick={() => {dispatch({type: 'INCREMENT_A', payload: 1});}}>inc a - {state.a}</button>
        <br/>
        <button onClick={() => {dispatch({type: 'INCREMENT_B', payload: 1});}}>inc a - {state.b}</button>
    </div>
  );
}


