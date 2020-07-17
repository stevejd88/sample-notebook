import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import "./sticky.scss";

const initialState = {
  stickyPredict: "",
  stickyDirection: "",
  stickyAir: "",
  stickyBehave: "",
  bernouli1: "",
  bernouli2: "",
  day5StickyDraw: "",
  day5BernouliDraw: ""
};

const Sticky = ({
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
      for (const key in profile.day5FluidCont) {
        if (key in profileData) profileData[key] = profile.day5FluidCont[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    stickyPredict,
    stickyDirection,
    stickyAir,
    stickyBehave,
    bernouli1,
    bernouli2
  } = formData;

  let { day5StickyDraw } = formData;
  let { day5BernouliDraw } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day5/fluid-stations/contd", true, formData);
    if (!profile.day5StickyDraw) {
      addData("day5/fluid-sticky/draw", false, formData);
    }
    if (!profile.day5BernouliDraw) {
      addData("day5/fluid-bernouli/draw", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/fluid-stations/contd", true, formData);
    if (!profile.day5StickyDraw) {
      addData("day5/fluid-sticky/draw", false, formData);
    }
    if (!profile.day5BernouliDraw) {
      addData("day5/fluid-bernouli/draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='fluid-stations2-container'>
            <h2>Fluid Stations contd.</h2>
            <Form onSubmit={onSubmit}>
              <fieldset className='station-sticky station'>
                <legend>
                  <h4>Station: Sticky Papers</h4>
                </legend>
                <div className='station-body'>
                  <div className='station-qs'>
                    <Form.Row>
                      <Form.Group>
                        <Form.Label>
                          <strong>
                            1. Predict what will happen when you blow air
                            between two pieces of paper:
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='stickyPredict'
                          name='stickyPredict'
                          value={stickyPredict}
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
                            2. In what direction did the pieces of paper move?
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='stickyDirection'
                          name='stickyDirection'
                          value={stickyDirection}
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
                            3. Did the air move/flow faster when you blew hard
                            or soft?
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='stickyAir'
                          name='stickyAir'
                          value={stickyAir}
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
                            4. How did the behavior of the papers change as you
                            blew hard and then soft?
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='stickyBehave'
                          name='stickyBehave'
                          value={stickyBehave}
                          onChange={onChange}
                          cols='30'
                          rows='3'
                        ></textarea>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  {/* end station-sticky-qs div */}

                  <div className='station-sticky-canvas'>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day5StickyDraw: day5StickyDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day5StickyDraw) {
                            day5StickyDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day5StickyDraw) {
                            day5StickyDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='sticky-canvas free-canvas'
                      ref={(canvasDraw) => (day5StickyDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={250}
                      saveData={profile.day5StickyDraw}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className='berns-container'>
                <legend>
                  <h4>Bernoulli's Principle</h4>
                </legend>
                <Form.Row className='bern-inputs'>
                  <Form.Group>
                    <span>
                      <strong>-</strong> The{" "}
                      <input
                        type='text'
                        className='bs-input'
                        id='bernouli1'
                        name='bernouli1'
                        value={bernouli1}
                        onChange={onChange}
                      />{" "}
                      a fluid moves past an object the{" "}
                      <input
                        type='text'
                        className='bs-input'
                        id='bernouli2'
                        name='bernouli2'
                        value={bernouli2}
                        onChange={onChange}
                      />{" "}
                      pressure it exerts on that object.
                    </span>
                  </Form.Group>
                </Form.Row>

                <div className='bernoullis-canvas'>
                  <p>
                    <strong>
                      Use this space to take notes or create a drawing that will
                      help you remember Bernoulli's Principle:
                    </strong>
                  </p>
                  <div className='btns-scu'>
                    <button
                      className='btn-save'
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          day5BernouliDraw: day5BernouliDraw.getSaveData()
                        });
                      }}
                    >
                      Save
                    </button>
                    <button
                      className='btn-clear'
                      type='button'
                      onClick={() => {
                        if (!profile.day5BernouliDraw) {
                          day5BernouliDraw.clear();
                        }
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className='btn-undo'
                      type='button'
                      onClick={() => {
                        if (!profile.day5BernouliDraw) {
                          day5BernouliDraw.undo();
                        }
                      }}
                    >
                      Undo
                    </button>
                  </div>
                  <CanvasDraw
                    className='bernoullis-canvas free-canvas'
                    ref={(canvasDraw) => (day5BernouliDraw = canvasDraw)}
                    lazyRadius={0}
                    brushColor='rgba(155,12,60,0.3)'
                    brushRadius={2}
                    canvasWidth={650}
                    canvasHeight={250}
                    saveData={profile.day5BernouliDraw}
                  />
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day5/fluid-stations'
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
                  value='/day5/eggbert'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Sticky.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Sticky)
);
