import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PostsList from './components/PostsList/PostsList';
import CreatePost from './components/CreatePost/CreatePost';
import ViewPost from './components/ViewPost/ViewPost';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="App">
        <Header />
        <div className="ui text container segment">
          <Router>
            <div className="ui basic segment">
              <div className="ui center aligned segment">
                <Link to="/" className="ui icon button">
                  <i className="home blue icon"></i>
                </Link>
                <Link to="/posts/new" className="ui positive button">Create post</Link>
              </div>
            </div>
            <div className="ui basic segment">
              <Switch>
                <Route path="/posts/new" component={CreatePost} />
                <Route path="/posts/:id" component={ViewPost} />
                <Route path="/" exact component={PostsList} />
              </Switch>
            </div>
          </Router>
        </div>
    </div>);
  }
}

export default App;
