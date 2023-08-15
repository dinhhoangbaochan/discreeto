import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;