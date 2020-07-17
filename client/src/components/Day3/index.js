import React, { useEffect, Suspense, lazy } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { getCurrentProfile } from "../../actions/profile";
import PrivateRoute from "../routing/PrivateRoute";

import "./day3.scss";

const Matter = lazy(() => import("./Matter"));
const Robotics = lazy(() => import("./Robotics"));
const MarsMission = lazy(() => import("./MarsMission"));
const Energy = lazy(() => import("./Energy"));
const SoundEnergy = lazy(() => import("./SoundEnergy"));
const MechEnergy = lazy(() => import("./MechEnergy"));
const ElecEnergy = lazy(() => import("./ElecEnergy"));
const LightEnergy = lazy(() => import("./LightEnergy"));
const ThermalEnergy = lazy(() => import("./ThermalEnergy"));

const Day3 = ({ profile: { profile }, getCurrentProfile, match }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return profile !== null ? (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className='day-h1'>Day 3</h1>
        <Navbar className='days-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Activities' className='day3-nav-dropdown'>
              <Link to={`${match.url}`} className='btn btn-light'>
                Robotics
              </Link>
              <Link to={`${match.url}/mars`} className='btn btn-light'>
                Mission on Mars
              </Link>
              <Link to={`${match.url}/energy`} className='btn btn-light'>
                What is Energy?
              </Link>
              <Link to={`${match.url}/sound-energy`} className='btn btn-light'>
                Sound Energy
              </Link>
              <Link
                to={`${match.url}/mechanical-energy`}
                className='btn btn-light'
              >
                Mechanical Energy
              </Link>
              <Link
                to={`${match.url}/electrical-energy`}
                className='btn btn-light'
              >
                Electrical Energy
              </Link>
              <Link to={`${match.url}/light-energy`} className='btn btn-light'>
                Light Energy
              </Link>
              <Link
                to={`${match.url}/thermal-energy`}
                className='btn btn-light'
              >
                Thermal Energy
              </Link>
              <Link to={`${match.url}/matter`} className='btn btn-light'>
                Molecular Models
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <span className='day-nav-call'>{profile.callSign}</span>
          </Nav>
        </Navbar>

        <Switch>
          <PrivateRoute exact path={`${match.path}`} component={Robotics} />
          <PrivateRoute
            exact
            path={`${match.path}/mars`}
            component={MarsMission}
          />
          <PrivateRoute path={`${match.path}/matter`} component={Matter} />
          <PrivateRoute path={`${match.path}/energy`} component={Energy} />
          <PrivateRoute
            path={`${match.path}/sound-energy`}
            component={SoundEnergy}
          />
          <PrivateRoute
            path={`${match.path}/mechanical-energy`}
            component={MechEnergy}
          />
          <PrivateRoute
            path={`${match.path}/electrical-energy`}
            component={ElecEnergy}
          />
          <PrivateRoute
            path={`${match.path}/light-energy`}
            component={LightEnergy}
          />
          <PrivateRoute
            path={`${match.path}/thermal-energy`}
            component={ThermalEnergy}
          />
        </Switch>
      </Suspense>
    </Router>
  ) : (
    <h2>Loading...</h2>
  );
};

Day3.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile
})(withRouter(Day3));
