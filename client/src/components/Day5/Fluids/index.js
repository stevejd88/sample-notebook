import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Wall from "../../../assets/img/day5/wall.png";
import Liquid from "../../../assets/img/day5/liquid.png";
import Smoke from "../../../assets/img/day5/smoke.png";

import "./fluids.scss";

const initialState = {
  solidIs: false,
  solidIsNot: false,
  liquidIs: false,
  liquidIsNot: false,
  gasIs: false,
  gasIsNot: false,
  liftPredict: "",
  blowerOff: "",
  blowerSlow: "",
  blowerHigh: "",
  scaleChange: "",
  liftSurprised: ""
};

const Fluids = ({
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
      for (const key in profile.day5Fluids) {
        if (key in profileData) profileData[key] = profile.day5Fluids[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    solidIs,
    solidIsNot,
    liquidIs,
    liquidIsNot,
    gasIs,
    gasIsNot,
    liftPredict,
    blowerOff,
    blowerSlow,
    blowerHigh,
    scaleChange,
    liftSurprised
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day5/fluids", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/fluids", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='fluids-container'>
            <Form onSubmit={onSubmit}>
              <fieldset className='fluid-engage-fieldset'>
                <legend>
                  <h2>What is a Fluid?</h2>
                </legend>
                <div className='fluid-identify'>
                  <div className='fluids-checklist'>
                    <div className='fluid-is'>
                      <p>
                        A{" "}
                        <span>
                          <strong>FLUID</strong>
                        </span>
                        :
                      </p>
                      <ul>
                        <li>- does not have its own shape</li>
                        <li>- separates and flows</li>
                        <li>- can be poured</li>
                      </ul>
                    </div>

                    <div className='table-scroll'>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Question</th>
                            <th>Y</th>
                            <th>N</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Is a solid a fluid?</strong>
                            </td>
                            <td>
                              <div
                                className={
                                  solidIs
                                    ? "circled-it fluid-solid-yes"
                                    : "fluid-solid-yes"
                                }
                              >
                                <p
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      solidIs: true,
                                      solidIsNot: false
                                    });
                                  }}
                                >
                                  YES
                                </p>
                              </div>
                            </td>
                            <td>
                              <div
                                className={
                                  solidIsNot
                                    ? "circled-it fluid-solid-no"
                                    : "fluid-solid-no"
                                }
                              >
                                <p
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      solidIsNot: true,
                                      solidIs: false
                                    });
                                  }}
                                >
                                  NO
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Is a liquid a fluid?</strong>
                            </td>
                            <td>
                              <div
                                className={
                                  liquidIs
                                    ? "circled-it fluid-liquid-yes"
                                    : "fluid-liquid-yes"
                                }
                              >
                                <p
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      liquidIs: true,
                                      liquidIsNot: false
                                    });
                                  }}
                                >
                                  YES
                                </p>
                              </div>
                            </td>
                            <td>
                              <div
                                className={
                                  liquidIsNot
                                    ? "circled-it fluid-liquid-no"
                                    : "fluid-liquid-no"
                                }
                              >
                                <p
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      liquidIsNot: true,
                                      liquidIs: false
                                    });
                                  }}
                                >
                                  NO
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Is a gas a fluid?</strong>
                            </td>
                            <td>
                              <div
                                className={
                                  gasIs
                                    ? "circled-it fluid-gas-yes"
                                    : "fluid-gas-yes"
                                }
                              >
                                <p
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      gasIs: true,
                                      gasIsNot: false
                                    });
                                  }}
                                >
                                  YES
                                </p>
                              </div>
                            </td>
                            <td>
                              <div
                                className={
                                  gasIsNot
                                    ? "circled-it fluid-gas-no"
                                    : "fluid-gas-no"
                                }
                              >
                                <p
                                  onClick={() => {
                                    setFormData({
                                      ...formData,
                                      gasIsNot: true,
                                      gasIs: false
                                    });
                                  }}
                                >
                                  NO
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    {/* End of table-scroll div */}
                  </div>

                  <div className='fluid-imgs'>
                    <img
                      src={Wall}
                      alt='a wall'
                      className='img-wall img-fluid'
                    />
                    <img
                      src={Liquid}
                      alt='beakers of liquid'
                      className='img-beakers img-fluid'
                    />
                    <img
                      src={Smoke}
                      alt='oil refinery smoke stacks'
                      className='img-smoke img-fluid'
                    />
                  </div>
                </div>
                {/* end fluid-identify div */}
              </fieldset>

              <fieldset className='station-lift'>
                <legend>
                  <h4>Station: Lift</h4>
                </legend>
                <div className='lift-station-body'>
                  <Form.Row>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          Predict what will happen when you blow air on the
                          outside edge of the airfoil.
                        </strong>
                      </Form.Label>
                      <textarea
                        className='bs-input'
                        id='liftPredict'
                        name='liftPredict'
                        value={liftPredict}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Form.Row>

                  <div className='table-scroll'>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Blower Off</th>
                          <th>Blower Slow Speed</th>
                          <th>Blower High Speed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Digital Scale Readings</td>
                          <td>
                            <input
                              type='text'
                              id='blowerOff'
                              name='blowerOff'
                              value={blowerOff}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='blowerSlow'
                              name='blowerSlow'
                              value={blowerSlow}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='blowerHigh'
                              name='blowerHigh'
                              value={blowerHigh}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                  <Form.Row>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          1. How did the scale reading change as you increased
                          the blower speed?
                        </strong>
                      </Form.Label>
                      <textarea
                        className='bs-input'
                        id='scaleChange'
                        name='scaleChange'
                        value={scaleChange}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          2. Were you surprised by the changes you observed?
                          Explain.
                        </strong>
                      </Form.Label>
                      <textarea
                        className='bs-input'
                        id='liftSurprised'
                        name='liftSurprised'
                        value={liftSurprised}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Form.Row>
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day5'
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
                  value='/day5/fluid-stations'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Fluids.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Fluids)
);
