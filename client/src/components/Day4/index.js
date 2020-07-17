import React, { useEffect, Suspense, lazy } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { getCurrentProfile } from "../../actions/profile";
import PrivateRoute from "../routing/PrivateRoute";

import "./day4.scss";

const Pop = lazy(() => import("./Pop"));
const PopData = lazy(() => import("./PopData"));
const PopGraph = lazy(() => import("./PopGraph"));
const Solubility = lazy(() => import("./Solubility"));
const Chromatography = lazy(() => import("./Chromatography"));
const KineticEnergy = lazy(() => import("./KineticEnergy"));
const PhasesMatter = lazy(() => import("./PhasesMatter"));

const Day4 = ({ profile: { profile }, getCurrentProfile, match }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return profile !== null ? (
    <Router>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <h1 className='day-h1'>Day 4</h1>
      <Navbar className='days-nav'>
        <Nav className='mr-auto'>
          <NavDropdown title='Activities' className='day4-nav-dropdown'>
            <Link to={`${match.url}`} className='btn btn-light'>
              POP! Goes the Fizz
            </Link>
            <Link to={`${match.url}/pop-data`} className='btn btn-light'>
              POP! Data
            </Link>
            <Link to={`${match.url}/pop-results`} className='btn btn-light'>
              POP! Results
            </Link>
            <Link to={`${match.url}/kinetic-energy`} className='btn btn-light'>
              Kinetic Energy
            </Link>
            <Link
              to={`${match.url}/phases-of-matter`}
              className='btn btn-light'
            >
              Phases of Matter
            </Link>
            <Link to={`${match.url}/solubility`} className='btn btn-light'>
              Solubility
            </Link>
            <Link to={`${match.url}/chromatography`} className='btn btn-light'>
              Chromatography
            </Link>
          </NavDropdown>
        </Nav>
        <Nav>
          <span className='day-nav-call'>{profile.callSign}</span>
        </Nav>
      </Navbar>

      <Switch>
        <PrivateRoute exact path={`${match.path}`} component={Pop} />
        <PrivateRoute
          exact
          path={`${match.path}/pop-data`}
          component={PopData}
        />
        <PrivateRoute
          exact
          path={`${match.path}/pop-results`}
          component={PopGraph}
        />
        <PrivateRoute
          exact
          path={`${match.path}/solubility`}
          component={Solubility}
        />
        <PrivateRoute
          exact
          path={`${match.path}/chromatography`}
          component={Chromatography}
        />
        <PrivateRoute
          exact
          path={`${match.path}/kinetic-energy`}
          component={KineticEnergy}
        />
        <PrivateRoute
          exact
          path={`${match.path}/phases-of-matter`}
          component={PhasesMatter}
        />
      </Switch>
    </Router>
  ) : (
    <h2>Loading...</h2>
  );
};

Day4.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile
})(withRouter(Day4));
