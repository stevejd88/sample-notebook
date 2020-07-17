import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Polar from "../../../assets/img/day4/polar.png";

import "./solubility.scss";

const initialState = {
  bank1: "",
  bank2: "",
  bank3: "",
  bank4: "",
  corn1: "",
  corn2: "",
  corn3: "",
  corn4: "",
  oil1: "",
  oil2: "",
  oil3: "",
  kool: ""
};

const Solubility = ({
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
      for (const key in profile.day4Solubility) {
        if (key in profileData) profileData[key] = profile.day4Solubility[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    bank1,
    bank2,
    bank3,
    bank4,
    corn1,
    corn2,
    corn3,
    corn4,
    oil1,
    oil2,
    oil3,
    kool
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day4/solubility", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day4/solubility", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='solubility-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Solubility</h2>
                </legend>
                <div className='solubility-top'>
                  <div className='solu-word-bank'>
                    <h4>
                      <strong>Word Bank:</strong>
                    </h4>
                    <div className='solu-words'>
                      <p>solution</p>
                      <p>solute</p>
                      <p>solvent</p>
                      <p>solubility</p>
                    </div>
                  </div>
                  <div className='solu-match-qs'>
                    <Form.Row className='solu-match-item'>
                      <Form.Group>
                        <p>
                          <span>
                            <strong>-</strong>{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='bank1'
                              name='bank1'
                              value={bank1}
                              onChange={onChange}
                            />{" "}
                            is the ability of a substance to dissolve.
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='solu-match-item'>
                      <Form.Group>
                        <p>
                          <span>
                            <strong>-</strong> In the process of dissolving, the
                            substance being dissolved is called a{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='bank2'
                              name='bank2'
                              value={bank2}
                              onChange={onChange}
                            />{" "}
                            , and the substance in which the solute is dissolved
                            is called a{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='bank3'
                              name='bank3'
                              value={bank3}
                              onChange={onChange}
                            />{" "}
                            .
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className='solu-match-item'>
                      <Form.Group>
                        <p>
                          <span>
                            <strong>-</strong> A mixture of solute and solvent
                            is called a{" "}
                            <input
                              type='text'
                              className='bs-input'
                              id='bank4'
                              name='bank4'
                              value={bank4}
                              onChange={onChange}
                            />{" "}
                            .
                          </span>
                        </p>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>
                  <h3>Solubility Testing</h3>
                </legend>

                <div className='solu-bottom'>
                  <div className='solu-test'>
                    <div className='solu-test-item'>
                      <p>
                        <strong>
                          {" "}
                          1. Add <span className='corn-syrup'>
                            corn syrup
                          </span>{" "}
                          to the water in the first tube.
                        </strong>
                      </p>
                      <Form.Row className='solu-corn-item'>
                        <Col>
                          <Form.Group>
                            <p>
                              <span>
                                &#45; Corn syrup in water is{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  placeholder='soluble / insoluble'
                                  id='corn1'
                                  name='corn1'
                                  value={corn1}
                                  onChange={onChange}
                                />{" "}
                                .
                              </span>
                            </p>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row className='solu-corn-item'>
                        <Col>
                          <Form.Group>
                            <p>
                              <span>
                                &#45; In this example, the{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  placeholder='water / corn syrup'
                                  id='corn2'
                                  name='corn2'
                                  value={corn2}
                                  onChange={onChange}
                                />{" "}
                                is the solvent, the{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  placeholder='water / corn syrup'
                                  id='corn3'
                                  name='corn3'
                                  value={corn3}
                                  onChange={onChange}
                                />{" "}
                                is the solute, and the two mixed together is a{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  id='corn4'
                                  name='corn4'
                                  value={corn4}
                                  onChange={onChange}
                                />{" "}
                                .
                              </span>
                            </p>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                    </div>
                    <div className='solu-test-item'>
                      <p>
                        <strong>
                          {" "}
                          2. Add three drops of <span className='oil'>
                            oil
                          </span>{" "}
                          to the water in the second tube.
                        </strong>
                      </p>
                      <Form.Row className='solu-oil-item'>
                        <Col>
                          <Form.Group>
                            <p>
                              <span>
                                &#45; Oil in water is{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  placeholder='soluble / insoluble'
                                  id='oil1'
                                  name='oil1'
                                  value={oil1}
                                  onChange={onChange}
                                />{" "}
                                .
                              </span>
                            </p>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row className='solu-oil-item'>
                        <Col>
                          <Form.Group>
                            <p>
                              <span>
                                &#45; Oil and water will not form a solution
                                because water is a{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  placeholder='polar / non-polar'
                                  id='oil2'
                                  name='oil2'
                                  value={oil2}
                                  onChange={onChange}
                                />{" "}
                                molecule, and oil is a{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  placeholder='polar /
                                non-polar'
                                  id='oil3'
                                  name='oil3'
                                  value={oil3}
                                  onChange={onChange}
                                />{" "}
                                molecule.
                              </span>
                            </p>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                    </div>

                    <div className='solu-test-item'>
                      <p>
                        <strong>
                          {" "}
                          3. Add several grams of{" "}
                          <span className='kool-aid'>Kool Aid</span> to the
                          water in the third tube.
                        </strong>
                      </p>
                      <Form.Row className='solu-kool-item'>
                        <Col>
                          <Form.Group>
                            <p>
                              <span>
                                &#45; Kool Aid in water is{" "}
                                <input
                                  type='text'
                                  className='bs-input'
                                  placeholder='soluble / insoluble'
                                  id='kool'
                                  name='kool'
                                  value={kool}
                                  onChange={onChange}
                                />{" "}
                                .
                              </span>
                            </p>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                    </div>
                  </div>
                  {/* End of solu-test div */}

                  <div className='polar'>
                    <h4>
                      <strong>Side Notes</strong>
                    </h4>
                    <img
                      src={Polar}
                      className='img-fluid'
                      alt='Polar Molecule'
                    />
                    <p className='polar-like'>
                      When forming a solution{" "}
                      <span>
                        <strong>LIKE</strong>
                      </span>{" "}
                      dissolves{" "}
                      <span>
                        <strong>LIKE!</strong>
                      </span>
                    </p>
                    <p className='polar-p'>
                      <span>
                        <strong>Polar</strong>
                      </span>{" "}
                      dissolves{" "}
                      <span>
                        <strong>Polar</strong>
                      </span>{" "}
                    </p>
                    <p>
                      <strong>Non polar</strong> dissolves{" "}
                      <strong>non polar</strong>
                    </p>
                  </div>
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day4/phases-of-matter'
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
                  value='/day4/chromatography'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Solubility.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Solubility)
);
