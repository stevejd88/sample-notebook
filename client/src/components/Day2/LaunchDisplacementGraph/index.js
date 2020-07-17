import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";

import Spinner from "../../layout/Spinner";
import Displacement from "../../../assets/img/day2/displacement-mass.png";
import "./disgraph.scss";

const initialState = {
  disIndependent: "",
  disDependent: "",
  disConstant: "",
  displacementConclusion: "",
  displacementThoughts: "",
  day2DisRocket: ""
};

const LaunchDisplacementGraph = ({
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
      for (const key in profile.day2DisplacementLaunch) {
        if (key in profileData)
          profileData[key] = profile.day2DisplacementLaunch[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    disIndependent,
    disDependent,
    disConstant,
    displacementConclusion,
    displacementThoughts
  } = formData;

  let { day2DisRocket } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day2/launch/displacement/graph", true, formData);
    if (!profile.day2DisRocket) {
      addData("day2/launch/displacement/graph/rocket", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day2/launch/displacement/graph", true, formData);
    if (!profile.day2DisRocket) {
      addData("day2/launch/displacement/graph/rocket", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section id='launch-displacement-graph-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>
                    <span>Distance of Straw Rocket Launch</span>
                  </h2>
                </legend>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>Independent Variable:</strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='disIndependent'
                        name='disIndependent'
                        value={disIndependent}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>Dependent Variable:</strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='disDependent'
                        name='disDependent'
                        value={disDependent}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>Constant:</strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='disConstant'
                        name='disConstant'
                        value={disConstant}
                        onChange={onChange}
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
                        day2DisRocket: day2DisRocket.getSaveData()
                      });
                    }}
                  >
                    Save
                  </button>
                  <button
                    className='btn-clear'
                    type='button'
                    onClick={() => {
                      if (!profile.day2DisRocket) {
                        day2DisRocket.clear();
                      }
                    }}
                  >
                    Clear
                  </button>
                  <button
                    className='btn-undo'
                    type='button'
                    onClick={() => {
                      if (!profile.day2DisRocket) {
                        day2DisRocket.undo();
                      }
                    }}
                  >
                    Undo
                  </button>
                </div>
                <CanvasDraw
                  className='dis-graph-canvas graph-canvas'
                  ref={(canvasDraw) => (day2DisRocket = canvasDraw)}
                  brushColor='rgba(155,12,60,0.3)'
                  brushRadius={4}
                  lazyRadius={0}
                  canvasWidth={680}
                  canvasHeight={400}
                  imgSrc={Displacement}
                  saveData={profile.day2DisRocket}
                />

                <h3>
                  <span>
                    Data Analysis &#40;Displacement as a variable&#41;
                  </span>
                </h3>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          When keeping the same mass, the rocket with greater
                          displacement traveled a
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        placeholder=' greater distance / shorter distance'
                        id='displacementConclusion'
                        name='displacementConclusion'
                        value={displacementConclusion}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          How does the data on your graph describe the
                          relationship between displacement and distance?
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='displacementThoughts'
                        name='displacementThoughts'
                        value={displacementThoughts}
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
                  value='/day2/launch-displacement'
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
                  value='/day2/newton-motion'
                ></button>
              </div>
            </Form>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

LaunchDisplacementGraph.propTypes = {
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
})(withRouter(LaunchDisplacementGraph));
