import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import On from "../../../assets/img/day3/light-on.png";
import Off from "../../../assets/img/day3/light-off.png";
import Circuit from "../../../assets/img/day3/circuit2.png";
import Stop from "../../../assets/img/day3/stop.png";
import Go from "../../../assets/img/day3/go.png";

import "./elec.scss";

const initialState = {
  energyToBulb: "",
  bandOffIsChecked: false,
  bandOnIsChecked: false,
  wireOffIsChecked: false,
  wireOnIsChecked: false,
  whySuccess: "",
  wireCI: "",
  RubberCI: "",
  day3ElectricalDraw: ""
};

const ElectricalEnergy = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day3Electrical) {
        if (key in profileData) profileData[key] = profile.day3Electrical[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    energyToBulb,
    bandOffIsChecked,
    bandOnIsChecked,
    wireOffIsChecked,
    wireOnIsChecked,
    whySuccess,
    wireCI,
    RubberCI
  } = formData;

  let { day3ElectricalDraw } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day3/elecrtical", true, formData);
    if (!profile.day3ElectricalDraw) {
      addData("day3/electrical/draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='electrical-energy-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Station: Electrical Energy</h2>
                </legend>
                <div className='con-ins'>
                  <div className='conductors'>
                    <p>
                      <strong>
                        <span>Conductors</span> are materials that{" "}
                        <span>allow</span> electrons to flow through them.
                      </strong>
                    </p>
                    <img className='img-fluid' src={Go} alt='Go sign' />
                  </div>
                  <div className='insulators'>
                    <img className='img-fluid' src={Stop} alt='stop sign' />
                    <p>
                      <strong>
                        <span>Insulators</span> are materials that do{" "}
                        <span>not</span> allow electrons to flow freely.
                      </strong>
                    </p>
                  </div>
                </div>
                <Form.Row className='light-bulb-energy'>
                  <div className='light-bulb-energy-col bulb-describe'>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          {" "}
                          The bulb should be able to light up, but how? <br />{" "}
                          <br /> <span>Describe</span> how you believe
                          electrical energy is transfered from the battery to
                          the light bulb:
                        </strong>
                      </Form.Label>
                      <textarea
                        id='energyToBulb'
                        className='bs-input'
                        name='energyToBulb'
                        value={energyToBulb}
                        onChange={onChange}
                        cols='30'
                        rows='4'
                      ></textarea>
                    </Form.Group>
                  </div>
                  <div className='light-bulb-energy-col bulbs'>
                    <div>
                      <p>
                        <strong>
                          Record &#40;circle&#41; what happened to the light
                          bulb when the materials connected it to the battery:
                        </strong>
                      </p>
                    </div>
                    <div className='bulbs-row'>
                      <p>Rubber band</p>
                      <div
                        className={
                          bandOffIsChecked
                            ? "circled-it rubber-bulb-off img-fluid"
                            : "rubber-bulb-off img-fluid"
                        }
                      >
                        <img
                          src={Off}
                          alt='light bulb off'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              bandOffIsChecked: true,
                              bandOnIsChecked: false
                            });
                          }}
                        />
                      </div>
                      <div
                        className={
                          bandOnIsChecked
                            ? "circled-it rubber-bulb-on img-fluid"
                            : "rubber-bulb-on img-fluid"
                        }
                      >
                        <img
                          src={On}
                          alt='light bulb on'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              bandOnIsChecked: true,
                              bandOffIsChecked: false
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className='bulbs-row'>
                      <p>Metal Wire</p>
                      <div
                        className={
                          wireOffIsChecked
                            ? "circled-it wire-bulb-off img-fluid"
                            : "wire-bulb-off img-fluid"
                        }
                      >
                        <img
                          src={Off}
                          alt='light bulb off'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              wireOffIsChecked: true,
                              wireOnIsChecked: false
                            });
                          }}
                        />
                      </div>
                      <div
                        className={
                          wireOnIsChecked
                            ? "circled-it wire-bulb-on img-fluid"
                            : "wire-bulb-on img-fluid"
                        }
                      >
                        <img
                          src={On}
                          alt='light bulb on'
                          onClick={() => {
                            setFormData({
                              ...formData,
                              wireOnIsChecked: true,
                              wireOffIsChecked: false
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Form.Row>
                <div className='draw-cricuit-div'>
                  <p>
                    <strong>
                      Draw how you created a circuit and allowed electrical
                      energy to flow from the battery to the bulb:
                    </strong>
                  </p>

                  <div className='btns-scu'>
                    <button
                      className='btn-save'
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          day3ElectricalDraw: day3ElectricalDraw.getSaveData()
                        });
                      }}
                    >
                      Save
                    </button>
                    <button
                      className='btn-clear'
                      type='button'
                      onClick={() => {
                        if (!profile.day3ElectricalDraw) {
                          day3ElectricalDraw.clear();
                        }
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className='btn-undo'
                      type='button'
                      onClick={() => {
                        if (!profile.day3ElectricalDraw) {
                          day3ElectricalDraw.undo();
                        }
                      }}
                    >
                      Undo
                    </button>
                  </div>
                  <CanvasDraw
                    className='draw-circuit-canvas free-canvas'
                    ref={(canvasDraw) => (day3ElectricalDraw = canvasDraw)}
                    lazyRadius={0}
                    brushColor='rgba(155,12,60,0.3)'
                    brushRadius={2}
                    canvasWidth={600}
                    canvasHeight={400}
                    imgSrc={Circuit}
                    saveData={profile.day3ElectricalDraw}
                  />
                </div>
                <Form.Row className='why-circuit-band'>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          Why were you able to successfully create a circuit
                          using the wire and not the rubber band?
                        </strong>
                      </Form.Label>
                      <textarea
                        id='elec-whySuccess'
                        className='bs-input'
                        name='whySuccess'
                        value={whySuccess}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row className='last-light'>
                  <Form.Group>
                    <span>
                      Metal wire is a
                      <input
                        type='text'
                        id='wireCI'
                        className='bs-input'
                        name='wireCI'
                        value={wireCI}
                        onChange={onChange}
                        placeholder='conductor / insulator'
                      />
                    </span>
                  </Form.Group>
                </Form.Row>
                <Form.Row className='last-light'>
                  <Form.Group>
                    <span>
                      Rubber band is a
                      <input
                        type='text'
                        id='RubberCI'
                        className='bs-input'
                        name='RubberCI'
                        value={RubberCI}
                        onChange={onChange}
                        placeholder='conductor / insulator'
                      />
                    </span>
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

ElectricalEnergy.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(ElectricalEnergy)
);
