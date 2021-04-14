import React from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ChangePassword from "./components/Login/ChangePassword";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/ChangePassword" component={ChangePassword} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
