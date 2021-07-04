import {MyContext} from "../../App";

export default function C() {
return (
    <MyContext.Consumer>
        {/*нужно сформировать функцию, аргумент у которой можно назвать как угодно, */}
        {/*именно єтот аргумент будет принимать обект которий мы передали */}
        {
            (val) => {
                return <div>{val}</div>
            }
        }


    </MyContext.Consumer>
   );
 }