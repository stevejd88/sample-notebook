import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import Beaker from "../../../assets/img/day3/beaker.png";

import "./thermal.scss";

const initialState = {
  preColorRoom: "",
  preColorCold: "",
  preColorWarm: "",
  ColorRoomTxt: "",
  ColorColdTxt: "",
  ColorWarmTxt: "",
  day3HeatRoomDraw: "",
  day3HeatColdDraw: "",
  day3HeatWarmDraw: ""
};

const ThermalEnergy = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day3Thermal) {
        if (key in profileData) profileData[key] = profile.day3Thermal[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    preColorRoom,
    preColorCold,
    preColorWarm,
    ColorRoomTxt,
    ColorColdTxt,
    ColorWarmTxt
  } = formData;

  let { day3HeatRoomDraw } = formData;
  let { day3HeatColdDraw } = formData;
  let { day3HeatWarmDraw } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day3/thermal", true, formData);
    if (!profile.day3HeatRoomDraw) {
      addData("day3/themal/room-draw", false, formData);
    }
    if (!profile.day3HeatColdDraw) {
      addData("day3/themal/cold-draw", false, formData);
    }
    if (!profile.day3HeatWarmDraw) {
      addData("day3/themal/warm-draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='thermal-energy-container'>
            <h2>Station: Thermal Energy</h2>
            <Form onSubmit={onSubmit}>
              <fieldset className='thermal-predict-div'>
                <legend>
                  <strong>Predict</strong> how the food coloring will react when
                  dropped into each beaker of water:
                </legend>
                <Form.Row className='thermal-pre-room'>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          When I place the food coloring in the{" "}
                          <span>room temperature</span> water it will:
                        </strong>
                      </Form.Label>
                      <textarea
                        id='thermal-preColorRoom'
                        name='preColorRoom'
                        value={preColorRoom}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row className='thermal-pre-cold'>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          When I place the food coloring in the{" "}
                          <span>cold water</span> it will
                        </strong>
                      </Form.Label>
                      <textarea
                        id='thermal-preColorCold'
                        name='preColorCold'
                        value={preColorCold}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row className='thermal-pre-warm'>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          When I place the food coloring in the{" "}
                          <span>warm water</span> it will
                        </strong>
                      </Form.Label>
                      <textarea
                        id='thermal-preColorWarm'
                        name='preColorWarm'
                        value={preColorWarm}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </fieldset>

              <fieldset className='themal-observe-div'>
                <legend>
                  <strong> Record</strong> your observations and answer why you
                  believe that happened:
                </legend>
                <Form.Row className='thermal-observe-room therm-observe-item'>
                  <div className='thermal-canvas-div'>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day3HeatRoomDraw: day3HeatRoomDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day3HeatRoomDraw) {
                            day3HeatRoomDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day3HeatRoomDraw) {
                            day3HeatRoomDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='thermal-room-canvas '
                      ref={(canvasDraw) => (day3HeatRoomDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={300}
                      canvasHeight={300}
                      imgSrc={Beaker}
                      saveData={profile.day3HeatRoomDraw}
                    />
                  </div>

                  <Form.Group>
                    <Form.Label>
                      <strong>Room temperature water:</strong>
                    </Form.Label>
                    <textarea
                      id='ColorRoomTxt'
                      name='ColorRoomTxt'
                      value={ColorRoomTxt}
                      onChange={onChange}
                      cols='20'
                      rows='3'
                    ></textarea>
                  </Form.Group>
                </Form.Row>
                <Form.Row className='thermal-observe-cold therm-observe-item'>
                  <div className='thermal-canvas-div'>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day3HeatColdDraw: day3HeatColdDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day3HeatColdDraw) {
                            day3HeatColdDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day3HeatColdDraw) {
                            day3HeatColdDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='thermal-cold-canvas '
                      ref={(canvasDraw) => (day3HeatColdDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={300}
                      canvasHeight={300}
                      imgSrc={Beaker}
                      saveData={profile.day3HeatColdDraw}
                    />
                  </div>

                  <Form.Group>
                    <Form.Label>
                      <strong>Cold water:</strong>
                    </Form.Label>
                    <textarea
                      id='ColorColdTxt'
                      name='ColorColdTxt'
                      value={ColorColdTxt}
                      onChange={onChange}
                      cols='20'
                      rows='3'
                    ></textarea>
                  </Form.Group>
                </Form.Row>
                <Form.Row className='thermal-observe-warm therm-observe-item'>
                  <div className='thermal-canvas-div'>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day3HeatWarmDraw: day3HeatWarmDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day3HeatWarmDraw) {
                            day3HeatWarmDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day3HeatWarmDraw) {
                            day3HeatWarmDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='thermal-warm-canvas '
                      ref={(canvasDraw) => (day3HeatWarmDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={300}
                      canvasHeight={300}
                      imgSrc={Beaker}
                      saveData={profile.day3HeatWarmDraw}
                    />
                  </div>

                  <Form.Group>
                    <Form.Label>
                      <strong>Warm water:</strong>
                    </Form.Label>
                    <textarea
                      id='ColorWarmTxt'
                      name='ColorWarmTxt'
                      value={ColorWarmTxt}
                      onChange={onChange}
                      cols='20'
                      rows='3'
                    ></textarea>
                  </Form.Group>
                </Form.Row>
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

ThermalEnergy.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(ThermalEnergy)
);
