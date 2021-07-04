import {createContext} from "react";
import B from "./components/b/B";

export let MyContext = createContext();    // викликаємо функцію

export default function App() {
    
    let y = "HELLO Okten"       // будем прокидывать в С, минуя В
    
  return (
      <MyContext.Provider value={y}>
          <div>
            <B/>

          </div>
      </MyContext.Provider>

  );
}


