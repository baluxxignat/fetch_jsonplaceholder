import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./users/Users";
import UserDetails from "./user-details/UserDetails";

export default function App() {
  return (
      <Router>
          <div>
              <Link to={'/users'}>ALL USERS</Link>
            <Switch>
                <Route exact path={'/users'} component={Users}/>
                <Route path={'/users/:id'} component={UserDetails}/>

            </Switch>
          </div>
      </Router>
  );
}


