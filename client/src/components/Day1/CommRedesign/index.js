import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./commredesign.scss";

const initialState = {
  success: "",
  criteria: "",
  notMet: "",
  one: "",
  two: "",
  think: ""
};

const CommRedesign = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };

      for (const key in profile.day1Comm) {
        if (key in profileData) profileData[key] = profile.day1Comm[key];
      }
      for (const key in profile.day1Redesign) {
        if (key in profileData) profileData[key] = profile.day1Redesign[key];
        for (const key in profile.day1Redesign.improve) {
          if (key in profileData)
            profileData[key] = profile.day1Redesign.improve[key];
        }
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { success, criteria, notMet, one, two, think } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day1/obq/comm-redesign", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day1/obq/comm-redesign", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='obq-comm-redesign-container'>
            <h3>Step 7: Communicate</h3>
            <form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  Discuss your prototype with your partner and answer the
                  following questions:
                </legend>

                <div className='comm-input-div'>
                  <label htmlFor='comm-design'>
                    What part of our design was successful?
                  </label>
                  <textarea
                    name='success'
                    value={success}
                    onChange={onChange}
                    id='comm-design'
                    cols='30'
                    rows='2'
                  ></textarea>
                </div>

                <div className='comm-input-div'>
                  <label htmlFor='comm-criteria'>
                    Which criteria were met?
                  </label>
                  <textarea
                    name='criteria'
                    value={criteria}
                    onChange={onChange}
                    id='comm-criteria'
                    cols='30'
                    rows='2'
                  ></textarea>
                </div>

                <div className='comm-input-div'>
                  <label htmlFor='comm-criteria-not'>
                    Which criteria were not met? What changes to we need to
                    make?
                  </label>
                  <textarea
                    name='notMet'
                    value={notMet}
                    onChange={onChange}
                    id='comm-criteria-not'
                    cols='30'
                    rows='2'
                  ></textarea>
                </div>

                <h3>Step 8: Redesign</h3>

                <legend>
                  What are <strong>at least two</strong> things we can do to
                  improve our bridge?
                </legend>
                <div className='redesign-input-div two-things'>
                  <textarea
                    name='one'
                    value={one}
                    onChange={onChange}
                    id='redesign-option1'
                    cols='30'
                    rows='2'
                    placeholder='1.'
                  ></textarea>
                  <textarea
                    name='two'
                    value={two}
                    onChange={onChange}
                    id='redesign-option2'
                    cols='30'
                    rows='2'
                    placeholder='2.'
                  ></textarea>
                </div>
                <div className='redesign-input-div'>
                  <label htmlFor='redesignThink'>
                    <span>
                      <strong>THINK!</strong>
                    </span>{" "}
                    How did using the Engineering Design Process help you design
                    and build a bridge that met the needs and solved the
                    problem?
                  </label>
                  <textarea
                    name='think'
                    value={think}
                    onChange={onChange}
                    id='redesignThink'
                    cols='30'
                    rows='2'
                  ></textarea>
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day1/test-eval'
                ></button>

                <button
                  type='submit'
                  className='btn btn-primary my-1 main-save'
                  name='save-button'
                  value='save'
                >
                  {" "}
                  Save
                </button>

                <button
                  type='submit'
                  className=' submit-right'
                  onClick={arrowClick}
                  name='right-button'
                  value='/day1/ceiling-fly'
                ></button>
              </div>
            </form>
            <p className='last-redesign'>
              <span>Redesign:</span> Make modifications to your bridge, and draw
              a new design.
            </p>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

CommRedesign.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addData,
  getCurrentProfile
})(withRouter(CommRedesign));
