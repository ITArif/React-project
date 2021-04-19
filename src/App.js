import HeaderNav from './components/HeaderNav';
import HomePage from './pages/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFund';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav></HeaderNav>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/create">
              <CreateBlog></CreateBlog>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
