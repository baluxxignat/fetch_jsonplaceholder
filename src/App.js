import Users from "./components/users/Users";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserDetails from "./components/user-details/UserDetails";
function App() {
  return (
      <Router>
          <div>

            <Link to={'/users'}>users page</Link>

             <Switch>

                 {/*<Route path={'/users/:xxx'} component={UserDetails}/>*/}
                 <Route path={'/users'} component={Users}/>
             </Switch>

          </div>
      </Router>

  );
}

export default App;
