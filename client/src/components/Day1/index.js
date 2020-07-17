import React, { useEffect, Suspense, lazy } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { getCurrentProfile } from "../../actions/profile";
import PrivateRoute from "../routing/PrivateRoute";

import "./day1.scss";
const Define = lazy(() => import("./Define"));
const FigureThat = lazy(() => import("./FigureThat"));
const CommRedesign = lazy(() => import("./CommRedesign"));
const Research = lazy(() => import("./Research"));
const TestEval = lazy(() => import("./TestEval"));
const BridgePrototype = lazy(() => import("./BridgePrototype"));
const DevelopChoose = lazy(() => import("./DevelopChoose"));
const EDP = lazy(() => import("./EDP"));
const FlyOnCeiling = lazy(() => import("./FlyOnCeiling"));

const Day1 = ({ profile: { profile }, getCurrentProfile, match }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return profile !== null ? (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className='day-h1'>Day 1</h1>
        <Navbar className='days-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Activities' id='day1-nav-dropdown'>
              <Link to={`${match.url}`} className='btn btn-light'>
                Operation Bridge Quest
              </Link>
              <Link to={`${match.url}/edp`} className='btn btn-light'>
                EDP
              </Link>
              <Link to={`${match.url}/figure-that`} className='btn btn-light'>
                Figure That
              </Link>
              <Link to={`${match.url}/research`} className='btn btn-light'>
                Research
              </Link>
              <Link
                to={`${match.url}/develop-choose`}
                className='btn btn-light'
              >
                Develop / Choose
              </Link>
              <Link to={`${match.url}/prototype`} className='btn btn-light'>
                Prototype
              </Link>
              <Link to={`${match.url}/test-eval`} className='btn btn-light'>
                Test / Evaluate
              </Link>
              <Link to={`${match.url}/comm-redesign`} className='btn btn-light'>
                Communicate / Redesign
              </Link>
              <Link to={`${match.url}/ceiling-fly`} className='btn btn-light'>
                Fly on the Ceiling
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <span className='day-nav-call'>{profile.callSign}</span>
          </Nav>
        </Navbar>

        <Switch>
          <PrivateRoute exact path={`${match.path}`} component={Define} />
          <PrivateRoute exact path={`${match.path}/edp`} component={EDP} />
          <PrivateRoute
            path={`${match.path}/figure-that`}
            component={FigureThat}
          />
          <PrivateRoute path={`${match.path}/research`} component={Research} />
          <PrivateRoute
            path={`${match.path}/develop-choose`}
            component={DevelopChoose}
          />
          <PrivateRoute
            path={`${match.path}/prototype`}
            component={BridgePrototype}
          />
          <PrivateRoute path={`${match.path}/test-eval`} component={TestEval} />
          <PrivateRoute
            path={`${match.path}/comm-redesign`}
            component={CommRedesign}
          />
          <PrivateRoute
            path={`${match.path}/ceiling-fly`}
            component={FlyOnCeiling}
          />
        </Switch>
      </Suspense>
    </Router>
  ) : (
    <h2>Loading...</h2>
  );
};

Day1.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile
})(withRouter(Day1));
