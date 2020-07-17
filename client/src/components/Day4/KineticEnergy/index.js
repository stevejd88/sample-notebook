import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import "./kinetic.scss";

const initialState = {
  oneSOM: "",
  twoSOM: "",
  threeSOM: "",
  matterChange: "",
  day4oneSOMPic: "",
  day4twoSOMPic: "",
  day4threeSOMPic: ""
};

const KineticEnergy = ({
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
      for (const key in profile.day4Kinetic) {
        if (key in profileData) profileData[key] = profile.day4Kinetic[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { oneSOM, twoSOM, threeSOM, matterChange } = formData;

  let { day4oneSOMPic } = formData;
  let { day4twoSOMPic } = formData;
  let { day4threeSOMPic } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day4/kinetic", true, formData);
    if (!profile.day4oneSOMPic) {
      addData("day4/kin-solid/draw", false, formData);
    }
    if (!profile.day4twoSOMPic) {
      addData("day4/kin-liquid/draw", false, formData);
    }
    if (!profile.day4threeSOMPic) {
      addData("day4/kin-gas/draw", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day4/kinetic", true, formData);
    if (!profile.day4oneSOMPic) {
      addData("day4/kin-solid/draw", false, formData);
    }
    if (!profile.day4twoSOMPic) {
      addData("day4/kin-liquid/draw", false, formData);
    }
    if (!profile.day4threeSOMPic) {
      addData("day4/kin-gas/draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='kinetic-energy-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Kinetic Energy and States of Matter</h2>
                </legend>
                <p className='kin-intro'>
                  <strong>
                    Record your observations as you move the jar of molecules in
                    each box. How do the molecules in the jar change as the size
                    of the movement box increases?
                  </strong>
                </p>
                <div className='states-container'>
                  <div className='kin-solid state-item'>
                    <div className='state-item-top'>
                      <h4>
                        <strong>Box 1</strong>
                      </h4>
                      <Form.Row className='kin-solid-input'>
                        <Form.Group>
                          <Form.Label>
                            <strong>State of Matter</strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='oneSOM'
                            name='oneSOM'
                            value={oneSOM}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>

                    <div className='kin-solidCanvas-div'>
                      <div className='btns-scu'>
                        <button
                          className='btn-save'
                          type='button'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              day4oneSOMPic: day4oneSOMPic.getSaveData()
                            });
                          }}
                        >
                          Save
                        </button>
                        <button
                          className='btn-clear'
                          type='button'
                          onClick={() => {
                            if (!profile.day4oneSOMPic) {
                              day4oneSOMPic.clear();
                            }
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className='btn-undo'
                          type='button'
                          onClick={() => {
                            if (!profile.day4oneSOMPic) {
                              day4oneSOMPic.undo();
                            }
                          }}
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        className='kin-solid-canvas free-canvas'
                        ref={(canvasDraw) => (day4oneSOMPic = canvasDraw)}
                        lazyRadius={0}
                        brushColor='rgba(155,12,60,0.3)'
                        brushRadius={2}
                        canvasWidth={250}
                        canvasHeight={250}
                        saveData={profile.day4oneSOMPic}
                      />
                    </div>
                  </div>

                  <div className='kin-liquid state-item'>
                    <div className='state-item-top'>
                      <h4>
                        <strong>Box 2</strong>
                      </h4>
                      <Form.Row className='kin-liquid-input'>
                        <Form.Group>
                          <Form.Label>
                            <strong>State of Matter</strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='twoSOM'
                            name='twoSOM'
                            value={twoSOM}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>

                    <div className='kin-liquidCanvas-div'>
                      <div className='btns-scu'>
                        <button
                          className='btn-save'
                          type='button'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              day4twoSOMPic: day4twoSOMPic.getSaveData()
                            });
                          }}
                        >
                          Save
                        </button>
                        <button
                          className='btn-clear'
                          type='button'
                          onClick={() => {
                            if (!profile.day4twoSOMPic) {
                              day4twoSOMPic.clear();
                            }
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className='btn-undo'
                          type='button'
                          onClick={() => {
                            if (!profile.day4twoSOMPic) {
                              day4twoSOMPic.undo();
                            }
                          }}
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        className='kin-liquid-canvas free-canvas'
                        ref={(canvasDraw) => (day4twoSOMPic = canvasDraw)}
                        lazyRadius={0}
                        brushColor='rgba(155,12,60,0.3)'
                        brushRadius={2}
                        canvasWidth={250}
                        canvasHeight={250}
                        saveData={profile.day4twoSOMPic}
                      />
                    </div>
                  </div>

                  <div className='kin-gas state-item'>
                    <div className='state-item-top'>
                      <h4>
                        <strong>Box 3</strong>
                      </h4>
                      <Form.Row className='kin-gas-input'>
                        <Form.Group>
                          <Form.Label>
                            <strong>State of Matter</strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='threeSOM'
                            name='threeSOM'
                            value={threeSOM}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>

                    <div className='kin-gasCanvas-div'>
                      <div className='btns-scu'>
                        <button
                          className='btn-save'
                          type='button'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              day4threeSOMPic: day4threeSOMPic.getSaveData()
                            });
                          }}
                        >
                          Save
                        </button>
                        <button
                          className='btn-clear'
                          type='button'
                          onClick={() => {
                            if (!profile.day4threeSOMPic) {
                              day4threeSOMPic.clear();
                            }
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className='btn-undo'
                          type='button'
                          onClick={() => {
                            if (!profile.day4threeSOMPic) {
                              day4threeSOMPic.undo();
                            }
                          }}
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        className='kin-gas-canvas free-canvas'
                        ref={(canvasDraw) => (day4threeSOMPic = canvasDraw)}
                        lazyRadius={0}
                        brushColor='rgba(155,12,60,0.3)'
                        brushRadius={2}
                        canvasWidth={250}
                        canvasHeight={250}
                        saveData={profile.day4threeSOMPic}
                      />
                    </div>
                  </div>
                </div>

                <Form.Row className='kinetic-bottom'>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          How can matter change from one state to another?
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='matterChange'
                        name='matterChange'
                        value={matterChange}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day4/pop-results'
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
                  value='/day4/phases-of-matter'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

KineticEnergy.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(KineticEnergy)
);
