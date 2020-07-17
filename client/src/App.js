import React, { Fragment, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";

//REDUX
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

import "./App.scss";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Landing = lazy(() => import("./components/layout/Landing"));
const Register = lazy(() => import("./components/auth/Register"));
const Csv = lazy(() => import("./components/auth/Csv"));
const Login = lazy(() => import("./components/auth/Login"));
const CreateProfile = lazy(() =>
  import("./components/profile-forms/CreateProfile")
);
const Roles = lazy(() => import("./components/Roles"));
const EngNotebook = lazy(() => import("./components/EngNotebook"));
const Contact = lazy(() => import("./components/Contact"));
const Day1 = lazy(() => import("./components/Day1"));
const Day2 = lazy(() => import("./components/Day2"));
const Day3 = lazy(() => import("./components/Day3"));
const Day4 = lazy(() => import("./components/Day4"));
const Day5 = lazy(() => import("./components/Day5"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Fragment>
            <NavigationBar />

            <Container className='main-container'>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/register' component={Register} />
                <Route path='/register-multiple' component={Csv} />
                <Route path='/login' component={Login} />
                <Route path='/contact' component={Contact} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute
                  path='/create-profile'
                  component={CreateProfile}
                />
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
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
