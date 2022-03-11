import React from 'react'
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import Todos from './Todos';
import Albums from './Albums';
import Posts from './Posts'; 
import Dashboard from './Dashboard'; 
import Users from './Users';
import NotFound from './NotFound'; 

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/posts' component={Posts}></Route>
          <Route exact path='/albums' component={Albums}></Route>
          <Route exact path='/todos' component={Todos}></Route>
          <Route exact path='/users' component={Users}></Route>
          <Redirect from='/home' to='/' />
          <Route exact path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
