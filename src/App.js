import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, withRouter, Switch} from "react-router-dom";
import Users from "./components/Users";

export default function App() {
  return (
      <Router>
          <div>
              <Link to={'/users'}>to user page</Link>
              <br/>
              <Link to={'/posts'}>to post page</Link>
              <br/>
              <Link to={'/comments'}>to comments page</Link>
              <br/>

              <Route path={'/users'} render={() => <Users/>}/>

          </div>
      </Router>

  );
}


