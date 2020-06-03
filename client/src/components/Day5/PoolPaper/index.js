import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import "./poolpaper.scss";

const initialState = {
  poolPredict: "",
  poolObserve: "",
  poolSurprised: "",
  bridgePredict: "",
  bridgeObserve: "",
  bridgeSurprised: "",
  shipsPredict: "",
  shipsObserve: "",
  shipsSurprised: "",
  day5PoolDraw: "",
  day5bridgeDraw: "",
  day5ShipsDraw: ""
};

const PoolPaper = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day5FluidStations) {
        if (key in profileData)
          profileData[key] = profile.day5FluidStations[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    poolPredict,
    poolObserve,
    poolSurprised,
    bridgePredict,
    bridgeObserve,
    bridgeSurprised,
    shipsPredict,
    shipsObserve,
    shipsSurprised
  } = formData;

  let { day5PoolDraw } = formData;
  let { day5bridgeDraw } = formData;
  let { day5ShipsDraw } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/fluid-stations", true, formData);
    if (!profile.day5PoolDraw) {
      addData("day5/fluid-pool/draw", false, formData);
    }
    if (!profile.day5bridgeDraw) {
      addData("day5/fluid-bridge/draw", false, formData);
    }
    if (!profile.day5ShipsDraw) {
      addData("day5/fluid-ships/draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='stations2-container'>
            <h2>Fluid Stations</h2>
            <Form onSubmit={onSubmit}>
              <fieldset className='station'>
                <legend>
                  <h4>Station: Pool Balls</h4>
                </legend>
                <div className='station-body'>
                  <div className='station-qs'>
                    <Form.Row>
                      <Form.Group>
                        <Form.Label>
                          <strong>
                            1. Predict what will happen when you blow a steady
                            stream of air between the two pool balls.
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='poolPredict'
                          name='poolPredict'
                          value={poolPredict}
                          onChange={onChange}
                          cols='30'
                          rows='3'
                        ></textarea>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group>
                        <Form.Label>
                          <strong>2. What did you observe?</strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='poolObserve'
                          name='poolObserve'
                          value={poolObserve}
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
                            3. Were you surprised by the results? Explain.
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='poolSurprised'
                          name='poolSurprised'
                          value={poolSurprised}
                          onChange={onChange}
                          cols='30'
                          rows='3'
                        ></textarea>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  {/* end station-pool-qs div */}

                  <div className='station-canvas'>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day5PoolDraw: day5PoolDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day5PoolDraw) {
                            day5PoolDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day5PoolDraw) {
                            day5PoolDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='pool-canvas free-canvas'
                      ref={(canvasDraw) => (day5PoolDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={400}
                      saveData={profile.day5PoolDraw}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className='station'>
                <legend>
                  <h4>Station: Paper Bridge</h4>
                </legend>
                <div className='station-body'>
                  <div className='station-qs'>
                    <Form.Row>
                      <Form.Group>
                        <Form.Label>
                          <strong>
                            1. Predict what will happen when you blow a steady
                            stream of fast air underneath the paper bridge.
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='bridgePredict'
                          name='bridgePredict'
                          value={bridgePredict}
                          onChange={onChange}
                          cols='30'
                          rows='3'
                        ></textarea>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group>
                        <Form.Label>
                          <strong>2. What did you observe?</strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='bridgeObserve'
                          name='bridgeObserve'
                          value={bridgeObserve}
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
                            3. Were you surprised by the results? Explain.
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='bridgeSurprised'
                          name='bridgeSurprised'
                          value={bridgeSurprised}
                          onChange={onChange}
                          cols='30'
                          rows='3'
                        ></textarea>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  {/* end station-bridge-qs div */}

                  <div className='station-canvas'>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day5bridgeDraw: day5bridgeDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day5bridgeDraw) {
                            day5bridgeDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day5bridgeDraw) {
                            day5bridgeDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='bridge-canvas free-canvas'
                      ref={(canvasDraw) => (day5bridgeDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={400}
                      saveData={profile.day5bridgeDraw}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className='station'>
                <legend>
                  <h4>Station: Ships in a Tank</h4>
                </legend>
                <div className='station-body'>
                  <div className='station-qs'>
                    <Form.Row>
                      <Form.Group>
                        <Form.Label>
                          <strong>
                            1. Predict what will happen when you blow water
                            between the boats.
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='shipsPredict'
                          name='shipsPredict'
                          value={shipsPredict}
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
                            2. What happens when the water flow between the
                            boats is increased?
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='shipsObserve'
                          name='shipsObserve'
                          value={shipsObserve}
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
                            3. Were you surprised by the results? Explain.
                          </strong>
                        </Form.Label>
                        <textarea
                          className='bs-input'
                          id='shipsSurprised'
                          name='shipsSurprised'
                          value={shipsSurprised}
                          onChange={onChange}
                          cols='30'
                          rows='3'
                        ></textarea>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  {/* end station-ships-qs div */}

                  <div className='station-ships-canvas'>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day5ShipsDraw: day5ShipsDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day5ShipsDraw) {
                            day5ShipsDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day5ShipsDraw) {
                            day5ShipsDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='ships-canvas free-canvas'
                      ref={(canvasDraw) => (day5ShipsDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={400}
                      saveData={profile.day5ShipsDraw}
                    />
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

PoolPaper.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(PoolPaper)
);
