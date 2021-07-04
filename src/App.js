import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./users/Users";

export default function App() {
  return (
      <Router>
          <div>
            <Link to={'/users'}>All Users</Link>
            <Switch>
                <Route path={'/users'} component={Users}/>
            </Switch>
          </div>
      </Router>
  );
}


