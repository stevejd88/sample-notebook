import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addObqEdp, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import edpPic from "../../../assets/img/obq/edp.png";

import "./edp.scss";

const initialState = {
  step1: "",
  step2: "",
  step3: "",
  step4: "",
  step5: "",
  step6: "",
  step7: "",
  step8: ""
};

const EDP = ({
  profile: { profile, loading },
  addObqEdp,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day1DesignProcess) {
        if (key in profileData)
          profileData[key] = profile.day1DesignProcess[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { step1, step2, step3, step4, step5, step6, step7, step8 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addObqEdp(formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='edp-div'>
            <h2>Engineering Design Process Steps</h2>
            <img
              className='img-fluid'
              src={edpPic}
              alt='Engineering Design Process'
            />
            <form id='edpForm' onSubmit={onSubmit}>
              <ul>
                <li>
                  <span>1.</span>
                  <span>
                    <input
                      type='text'
                      name='step1'
                      value={step1}
                      onChange={onChange}
                    />{" "}
                    the problem
                  </span>
                </li>
                <li>
                  <span>2.</span>
                  <span>
                    <input
                      type='text'
                      name='step2'
                      value={step2}
                      onChange={onChange}
                    />{" "}
                    the problem
                  </span>
                </li>
                <li>
                  <span>3.</span>
                  <span>
                    <input
                      type='text'
                      name='step3'
                      value={step3}
                      onChange={onChange}
                    />{" "}
                    possible solutions
                  </span>
                </li>
                <li>
                  <span>4.</span>
                  <span>
                    <input
                      type='text'
                      name='step4'
                      value={step4}
                      onChange={onChange}
                    />{" "}
                    the best solution
                  </span>
                </li>
                <li>
                  <span>5.</span>
                  <span>
                    <input
                      type='text'
                      name='step5'
                      value={step5}
                      onChange={onChange}
                    />{" "}
                    a prototype
                  </span>
                </li>
                <li>
                  <span>6.</span>
                  <span>
                    <input
                      type='text'
                      name='step6'
                      value={step6}
                      onChange={onChange}
                    />{" "}
                    and evaluate
                  </span>
                </li>
                <li>
                  <span>7.</span>
                  <span>
                    <input
                      type='text'
                      name='step7'
                      value={step7}
                      onChange={onChange}
                    />
                  </span>
                </li>
                <li>
                  <span>8.</span>
                  <span>
                    <input
                      type='text'
                      name='step8'
                      value={step8}
                      onChange={onChange}
                    />
                  </span>
                </li>
              </ul>
              <button type='submit' className='btn btn-primary my-1'>
                Save
              </button>
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

EDP.propTypes = {
  addObqEdp: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addObqEdp, getCurrentProfile })(
  withRouter(EDP)
);
