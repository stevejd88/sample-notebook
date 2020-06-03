import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import Gears from "../../../assets/img/day3/gears.png";

import "./mech.scss";

const initialState = {
  moveHow: "",
  threeWinds: "",
  sixWinds: "",
  distanceWhy: "",
  day3mechDraw: ""
};

const MechEnergy = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day3Mechanical) {
        if (key in profileData) profileData[key] = profile.day3Mechanical[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { moveHow, threeWinds, sixWinds, distanceWhy } = formData;

  let { day3mechDraw } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day3/mechanical", true, formData);
    if (!profile.day3mechDraw) {
      addData("day3/mechanical/draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='mechanical-energy-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Station: Mechanical Energy</h2>
                </legend>
                <Form.Row className='describe-toy-move'>
                  <Form.Group>
                    <Form.Label>
                      <strong>
                        These toys have the ability to move, but how? <br />{" "}
                        <br />
                        Describe how you believe the toys use mechanical energy
                        to move.
                      </strong>
                    </Form.Label>
                    <textarea
                      id='mech-moveHow'
                      className='bs-input'
                      name='moveHow'
                      value={moveHow}
                      onChange={onChange}
                      cols='30'
                      rows='3'
                    ></textarea>
                  </Form.Group>
                </Form.Row>
                <div className='sound-activity'>
                  <h4>Record how far the toy traveled:</h4>
                  <Form.Row>
                    <Form.Group>
                      <span>
                        Wound up 3 times
                        <input
                          type='text'
                          id='threeWinds'
                          className='bs-input'
                          name='threeWinds'
                          value={threeWinds}
                          onChange={onChange}
                        />{" "}
                        cm
                      </span>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <span>
                        Wound up 6 times
                        <input
                          type='text'
                          id='sixWinds'
                          className='bs-input'
                          name='sixWinds'
                          value={sixWinds}
                          onChange={onChange}
                        />{" "}
                        cm
                      </span>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          The distance traveled &#40;increased/decreased&#41; as
                          I increased the number of winds because:
                        </strong>
                      </Form.Label>
                      <textarea
                        id='mech-distanceWhy'
                        className='bs-input'
                        name='distanceWhy'
                        value={distanceWhy}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Form.Row>
                </div>
                <Row className='sound-last-thoughts' md={2}>
                  <Col className='mech-energy-is'>
                    <p>
                      Mechanical Energy is the combination of{" "}
                      <span>potential</span> energy and <span>kinetic</span>{" "}
                      energy.
                    </p>
                    <img className='img-fluid' src={Gears} alt='gears' />
                  </Col>
                  <Col className='draw-mech'>
                    <p>
                      In the box below draw what you observed inside the toy ,
                      describe where you observed those forms of energy, and
                      label them in your drawing:
                    </p>
                    <div className='mech-drawing'>
                      <div className='btns-scu'>
                        <button
                          className='btn-save'
                          type='button'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              day3mechDraw: day3mechDraw.getSaveData()
                            });
                          }}
                        >
                          Save
                        </button>
                        <button
                          className='btn-clear'
                          type='button'
                          onClick={() => {
                            if (!profile.day3mechDraw) {
                              day3mechDraw.clear();
                            }
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className='btn-undo'
                          type='button'
                          onClick={() => {
                            if (!profile.day3mechDraw) {
                              day3mechDraw.undo();
                            }
                          }}
                        >
                          Undo
                        </button>
                      </div>
                      <CanvasDraw
                        className='mech-canvas free-canvas'
                        ref={(canvasDraw) => (day3mechDraw = canvasDraw)}
                        brushColor='rgba(155,12,60,0.3)'
                        lazyRadius={0}
                        brushRadius={2}
                        canvasWidth={250}
                        canvasHeight={250}
                        hideGrid={false}
                        saveData={profile.day3mechDraw}
                      />
                    </div>
                  </Col>
                </Row>
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

MechEnergy.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(MechEnergy)
);
