import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Kinetic from "../../../assets/img/day4/kinetic.png";
import Phases from "../../../assets/img/day4/phases.png";

import "./phases.scss";

const initialState = {
  plasma: "",
  gas: "",
  liquid: "",
  solid: "",
  heat: "",
  kinetic: "",
  emitsLight: ""
};

const PhasesMatter = ({
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
      for (const key in profile.day4Phases) {
        if (key in profileData) profileData[key] = profile.day4Phases[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { plasma, gas, liquid, solid, heat, kinetic, emitsLight } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day4/fom", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day4/fom", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='phases-matter-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Phases of Matter</h2>
                </legend>
              </fieldset>

              <div className='phases-fillin'>
                <img
                  src={Kinetic}
                  className='img-fluid'
                  alt='label the phases'
                />
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>1.</strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='solid'
                        name='solid'
                        value={solid}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>2.</strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='liquid'
                        name='liquid'
                        value={liquid}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>3.</strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='gas'
                        name='gas'
                        value={gas}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>4.</strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='plasma'
                        name='plasma'
                        value={plasma}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
              </div>

              <div className='phases-change'>
                <img
                  src={Phases}
                  className='img-fluid'
                  alt='heat through the phases of matter'
                />
                <Form.Row className='phases-heat-div'>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        - The phases of matter can be changed by increasing or
                        decreasing the amount of:
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='phases-heat'
                        name='heat'
                        value={heat}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row className='phases-kinetic-div'>
                  <Form.Group>
                    <p>
                      <span>
                        - Greater heat energy causes greater
                        <input
                          type='text'
                          className='bs-input'
                          id='kinetic'
                          name='kinetic'
                          value={kinetic}
                          onChange={onChange}
                        />{" "}
                        energy, or energy of motion.
                      </span>
                    </p>
                  </Form.Group>
                </Form.Row>
              </div>

              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <strong>Which state of matter emits light?</strong>
                    </Form.Label>
                    <Form.Control
                      type='text'
                      className='bs-input'
                      id='emitsLight'
                      name='emitsLight'
                      value={emitsLight}
                      onChange={onChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day4/kinetic-energy'
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
                  value='/day4/solubility'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

PhasesMatter.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(PhasesMatter)
);
