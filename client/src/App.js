import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import NavigationBar from "./components/layout/NavigationBar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import Roles from "./components/Roles";
import EngNotebook from "./components/EngNotebook";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Day4 from "./components/Day4";
import Day5 from "./components/Day5";

//REDUX
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

import "./App.scss";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavigationBar />

          <Container className='main-container'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/contact' component={Contact} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/create-profile' component={CreateProfile} />
              <PrivateRoute path='/roles' component={Roles} />
              <PrivateRoute
                path='/engineering-notebook'
                component={EngNotebook}
              />
              <PrivateRoute path='/day1' component={Day1} />
              <PrivateRoute path='/day2' component={Day2} />
              <PrivateRoute path='/day3' component={Day3} />
              <PrivateRoute path='/day4' component={Day4} />
              <PrivateRoute path='/day5' component={Day5} />
            </Switch>
          </Container>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
