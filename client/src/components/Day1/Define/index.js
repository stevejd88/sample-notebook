import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import Mission from "../../../assets/img/obq/mission.jpg";

import "./define.scss";

const initialState = {
  location: "",
  problem: "",
  mission: ""
};

const Define = ({
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
      for (const key in profile.day1Def) {
        if (key in profileData) profileData[key] = profile.day1Def[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { location, problem, mission } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day1/obq/define", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day1/obq/define", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2>Operation Bridge Quest</h2>
          <div id='obq-intro'>
            <img
              className='img-fluid'
              src={Mission}
              alt="Town of Water's Edge"
            />
            <p>
              Water’s Edge is a small town located on the bank of a river. The
              only access to the town is over a bridge. The 100-year-old{" "}
              <u>
                <strong>levee</strong>
              </u>
              , an embankment for preventing flooding, north of town broke and
              has changed the course of the river leaving the residents stranded
              with only 10 days of food and supplies. Your mission is to design
              and build a new bridge for the town of Water's Edge!
            </p>

            <h3>Write In Complete Sentences</h3>
            <form className='form' onSubmit={onSubmit}>
              <label htmlFor='obq-location'>
                <strong>What is the location?</strong>
              </label>
              <textarea
                placeholder='location'
                name='location'
                value={location}
                onChange={onChange}
                cols='30'
                rows='3'
              ></textarea>

              <label htmlFor='obq-problem'>
                <strong>What is the problem?</strong>
              </label>
              <textarea
                placeholder='problem'
                name='problem'
                value={problem}
                onChange={onChange}
                cols='30'
                rows='3'
              ></textarea>

              <label htmlFor='obq-mission'>
                <strong>What is the mission?</strong>
              </label>
              <textarea
                placeholder='mission'
                name='mission'
                value={mission}
                onChange={onChange}
                cols='30'
                rows='3'
              ></textarea>

              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
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
                  value='/day1/edp'
                ></button>
              </div>
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Define.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Define)
);
