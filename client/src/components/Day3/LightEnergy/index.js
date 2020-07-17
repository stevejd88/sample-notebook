import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import "./light.scss";

const initialState = {
  woodIsChecked: false,
  woodIsNotChecked: false,
  filterIsChecked: false,
  filterIsNotChecked: false,
  glassIsChecked: false,
  glassIsNotChecked: false,
  mirrorsIsChecked: false,
  mirrorsIsNotChecked: false,
  waterIsChecked: false,
  waterIsNotChecked: false,
  woodAR: "",
  woodChange: "",
  filterAR: "",
  filterChange: "",
  mirrorsAR: "",
  mirrorsChange: "",
  waterAR: "",
  waterChange: "",
  day3LightWoodDraw: "",
  day3LightFilterDraw: "",
  day3LightMirrorsDraw: "",
  day3LightWaterDraw: ""
};

const LightEnergy = ({
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
      for (const key in profile.day3Light) {
        if (key in profileData) profileData[key] = profile.day3Light[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    woodIsChecked,
    woodIsNotChecked,
    filterIsChecked,
    filterIsNotChecked,
    glassIsChecked,
    glassIsNotChecked,
    mirrorsIsChecked,
    mirrorsIsNotChecked,
    waterIsChecked,
    waterIsNotChecked,
    woodAR,
    woodChange,
    filterAR,
    filterChange,
    mirrorsAR,
    mirrorsChange,
    waterAR,
    waterChange
  } = formData;

  let { day3LightWoodDraw } = formData;
  let { day3LightFilterDraw } = formData;
  let { day3LightMirrorsDraw } = formData;
  let { day3LightWaterDraw } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day3/light", true, formData);
    if (!profile.day3LightWoodDraw) {
      addData("day3/light/wood-draw", false, formData);
    }
    if (!profile.day3LightFilterDraw) {
      addData("day3/light/filter-draw", false, formData);
    }
    if (!profile.day3LightMirrorsDraw) {
      addData("day3/light/mirrors-draw", false, formData);
    }
    if (!profile.day3LightWaterDraw) {
      addData("day3/light/water-draw", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day3/light", true, formData);
    if (!profile.day3LightWoodDraw) {
      addData("day3/light/wood-draw", false, formData);
    }
    if (!profile.day3LightFilterDraw) {
      addData("day3/light/filter-draw", false, formData);
    }
    if (!profile.day3LightMirrorsDraw) {
      addData("day3/light/mirrors-draw", false, formData);
    }
    if (!profile.day3LightWaterDraw) {
      addData("day3/light/water-draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='light-energy-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Station: Light Energy</h2>
                </legend>
                <p className='light-heading'>
                  <strong>Predict</strong> if the waves of light energy from the
                  flashlight will be able to pass through each of these
                  materials:
                </p>
                <div className='light-predict'>
                  <div className='light-predict-item'>
                    <p>Wood</p>
                    <div className='light-yn'>
                      <input
                        className='td'
                        type='checkbox'
                        id='woodIsChecked'
                        value={woodIsChecked}
                        checked={woodIsChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            woodIsChecked: true,
                            woodIsNotChecked: false
                          });
                        }}
                      />
                      <label htmlFor='woodIsChecked'>Yes</label>

                      <input
                        className='td'
                        type='checkbox'
                        id='woodIsNotChecked'
                        value={woodIsNotChecked}
                        checked={woodIsNotChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            woodIsNotChecked: true,
                            woodIsChecked: false
                          });
                        }}
                      />
                      <label htmlFor='woodIsNotChecked'>No</label>
                    </div>
                  </div>
                  <div className='light-predict-item'>
                    <p>Coffee Filter</p>
                    <div className='light-yn'>
                      <input
                        className='td'
                        type='checkbox'
                        id='filterIsChecked'
                        value={filterIsChecked}
                        checked={filterIsChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            filterIsChecked: true,
                            filterIsNotChecked: false
                          });
                        }}
                      />
                      <label htmlFor='filterIsChecked'>Yes</label>

                      <input
                        className='td'
                        type='checkbox'
                        id='filterIsNotChecked'
                        value={filterIsNotChecked}
                        checked={filterIsNotChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            filterIsNotChecked: true,
                            filterIsChecked: false
                          });
                        }}
                      />
                      <label htmlFor='filterIsNotChecked'>No</label>
                    </div>
                  </div>
                  <div className='light-predict-item'>
                    <p>Glass</p>
                    <div className='light-yn'>
                      <input
                        className='td'
                        type='checkbox'
                        id='glassIsChecked'
                        value={glassIsChecked}
                        checked={glassIsChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            glassIsChecked: true,
                            glassIsNotChecked: false
                          });
                        }}
                      />
                      <label htmlFor='glassIsChecked'>Yes</label>

                      <input
                        className='td'
                        type='checkbox'
                        id='glassIsNotChecked'
                        value={glassIsNotChecked}
                        checked={glassIsNotChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            glassIsNotChecked: true,
                            glassIsChecked: false
                          });
                        }}
                      />
                      <label htmlFor='glassIsNotChecked'>No</label>
                    </div>
                  </div>
                  <div className='light-predict-item'>
                    <p>Mirrors</p>
                    <div className='light-yn'>
                      <input
                        className='td'
                        type='checkbox'
                        id='mirrorsIsChecked'
                        value={mirrorsIsChecked}
                        checked={mirrorsIsChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            mirrorsIsChecked: true,
                            mirrorsIsNotChecked: false
                          });
                        }}
                      />
                      <label htmlFor='mirrorsIsChecked'>Yes</label>

                      <input
                        className='td'
                        type='checkbox'
                        id='mirrorsIsChecked'
                        value={mirrorsIsNotChecked}
                        checked={mirrorsIsNotChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            mirrorsIsNotChecked: true,
                            mirrorsIsChecked: false
                          });
                        }}
                      />
                      <label htmlFor='mirrorsIsChecked'>No</label>
                    </div>
                  </div>
                  <div className='light-predict-item'>
                    <p>Water</p>
                    <div className='light-yn'>
                      <input
                        className='td'
                        type='checkbox'
                        id='waterIsChecked'
                        value={waterIsChecked}
                        checked={waterIsChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            waterIsChecked: true,
                            waterIsNotChecked: false
                          });
                        }}
                      />
                      <label htmlFor='waterIsChecked'>Yes</label>

                      <input
                        className='td'
                        type='checkbox'
                        id='waterIsNotChecked'
                        value={waterIsNotChecked}
                        checked={waterIsNotChecked}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            waterIsNotChecked: true,
                            waterIsChecked: false
                          });
                        }}
                      />
                      <label htmlFor='waterIsNotChecked'>No</label>
                    </div>
                  </div>
                </div>

                <p>
                  <strong>Record</strong> your observations as you test each
                  material with the light.
                </p>
                <div className='light-observe-div'>
                  <div className='light-observe-item'>
                    <h3>Wood</h3>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Was the light absorbed / reflected / or allowed to
                              pass through the wood ?
                            </strong>
                          </Form.Label>
                          <textarea
                            className='bs-input'
                            id='woodAR'
                            name='woodAR'
                            value={woodAR}
                            onChange={onChange}
                            cols='20'
                            rows='2'
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day3LightWoodDraw: day3LightWoodDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightWoodDraw) {
                            day3LightWoodDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightWoodDraw) {
                            day3LightWoodDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='light-wood-canvas free-canvas'
                      ref={(canvasDraw) => (day3LightWoodDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={250}
                      saveData={profile.day3LightWoodDraw}
                    />
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Would the results change if it was mustard?
                            </strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='woodChange'
                            name='woodChange'
                            value={woodChange}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>
                  <div className='light-observe-item'>
                    <h3>Coffee Filter Paper</h3>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Was the light absorbed / reflected / or allowed to
                              pass through the paper?{" "}
                            </strong>
                          </Form.Label>
                          <textarea
                            className='bs-input'
                            id='filterAR'
                            name='filterAR'
                            value={filterAR}
                            onChange={onChange}
                            cols='20'
                            rows='2'
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day3LightFilterDraw: day3LightFilterDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightFilterDraw) {
                            day3LightFilterDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightFilterDraw) {
                            day3LightFilterDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='light-paper-canvas free-canvas'
                      ref={(canvasDraw) => (day3LightFilterDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={250}
                      saveData={profile.day3LightFilterDraw}
                    />
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Would the results change if it was black paper?
                            </strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='filterChange'
                            name='filterChange'
                            value={filterChange}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>

                  <div className='light-observe-item'>
                    <h3>Mirrors</h3>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Was the light absorbed / reflected / or allowed to
                              pass through the mirrors?
                            </strong>
                          </Form.Label>
                          <textarea
                            className='bs-input'
                            id='mirrorsAR'
                            name='mirrorsAR'
                            value={mirrorsAR}
                            onChange={onChange}
                            cols='20'
                            rows='2'
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day3LightMirrorsDraw: day3LightMirrorsDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightMirrorsDraw) {
                            day3LightMirrorsDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightMirrorsDraw) {
                            day3LightMirrorsDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='light-mirrors-canvas free-canvas'
                      ref={(canvasDraw) => (day3LightMirrorsDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={250}
                      saveData={profile.day3LightMirrorsDraw}
                    />
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Would the angle of the light change the results?
                            </strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='mirrorsChange'
                            name='mirrorsChange'
                            value={mirrorsChange}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>

                  <div className='light-observe-item'>
                    <h3>Water</h3>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Was the light absorbed / reflected / or allowed to
                              pass through the water?
                            </strong>
                          </Form.Label>
                          <textarea
                            className='bs-input'
                            id='waterAR'
                            name='waterAR'
                            value={waterAR}
                            onChange={onChange}
                            cols='20'
                            rows='2'
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <div className='btns-scu'>
                      <button
                        className='btn-save'
                        type='button'
                        onClick={() => {
                          setFormData({
                            ...formData,
                            day3LightWaterDraw: day3LightWaterDraw.getSaveData()
                          });
                        }}
                      >
                        Save
                      </button>
                      <button
                        className='btn-clear'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightWaterDraw) {
                            day3LightWaterDraw.clear();
                          }
                        }}
                      >
                        Clear
                      </button>
                      <button
                        className='btn-undo'
                        type='button'
                        onClick={() => {
                          if (!profile.day3LightWaterDraw) {
                            day3LightWaterDraw.undo();
                          }
                        }}
                      >
                        Undo
                      </button>
                    </div>
                    <CanvasDraw
                      className='light-water-canvas free-canvas'
                      ref={(canvasDraw) => (day3LightWaterDraw = canvasDraw)}
                      lazyRadius={0}
                      brushColor='rgba(155,12,60,0.3)'
                      brushRadius={2}
                      canvasWidth={250}
                      canvasHeight={250}
                      saveData={profile.day3LightWaterDraw}
                    />
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              Would the angle of the light change the results?
                            </strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='waterChange'
                            name='waterChange'
                            value={waterChange}
                            onChange={onChange}
                          />{" "}
                        </Form.Group>
                      </Col>
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
                  value='/day3/electrical-energy'
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
                  value='/day3/thermal-energy'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

LightEnergy.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(LightEnergy)
);
