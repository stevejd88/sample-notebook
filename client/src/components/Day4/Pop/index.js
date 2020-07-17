import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Satelite from "../../../assets/img/day4/satelite.png";

import "./pop.scss";

const initialState = {
  popJob: "",
  popChemist: "",
  popEngineer: "",
  popMath1: "",
  popMath2: ""
};

const Pop = ({
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
      for (const key in profile.day4Pop) {
        if (key in profileData) profileData[key] = profile.day4Pop[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { popJob, popChemist, popEngineer, popMath1, popMath2 } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day4/pop", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day4/pop", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='pop-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>POP! Goes the Fizz</h2>
                </legend>
                <div className='pop-mission'>
                  <div className='pop-mission-top'>
                    <img src={Satelite} className='img-fluid' alt='satelite' />
                    <div className='mission-statement'>
                      <h3>MISSION</h3>
                      <p>
                        The Department of Defense plans to launch a new defense
                        satellite into orbit but engineers worry that the rocket
                        may not reach an altitude sufficient to keep it in
                        orbit. Two engineers have suggestions for how to
                        increase the altitude of the satellite.{" "}
                        <span>
                          Your mission is to investigate if increasing the
                          amount of fuel that is ejected from the rocket will
                          increase its altitude.
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className='pop-jobs'>
                    <h3>Team Member Jobs</h3>
                    <Form.Row className='pop-jobs-top'>
                      <Form.Group>
                        <Form.Label>My job title is</Form.Label>
                        <Form.Control
                          type='text'
                          className='bs-input'
                          id='popJob'
                          name='popJob'
                          value={popJob}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='pop-jobs-description pop-chem-eng'>
                      <h4>Chemist</h4>
                      <Form.Group>
                        <ul>
                          <li>
                            <span>
                              - Measure{" "}
                              <input
                                type='text'
                                className='bs-input'
                                id='popChemist'
                                name='popChemist'
                                value={popChemist}
                                onChange={onChange}
                              />{" "}
                              of water
                            </span>
                          </li>
                          <li>
                            - Dispense water and Alka Seltzer into "rocket"
                          </li>
                          <li>- After trial clean supplies and repeat</li>
                        </ul>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='pop-jobs-description pop-chem-eng'>
                      <h4>Engineer</h4>
                      <Form.Group>
                        <ul>
                          <li>
                            <span>
                              - Place{" "}
                              <input
                                type='text'
                                className='bs-input'
                                id='popEngineer'
                                name='popEngineer'
                                value={popEngineer}
                                onChange={onChange}
                              />{" "}
                              on the rocket
                            </span>
                          </li>
                          <li>- Hold launch tube vertically</li>
                        </ul>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='pop-jobs-description'>
                      <h4>Mathematician</h4>
                      <Form.Group>
                        <ul>
                          <li>
                            <span>
                              -{" "}
                              <input
                                type='text'
                                className='bs-input'
                                id='popMath1'
                                name='popMath1'
                                value={popMath1}
                                onChange={onChange}
                              />{" "}
                              the altitude of the rocket
                            </span>
                          </li>
                          <li>
                            -{" "}
                            <span>
                              <input
                                type='text'
                                className='bs-input'
                                id='popMath2'
                                name='popMath2'
                                value={popMath2}
                                onChange={onChange}
                              />{" "}
                              the altitude of the rocket in the Engineering
                              Notebook
                            </span>
                          </li>
                        </ul>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='pop-jobs-description pop-chem-eng'>
                      <h4>Media Specialist</h4>
                      <Form.Group>
                        <ul>
                          <li>
                            - Make sure that your team understands what they
                            should be doing
                          </li>
                          <li>
                            - Record your teams work with ipad &#40;picture,
                            video&#40; and share out
                          </li>
                        </ul>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </div>
              </fieldset>
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
                  value='/day4/pop-data'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Pop.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Pop)
);
