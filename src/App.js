import {createRef} from "react";

export default function App() {

    let refObject = createRef();   ////подібне до document.getElement by 'someref'..можно использовать с <div>, <span> e.t.c.
    let myButton = createRef(); ////можем вызывать сколько угодно раз
    function someFunction(e) {
        e.preventDefault()
        console.log(refObject.current.username.value);
        console.log(myButton.current.hidden);
    }

    // function someFunction(e) {
    //     e.preventDefault()
    //     //// console.log(e);      эвент имеет поле таргет. т.е. форму, кот.имеет поле инпута по нейму
    //     console.log(e.target.username.value);
    // }

    

    return (
      <div>

          <form action={'/someUrl'} method={'post'} onSubmit={someFunction} ref={refObject}>
                <input type={'text'} name={'username'}/>
                <button ref={myButton}>save</button>
          </form>

          {/*<form action={'/someUrl'} method={'post'} onSubmit={someFunction}>*/}
          {/*    <input type={'text'} name={'username'}/>*/}
          {/*    <button>save</button>*/}
          {/*</form>*/}

      </div>
  );
}


