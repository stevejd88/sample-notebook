import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

import "./createprofile.scss";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    callSign: ""
  });

  const { callSign } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div className='createProfile'>
        <h1>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Let's get some information to make
          your profile stand out
        </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type='text'
            placeholder='Call Sign'
            name='callSign'
            value={callSign}
            onChange={(e) => onChange(e)}
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
