import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./littlechallenge.scss";

const initialState = {
  problem: "",
  product: "",
  solve: "",
  probPresenter: "",
  soluPresenter: "",
  demonstrators: ""
};

const LittleChallenge = ({
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
      for (const key in profile.day2LittleChal) {
        if (key in profileData) profileData[key] = profile.day2LittleChal[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    problem,
    product,
    solve,
    probPresenter,
    soluPresenter,
    demonstrators
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day2/littleChallenge", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day2/littleChallenge", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='littleChallenge-container'>
            <h2>littleBits Engineering Challenge:</h2>

            <Form onSubmit={onSubmit}>
              <fieldset className='little-bits-identify'>
                <legend>
                  In your team, you will have 10-15 minutes to create a
                  prototype with littleBits to solve your FINAL challenge.
                </legend>
                <div className='little-chal-items'>
                  <div className='little-chal-item'>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              What is the <span>problem</span> you will solve?
                            </strong>
                          </Form.Label>
                          <textarea
                            id='littleProblem'
                            className='bs-input'
                            name='problem'
                            value={problem}
                            onChange={onChange}
                            cols='20'
                            rows='3'
                          ></textarea>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>

                  <div className='little-chal-item'>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              What is your <span>product</span>?
                            </strong>
                          </Form.Label>
                          <textarea
                            id='littleProduct'
                            name='product'
                            value={product}
                            onChange={onChange}
                            cols='20'
                            rows='3'
                          ></textarea>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>

                  <div className='little-chal-item'>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>
                              How will your product <span>solve</span> this
                              problem?
                            </strong>
                          </Form.Label>
                          <textarea
                            id='littleSolve'
                            name='solve'
                            value={solve}
                            onChange={onChange}
                            cols='20'
                            rows='3'
                          ></textarea>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>
                </div>
              </fieldset>

              <fieldset className='little-bits-challenge'>
                <legend>
                  <span>
                    On the next page draw your product to the best of your
                    ability. Be sure to label your product so everyone can
                    understand it.
                  </span>
                </legend>
                <div className='little-chal-items'>
                  <div className='little-chal-item'>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>Problem Presenter:</strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='challenge-problem'
                            name='probPresenter'
                            value={probPresenter}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>

                  <div className='little-chal-item'>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>Solution Presenter:</strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='challenge-presenter'
                            name='soluPresenter'
                            value={soluPresenter}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </div>

                  <div className='little-chal-item'>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            <strong>2 Demonstrator&#40;s&#41;:</strong>
                          </Form.Label>
                          <Form.Control
                            type='text'
                            className='bs-input'
                            id='challenge-demonstrators'
                            name='demonstrators'
                            value={demonstrators}
                            onChange={onChange}
                          />
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
                  value='/day2/little-bits'
                ></button>

                <button
                  type='submit'
                  className='btn btn-primary main-save'
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
                  value='/day2/little-drawing'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

LittleChallenge.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addData,
  getCurrentProfile
})(withRouter(LittleChallenge));
