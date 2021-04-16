import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Appoinment from "./components/Appointment/Appoinment/Appoinment";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import { createContext } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/appointment">
      <Appoinment/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <PrivateRoute path="/appointment/dashboard">
            <Dashboard/>
        </PrivateRoute>
      <PrivateRoute exact path="/appointment/allpatients">
        <AllPatients/>
      </PrivateRoute>
      <Route exact path="/addDoctor">
        <AddDoctor/>
      </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
