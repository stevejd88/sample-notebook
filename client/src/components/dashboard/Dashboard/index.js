import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import DashboardActions from "../DashboardActions";
import DOD from "../../../assets/img/dod-logo.jpg";

import "./dashboard.scss";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <div className='greetings-div'>
            <h2>Greetings {profile.callSign}</h2>
            <p>Welcome To</p>
            <img
              className='img-fluid img-dod'
              src={DOD}
              alt='Department of Defense logo'
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-lg btn-outline-primary'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
