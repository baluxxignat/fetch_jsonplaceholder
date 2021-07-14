import {createRef, useState} from "react";

export default function App() {

    let [usernameInputState, setUsernameInputState] = useState('значення за замевченням яке можна переписати');


    let anyNameFunction = (e) => {
        console.log(e.target.value);
        setUsernameInputState(e.target.value);   ////тепер буде реагувати на зміни
    };
    return (
      <div>

          <form action={'/someUrl'} method={'post'} >
                <input type={'text'} name={'username'} value={usernameInputState} onChange={anyNameFunction}/>
                <button>save</button>
          </form>

      </div>
  );
}


