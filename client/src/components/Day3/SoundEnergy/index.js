import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Guitar from "../../../assets/img/day3/guitar.png";
import Hopper from "../../../assets/img/day3/cricket.png";

import "./sound.scss";

const initialState = {
  soundIs: ""
};

const SoundEnergy = ({
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
      for (const key in profile.day3Sound) {
        if (key in profileData) profileData[key] = profile.day3Sound[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { soundIs } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day3/sound", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day3/sound", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='sound-energy-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Station: Sound Energy</h2>
                </legend>
                <Form.Row>
                  <Form.Group>
                    <p>
                      <span>
                        Sound energy is the energy produced when a force is
                        applied to an object causing it to
                        <input
                          type='text'
                          className='bs-input'
                          id='soundEnergy'
                          name='soundIs'
                          value={soundIs}
                          onChange={onChange}
                        />{" "}
                        . As it vibrates sound energy moves through the
                        substance in the form of waves.
                      </span>
                    </p>
                  </Form.Group>
                </Form.Row>
                <div className='sound-guitar'>
                  <img className='img-fluid' src={Guitar} alt='guitar' />
                  <p>
                    When someone plays the <span>guitar</span> they apply a
                    force to the strings by strumming. This force causes the
                    strings to vibrate and creates sound energy.
                  </p>
                </div>
                <div className='sound-hopper'>
                  <p>
                    The chirping sound of a <span>grasshopper</span> is caused
                    by tiny pegs on the back their legs rubbing against their
                    wings. This vibration creates the sound energy we hear as
                    chirping.
                  </p>
                  <img className='img-fluid' src={Hopper} alt='Grasshopper' />
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day3/energy'
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
                  value='/day3/mechanical-energy'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

SoundEnergy.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(SoundEnergy)
);
