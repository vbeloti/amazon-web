import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
            <h1>Checkout</h1>
        </Route>
        <Route path="/login">
            <h1>Login Page</h1>
        </Route>
        <Route path="/">
            <h1>Home</h1>
        </Route>
      </Switch>
      </div>

    </Router>
    
  );
}

export default App;
