import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addNewtonsLaws,
  addNewtonsAR,
  getCurrentProfile
} from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";

import Spinner from "../../layout/Spinner";
import Rocket from "../../../assets/img/day2/rocket.png";
import "./newtons.scss";

const initialState = {
  day2NewtonsLaw1: "",
  day2NewtonsLaw2: "",
  day2NewtonsLaw3: "",
  action: "",
  reaction: ""
};

const Newtons = ({
  profile: { profile, loading },
  addNewtonsLaws,
  addNewtonsAR,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day2NewtonsAR) {
        if (key in profileData) profileData[key] = profile.day2NewtonsAR[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { action, reaction } = formData;

  let { day2NewtonsLaw1 } = formData;
  let { day2NewtonsLaw2 } = formData;
  let { day2NewtonsLaw3 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addNewtonsAR(formData);
    if (!profile.day2NewtonsLaw1) {
      addNewtonsLaws(1, formData);
    }
    if (!profile.day2NewtonsLaw2) {
      addNewtonsLaws(2, formData);
    }
    if (!profile.day2NewtonsLaw3) {
      addNewtonsLaws(3, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section id='laws-motion-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Newton's Laws of Motion</h2>
                </legend>
                <div className='motion-laws-div'>
                  <div className='law-div'>
                    <div className='law-text'>
                      <p>
                        <strong>
                          1.{" "}
                          <span>
                            An object at rest will stay at rest unless acted
                            upon by an outside force.
                          </span>
                        </strong>
                      </p>
                      <p>
                        <strong>
                          {" "}
                          An object in Motion will stay in motion unless acted
                          upon by an outside force.
                        </strong>
                      </p>
                    </div>
                    <div className='law-drawing'>
                      <div className='btns-scu'>
                        <button
                          className='btn-save'
                          type='button'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              day2NewtonsLaw1: day2NewtonsLaw1.getSaveData()
                            });
                          }}
                        >
                          Save
                        </button>
                        <button
                          className='btn-clear'
                          type='button'
                          onClick={() => {
                            if (!profile.day2NewtonsLaw1) {
                              day2NewtonsLaw1.clear();
                            }
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className='btn-undo'
                          type='button'
                          onClick={() => {
                            if (!profile.day2NewtonsLaw1) {
                              day2NewtonsLaw1.undo();
                            }
                          }}
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        className='law1-graph-canvas free-canvas'
                        ref={(canvasDraw) => (day2NewtonsLaw1 = canvasDraw)}
                        lazyRadius={0}
                        brushColor='rgba(155,12,60,0.3)'
                        brushRadius={2}
                        canvasWidth={250}
                        canvasHeight={250}
                        saveData={profile.day2NewtonsLaw1}
                      />
                    </div>
                  </div>
                  <div className='law-div'>
                    <div className='law-text'>
                      <p>
                        <strong>
                          2.{" "}
                          <span>
                            F = <u>M * A </u>
                          </span>
                        </strong>
                      </p>
                      <p>
                        <span>
                          <strong>Force = Mass x Acceleration</strong>
                        </span>
                      </p>
                    </div>
                    <div className='law-drawing'>
                      <div className='btns-scu'>
                        <button
                          className='btn-save'
                          type='button'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              day2NewtonsLaw2: day2NewtonsLaw2.getSaveData()
                            });
                          }}
                        >
                          Save
                        </button>
                        <button
                          className='btn-clear'
                          type='button'
                          onClick={() => {
                            if (!profile.day2NewtonsLaw2) {
                              day2NewtonsLaw2.clear();
                            }
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className='btn-undo'
                          type='button'
                          onClick={() => {
                            if (!profile.day2NewtonsLaw2) {
                              day2NewtonsLaw2.undo();
                            }
                          }}
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        className='law2-graph-canvas free-canvas'
                        ref={(canvasDraw) => (day2NewtonsLaw2 = canvasDraw)}
                        lazyRadius={0}
                        brushColor='rgba(155,12,60,0.3)'
                        brushRadius={2}
                        canvasWidth={250}
                        canvasHeight={250}
                        saveData={profile.day2NewtonsLaw2}
                      />
                    </div>
                  </div>
                  <div className='law-div'>
                    <div className='law-text'>
                      <p>
                        <strong>
                          3.{" "}
                          <span>
                            For every <u>action</u>, there is an equal and
                            opposite <u>reaction</u>.
                          </span>
                        </strong>
                      </p>
                    </div>
                    <div className='law-drawing'>
                      <div className='btns-scu'>
                        <button
                          className='btn-save'
                          type='button'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              day2NewtonsLaw3: day2NewtonsLaw3.getSaveData()
                            });
                          }}
                        >
                          Save
                        </button>
                        <button
                          className='btn-clear'
                          type='button'
                          onClick={() => {
                            if (!profile.day2NewtonsLaw3) {
                              day2NewtonsLaw3.clear();
                            }
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className='btn-undo'
                          type='button'
                          onClick={() => {
                            if (!profile.day2NewtonsLaw3) {
                              day2NewtonsLaw3.undo();
                            }
                          }}
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        className='law3-graph-canvas free-canvas'
                        ref={(canvasDraw) => (day2NewtonsLaw3 = canvasDraw)}
                        brushColor='rgba(155,12,60,0.3)'
                        lazyRadius={0}
                        brushRadius={2}
                        canvasWidth={250}
                        canvasHeight={250}
                        saveData={profile.day2NewtonsLaw3}
                      />
                    </div>
                  </div>
                </div>

                <div className='newtons-rocket'>
                  <div>
                    <img
                      className='img-fluid'
                      src={Rocket}
                      alt='rocket launching'
                    />
                  </div>

                  <div className='action-reaction'>
                    <h3>
                      <u>Applying Newton's 3rd law to launching your rocket,</u>
                    </h3>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            The thrust of the gases pushing down is the
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            placeholder='action / reaction'
                            id='newtonAction'
                            name='action'
                            value={action}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>The rocket moving up is the</Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            placeholder='action / reaction'
                            id='newtonReaction'
                            name='reaction'
                            value={reaction}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>
                </div>
              </fieldset>
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
            </Form>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Newtons.propTypes = {
  addNewtonsLaws: PropTypes.func.isRequired,
  addNewtonsAR: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addNewtonsLaws,
  addNewtonsAR,
  getCurrentProfile
})(withRouter(Newtons));
