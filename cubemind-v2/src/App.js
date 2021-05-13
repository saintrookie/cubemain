import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Pages';
import SignInPage from './components/SignIn';
 
function App(){
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App

