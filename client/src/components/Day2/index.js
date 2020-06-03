import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { getCurrentProfile } from "../../actions/profile";
import PrivateRoute from "../routing/PrivateRoute";
import LaunchMass from "./LaunchMass";
import LaunchMassGraph from "./LaunchMassGraph";
import LaunchDisplacement from "./LaunchDisplacement";
import LaunchDisplacementGraph from "./LaunchDisplacementGraph";
import Newtons from "./Newtons";
import LittleBits from "./LittleBits";
import LittleChallenge from "./LittleChallenge";
import LittleDrawing from "./LittleDrawing";

import "./day2.scss";

const Day2 = ({ profile: { profile }, getCurrentProfile, match }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return profile !== null ? (
    <Router>
      <h1 className='day-h1'>Day 2</h1>
      <Navbar className='days-nav'>
        <Nav className='mr-auto'>
          <NavDropdown title='Activities' className='day2-nav-dropdown'>
            <Link to={`${match.url}`} className='btn btn-light'>
              Straw Rockets - Mass
            </Link>
            <Link to={`${match.url}/mass-graph`} className='btn btn-light'>
              Mass-Graph
            </Link>
            <Link
              to={`${match.url}/launch-displacement`}
              className='btn btn-light'
            >
              Straw Rockets - Displacement
            </Link>
            <Link
              to={`${match.url}/displacement-graph`}
              className='btn btn-light'
            >
              Displacement-Graph
            </Link>
            <Link to={`${match.url}/newton-motion`} className='btn btn-light'>
              Newton's Laws of Motion
            </Link>
            <Link to={`${match.url}/little-bits`} className='btn btn-light'>
              Little Bits
            </Link>
            <Link
              to={`${match.url}/little-challenge`}
              className='btn btn-light'
            >
              Little Bits contd.
            </Link>
            <Link to={`${match.url}/little-drawing`} className='btn btn-light'>
              Challenge Drawing
            </Link>
          </NavDropdown>
        </Nav>
        <Nav>
          <span className='day-nav-call'>{profile.callSign}</span>
        </Nav>
      </Navbar>

      <Switch>
        <PrivateRoute exact path={`${match.path}`} component={LaunchMass} />
        <PrivateRoute
          path={`${match.path}/mass-graph`}
          component={LaunchMassGraph}
        />
        <PrivateRoute
          path={`${match.path}/launch-displacement`}
          component={LaunchDisplacement}
        />
        <PrivateRoute
          exact
          path={`${match.path}/displacement-graph`}
          component={LaunchDisplacementGraph}
        />
        <PrivateRoute
          exact
          path={`${match.path}/newton-motion`}
          component={Newtons}
        />
        <PrivateRoute
          exact
          path={`${match.path}/little-bits`}
          component={LittleBits}
        />
        <PrivateRoute
          exact
          path={`${match.path}/little-challenge`}
          component={LittleChallenge}
        />
        <PrivateRoute
          exact
          path={`${match.path}/little-drawing`}
          component={LittleDrawing}
        />
      </Switch>
    </Router>
  ) : (
    <h2>Loading...</h2>
  );
};

Day2.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile
})(withRouter(Day2));
