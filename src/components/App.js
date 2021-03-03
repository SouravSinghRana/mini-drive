import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './authentication/Profile';
import SignUp from './authentication/SignUp';
import Login from './authentication/Login';
import PrivateRoute from './authentication/PrivateRoute';
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from './g-drive/Dashboard';

function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              {/* Drive Routes */}
              <PrivateRoute exact path="/" component={Dashboard} />

              {/* Profile Routes */}
              <PrivateRoute path="/user" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />

              {/* Auth Routes */}
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  );
}

export default App;
