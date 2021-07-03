import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

export default function App() {
  return (
      <Router>
          <div>
              <Link to={'/'}>home</Link>
              <br/>
              <Link to={'/users'}>to user page</Link>
              <br/>
              <Link to={'/posts'}>to post page</Link>
              <br/>
              <Link to={'/comments'}>to comments page</Link>
              <br/>


              <Switch>

                  <Route path={'/users'} render={(props) => <Users {...props}/>}/>

                  <Route path={'/posts'} component={Posts}/>

                  <Route path={'/comments'} component={Comments}/>
                  {/*<Route path={'/comments'}> <Comments/> </Route>*/}

                  <Route exact path={'/'} render={() => <div>HOME PAGE</div>}/>

              </Switch>

          </div>
      </Router>

  );
}


