import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addObqDevelopChoose,
  getCurrentProfile
} from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./developChoose.scss";

const initialState = {
  beamIsChecked: false,
  suspensionIsChecked: false,
  archIsChecked: false,
  floatingIsChecked: false,
  bridge: "",
  whyThis: ""
};

const DevelopChoose = ({
  profile: { profile, loading },
  addObqDevelopChoose,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day1Dev) {
        if (key in profileData) profileData[key] = profile.day1Dev[key];
      }
      for (const key in profile.day1Solution) {
        if (key in profileData) profileData[key] = profile.day1Solution[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    beamIsChecked,
    suspensionIsChecked,
    archIsChecked,
    floatingIsChecked,
    bridge,
    whyThis
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addObqDevelopChoose(formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='obq-solutions-container'>
            <h3>Step 3: Develop Possible Solutions</h3>
            <div className='circle-solutions'>
              <div className='sol-criteria'>
                <h5>In the box on the right:</h5>
                <p>
                  - Select the <strong>X </strong>to cross out the bridge types
                  that <strong>do NOT meet at least 3</strong> of the criteria.
                </p>

                <p>
                  - Also, select the <strong>&#10003;</strong> to circle the
                  bridge types that <strong>DO meet at least 3</strong> of the
                  criteria.
                </p>
              </div>
              <div className='sol-types'>
                <h4>Bridge Types</h4>
                <ul>
                  <li>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          beamIsChecked: true
                        });
                      }}
                    >
                      &#10003;
                    </button>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          beamIsChecked: false
                        });
                      }}
                    >
                      X
                    </button>
                    <span className={beamIsChecked ? "checked" : "crossed"}>
                      Beam
                    </span>
                  </li>
                  <li>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          suspensionIsChecked: true
                        });
                      }}
                    >
                      &#10003;
                    </button>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          suspensionIsChecked: false
                        });
                      }}
                    >
                      X
                    </button>
                    <span
                      className={suspensionIsChecked ? "checked" : "crossed"}
                    >
                      Suspension
                    </span>
                  </li>
                  <li>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          archIsChecked: true
                        });
                      }}
                    >
                      &#10003;
                    </button>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          archIsChecked: false
                        });
                      }}
                    >
                      X
                    </button>
                    <span className={archIsChecked ? "checked" : "crossed"}>
                      Arch
                    </span>
                  </li>
                  <li>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          floatingIsChecked: true
                        });
                      }}
                    >
                      &#10003;
                    </button>
                    <button
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          floatingIsChecked: false
                        });
                      }}
                    >
                      X
                    </button>
                    <span className={floatingIsChecked ? "checked" : "crossed"}>
                      Floating
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id='obq-choose-solutions-container'>
            <h3>Step 4: Choose the Best Solution</h3>
            <form className='solutions-form' onSubmit={onSubmit}>
              <label htmlFor='choose-bridge'>
                <strong>
                  What type of bridge have you and your partner chosen to build?
                </strong>
              </label>
              <input
                type='text'
                id='choose-bridge'
                name='bridge'
                value={bridge}
                onChange={onChange}
              />

              <label htmlFor='why-solution'>
                <strong>Why do you think this is the best solution?</strong>
              </label>
              <textarea
                id='why-solution'
                name='whyThis'
                value={whyThis}
                onChange={onChange}
                cols='30'
                rows='3'
              ></textarea>

              <button type='submit' className='btn btn-lg btn-primary'>
                Save
              </button>
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

DevelopChoose.propTypes = {
  addObqDevelopChoose: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  addObqDevelopChoose
})(withRouter(DevelopChoose));
