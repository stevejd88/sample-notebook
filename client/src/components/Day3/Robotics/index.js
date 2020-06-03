import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addRobotics,
  addRoboticsDraw,
  getCurrentProfile
} from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";
import Spinner from "../../layout/Spinner";
import RoboDog from "../../../assets/img/day3/robo-dog.png";
import Robot from "../../../assets/img/day3/robo.png";

import "./robotics.scss";

const initialState = {
  robot: "",
  robotFunc: "",
  instructions: "",
  common1: "",
  common2: "",
  common3: "",
  day3RoboticsDraw: ""
};

const Robotics = ({
  profile: { profile, loading },
  addRobotics,
  addRoboticsDraw,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day3Robotics) {
        if (key in profileData) profileData[key] = profile.day3Robotics[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    robot,
    robotFunc,
    instructions,
    common1,
    common2,
    common3
  } = formData;

  let { day3RoboticsDraw } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addRobotics(formData);
    if (!profile.day3RoboticsDraw) {
      addRoboticsDraw(formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='robotics-container'>
            <h2>Robotics</h2>
            <Form onSubmit={onSubmit}>
              <fieldset className='engage-robots'>
                <legend>
                  {" "}
                  What do you picture when you hear <strong>"ROBOT"</strong>?
                </legend>
                <Form.Row>
                  <Col>
                    <Form.Group className='top-robot-div'>
                      <textarea
                        id='robot'
                        className='bs-input'
                        name='robot'
                        value={robot}
                        onChange={onChange}
                        cols='30'
                        rows='4'
                      ></textarea>

                      <div className='robot-draw-div'>
                        <div className='btns-scu'>
                          <button
                            className='btn-save'
                            type='button'
                            onClick={() => {
                              setFormData({
                                ...formData,
                                day3RoboticsDraw: day3RoboticsDraw.getSaveData()
                              });
                            }}
                          >
                            Save
                          </button>
                          <button
                            className='btn-clear'
                            type='button'
                            onClick={() => {
                              if (!profile.day3RoboticsDraw) {
                                day3RoboticsDraw.clear();
                              }
                            }}
                          >
                            Clear
                          </button>
                          <button
                            className='btn-undo'
                            type='button'
                            onClick={() => {
                              if (!profile.day3RoboticsDraw) {
                                day3RoboticsDraw.undo();
                              }
                            }}
                          >
                            Undo
                          </button>
                        </div>

                        <br />

                        <CanvasDraw
                          className='robotics-canvas free-canvas'
                          ref={(canvasDraw) => (day3RoboticsDraw = canvasDraw)}
                          brushColor='rgba(155,12,60,0.3)'
                          lazyRadius={0}
                          brushRadius={2}
                          canvasWidth={250}
                          canvasHeight={250}
                          hideGrid={false}
                          saveData={profile.day3RoboticsDraw}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </fieldset>

              <fieldset className='more-robots'>
                <legend>
                  <h2>Robots</h2>
                </legend>

                <div className='more-robots-heading'>
                  <div className='more-robots-top'>
                    <img className='img-fluid' src={RoboDog} alt='Robot Dog' />
                    <div className='robo-wordbank'>
                      <h3>Word Bank</h3>
                      <ul>
                        <li>program</li>
                        <li>control</li>
                        <li>behavior</li>
                        <li>machine</li>
                        <li>body</li>
                      </ul>
                    </div>
                  </div>

                  <div className='more-robots-bottom'>
                    <div className='more-robots-qs'>
                      <Form.Row>
                        <Form.Group>
                          <span>
                            - A robot is any
                            <input
                              type='text'
                              className='bs-input'
                              id='robotFunc'
                              name='robotFunc'
                              value={robotFunc}
                              onChange={onChange}
                            />
                            that can be programmed to do work automatically.
                          </span>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group>
                          <span>
                            - The instructions that tell a robot what to do are
                            called the
                            <input
                              type='text'
                              className='bs-input'
                              id='robo-intr'
                              name='instructions'
                              value={instructions}
                              onChange={onChange}
                            />
                          </span>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row className='robots-in-common'>
                        <p>All robots have three things in common:</p>
                        <Form.Group>
                          <Form.Label>1.</Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='common1'
                            name='common1'
                            value={common1}
                            onChange={onChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>2.</Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='common2'
                            name='common2'
                            value={common2}
                            onChange={onChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>3.</Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='common3'
                            name='common3'
                            value={common3}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>
                    <img className='img-fluid' src={Robot} alt='robot' />
                  </div>
                </div>
              </fieldset>

              <button className='btn btn-primary' type='submit'>
                Save
              </button>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Robotics.propTypes = {
  addRobotics: PropTypes.func.isRequired,
  addRoboticsDraw: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addRobotics,
  addRoboticsDraw,
  getCurrentProfile
})(withRouter(Robotics));
