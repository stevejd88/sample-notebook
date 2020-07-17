import React, { useEffect, Suspense, lazy } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { getCurrentProfile } from "../../actions/profile";
import PrivateRoute from "../routing/PrivateRoute";

import "./day5.scss";

const PhysChem = lazy(() => import("./PhysChem"));
const Fluids = lazy(() => import("./Fluids"));
const PoolPaper = lazy(() => import("./PoolPaper"));
const Sticky = lazy(() => import("./Sticky"));
const EggDesign = lazy(() => import("./EggDesign"));
const GalleryWalk1 = lazy(() => import("./GalleryWalk1"));
const GalleryWalk2 = lazy(() => import("./GalleryWalk2"));
const Evaluate = lazy(() => import("./Evaluate"));
const EggRedesign = lazy(() => import("./EggRedesign"));

const Day5 = ({ profile: { profile }, getCurrentProfile, match }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return profile !== null ? (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className='day-h1'>Day 5</h1>
        <Navbar className='days-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Activities' id='day5-nav-dropdown'>
              <Link to={`${match.url}`} className='btn btn-light'>
                Physical &amp; Chemical Changes
              </Link>
              <Link to={`${match.url}/fluids`} className='btn btn-light'>
                Fluid Mechanics &amp; Aerodynamics
              </Link>
              <Link
                to={`${match.url}/fluid-stations`}
                className='btn btn-light'
              >
                Fluid Stations
              </Link>
              <Link
                to={`${match.url}/fluid-stations/contd`}
                className='btn btn-light'
              >
                Fluid Stations contd.
              </Link>
              <Link to={`${match.url}/eggbert`} className='btn btn-light'>
                Eggbert
              </Link>
              <Link
                to={`${match.url}/eggbert/trial1`}
                className='btn btn-light'
              >
                Eggbert Trial #1
              </Link>
              <Link
                to={`${match.url}/eggbert/trial2`}
                className='btn btn-light'
              >
                Eggbert Trial #2
              </Link>
              <Link
                to={`${match.url}/eggbert/evaluate`}
                className='btn btn-light'
              >
                Eggbert Design Brief
              </Link>
              <Link
                to={`${match.url}/eggbert/redesign`}
                className='btn btn-light'
              >
                Eggbert Redesign
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <span className='day-nav-call'>{profile.callSign}</span>
          </Nav>
        </Navbar>

        <Switch>
          <PrivateRoute exact path={`${match.path}`} component={PhysChem} />
          <PrivateRoute
            exact
            path={`${match.path}/fluids`}
            component={Fluids}
          />
          <PrivateRoute
            exact
            path={`${match.path}/fluid-stations`}
            component={PoolPaper}
          />
          <PrivateRoute
            exact
            path={`${match.path}/fluid-stations/contd`}
            component={Sticky}
          />
          <PrivateRoute
            exact
            path={`${match.path}/eggbert`}
            component={EggDesign}
          />
          <PrivateRoute
            exact
            path={`${match.path}/eggbert/trial1`}
            component={GalleryWalk1}
          />
          <PrivateRoute
            exact
            path={`${match.path}/eggbert/trial2`}
            component={GalleryWalk2}
          />
          <PrivateRoute
            exact
            path={`${match.path}/eggbert/evaluate`}
            component={Evaluate}
          />
          <PrivateRoute
            exact
            path={`${match.path}/eggbert/redesign`}
            component={EggRedesign}
          />
        </Switch>
      </Suspense>
    </Router>
  ) : (
    <h2>Loading...</h2>
  );
};

Day5.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile
})(withRouter(Day5));
