/*
What is this sorcery?? Importing a CSS file in JavaScript?
Make sure you understand what's going on here!!!
*/
import '../styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
      <Route path="user/:username" component={User} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
