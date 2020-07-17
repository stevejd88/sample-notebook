import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Fireworks from "../../../assets/img/day5/fireworks.png";
import Chocolate from "../../../assets/img/day5/chocolate.png";
import Eggs from "../../../assets/img/day5/eggs.png";
import Hair from "../../../assets/img/day5/hair.png";

import "./physchem.scss";

const initialState = {
  physChange: "",
  physIs: "",
  physExamples: "",
  chemChange: "",
  chemIs: "",
  chemExamples: "",
  fireworksPhysIs: false,
  fireworksChemIs: false,
  fireworksWhy: "",
  chocoPhysIs: false,
  chocoChemIs: false,
  chocoWhy: "",
  eggsPhysIs: false,
  eggsChemIs: false,
  eggsWhy: "",
  braidPhysIs: false,
  braidChemIs: false,
  braidWhy: ""
};

const PhysChem = ({
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
      for (const key in profile.day5PhysChem) {
        if (key in profileData) profileData[key] = profile.day5PhysChem[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    physChange,
    physIs,
    physExamples,
    chemChange,
    chemIs,
    chemExamples,
    fireworksPhysIs,
    fireworksChemIs,
    fireworksWhy,
    chocoPhysIs,
    chocoChemIs,
    chocoWhy,
    eggsPhysIs,
    eggsChemIs,
    eggsWhy,
    braidPhysIs,
    braidChemIs,
    braidWhy
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day5/phys-chem", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/phys-chem", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='phys-chem-container'>
            <h2>Physical and Chemical Changes</h2>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>Transfer of Energy</legend>
                <div className='phys-chem'>
                  <div className='physical-change'>
                    <h4>Physical Change</h4>
                    <Form.Row className='phys-change-input1'>
                      <Form.Group>
                        <p>
                          <span>
                            <strong>-</strong> A{" "}
                            <span className='phy-change-span'>
                              <strong>physical change</strong>
                            </span>{" "}
                            is a change in{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='physChange'
                              name='physChange'
                              value={physChange}
                              onChange={onChange}
                            />{" "}
                            or appearance.
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='phys-change-input2'>
                      <Form.Group>
                        <p>
                          <span>
                            <strong>-</strong> It is{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='physIs'
                              name='physIs'
                              value={physIs}
                              onChange={onChange}
                            />{" "}
                            .
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                    <p>
                      It requires a transfer of energy either through a transfer
                      of heat or applying a force.
                    </p>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>List examples of physical changes:</strong>
                          </Form.Label>
                          <textarea
                            className='bs-input'
                            id='physExamples'
                            name='physExamples'
                            value={physExamples}
                            onChange={onChange}
                            cols='25'
                            rows='3'
                          ></textarea>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>
                  {/* end of phys-change div */}

                  <div className='chemical-change'>
                    <h4>Chemical Change</h4>
                    <Form.Row className='chem-change-input1'>
                      <Form.Group>
                        <p>
                          <span>
                            <strong>-</strong> A{" "}
                            <span className='chem-change-span'>
                              <strong>chemical change</strong>
                            </span>{" "}
                            is a change in which a{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='chemChange'
                              name='chemChange'
                              value={chemChange}
                              onChange={onChange}
                            />{" "}
                            substance is formed.
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='chem-change-input2'>
                      <Form.Group>
                        <p>
                          <span>
                            <strong>-</strong> It is{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='chemIs'
                              name='chemIs'
                              value={chemIs}
                              onChange={onChange}
                            />{" "}
                            .
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                    <p>
                      Occurs as energy is transferred; when molecules bond,
                      break, or rearrange.
                    </p>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>List examples of chemical changes:</strong>
                          </Form.Label>
                          <textarea
                            className='bs-input'
                            id='chemExamples'
                            name='chemExamples'
                            value={chemExamples}
                            onChange={onChange}
                            cols='25'
                            rows='3'
                          ></textarea>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>
                </div>
              </fieldset>
              {/* end top fieldset */}

              <fieldset>
                <legend>
                  Identify the pictures as examples of{" "}
                  <span className='identify-phys'>
                    <strong>Physical &#40;P&#41;</strong>
                  </span>{" "}
                  or{" "}
                  <span className='identify-chem'>
                    <strong>Chemical &#40;C&#41;</strong>
                  </span>{" "}
                  changes. <strong>Select P or C.</strong>
                </legend>
                <div className='change-identify'>
                  <div className='identify-item'>
                    <div className='identify-item-choose'>
                      <img
                        src={Fireworks}
                        alt='Fireworks'
                        className='img-fluid'
                      />

                      <div className='pnc'>
                        <div
                          className={
                            fireworksPhysIs ? "circled-it item-p" : "item-p"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                fireworksPhysIs: true,
                                fireworksChemIs: false
                              });
                            }}
                          >
                            P
                          </p>
                        </div>
                        <p>or</p>
                        <div
                          className={
                            fireworksChemIs ? "circled-it item-c" : "item-c"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                fireworksChemIs: true,
                                fireworksPhysIs: false
                              });
                            }}
                          >
                            C
                          </p>
                        </div>
                      </div>
                    </div>
                    <Form.Row>
                      <Form.Group>
                        <p>
                          <span>
                            Why?{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='fireworksWhy'
                              name='fireworksWhy'
                              value={fireworksWhy}
                              onChange={onChange}
                            />
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  <div className='identify-item'>
                    <div className='identify-item-choose'>
                      <img
                        src={Chocolate}
                        alt='Chocolate'
                        className='img-fluid'
                      />

                      <div className='pnc'>
                        <div
                          className={
                            chocoPhysIs ? "circled-it item-p" : "item-p"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                chocoPhysIs: true,
                                chocoChemIs: false
                              });
                            }}
                          >
                            P
                          </p>
                        </div>
                        <p>or</p>
                        <div
                          className={
                            chocoChemIs ? "circled-it item-c" : "item-c"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                chocoChemIs: true,
                                chocoPhysIs: false
                              });
                            }}
                          >
                            C
                          </p>
                        </div>
                      </div>
                    </div>
                    <Form.Row>
                      <Form.Group>
                        <p>
                          <span>
                            Why?{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='chocoWhy'
                              name='chocoWhy'
                              value={chocoWhy}
                              onChange={onChange}
                            />
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  <div className='identify-item'>
                    <div className='identify-item-choose'>
                      <img src={Eggs} alt='Eggs' className='img-fluid' />

                      <div className='pnc'>
                        <div
                          className={
                            eggsPhysIs ? "circled-it item-p" : "item-p"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                eggsPhysIs: true,
                                eggsChemIs: false
                              });
                            }}
                          >
                            P
                          </p>
                        </div>
                        <p>or</p>
                        <div
                          className={
                            eggsChemIs ? "circled-it item-c" : "item-c"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                eggsChemIs: true,
                                eggsPhysIs: false
                              });
                            }}
                          >
                            C
                          </p>
                        </div>
                      </div>
                    </div>
                    <Form.Row>
                      <Form.Group>
                        <p>
                          <span>
                            Why?{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='eggsWhy'
                              name='eggsWhy'
                              value={eggsWhy}
                              onChange={onChange}
                            />
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  <div className='identify-item'>
                    <div className='identify-item-choose'>
                      <img src={Hair} alt='Hair' className='img-fluid' />

                      <div className='pnc'>
                        <div
                          className={
                            braidPhysIs ? "circled-it item-p" : "item-p"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                braidPhysIs: true,
                                braidChemIs: false
                              });
                            }}
                          >
                            P
                          </p>
                        </div>

                        <p>or</p>

                        <div
                          className={
                            braidChemIs ? "circled-it item-c" : "item-c"
                          }
                        >
                          <p
                            onClick={() => {
                              setFormData({
                                ...formData,
                                braidChemIs: true,
                                braidPhysIs: false
                              });
                            }}
                          >
                            C
                          </p>
                        </div>
                      </div>
                    </div>
                    <Form.Row>
                      <Form.Group>
                        <p>
                          <span>
                            Why?{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='braidWhy'
                              name='braidWhy'
                              value={braidWhy}
                              onChange={onChange}
                            />
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </div>
                {/* end change-identity div */}
              </fieldset>

              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
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
                  value='/day5/fluids'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

PhysChem.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(PhysChem)
);
