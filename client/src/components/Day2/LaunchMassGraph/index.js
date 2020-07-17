import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";

import Spinner from "../../layout/Spinner";
import MassGraph from "../../../assets/img/day2/rocket-mass.png";
import "./massgraph.scss";

const initialState = {
  massIndependent: "",
  massDependent: "",
  massConstant: "",
  massConclusion: "",
  massThoughts: "",
  day2MassRocket: ""
};

const LaunchMassGraph = ({
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
      for (const key in profile.day2MassLaunch) {
        if (key in profileData) profileData[key] = profile.day2MassLaunch[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    massIndependent,
    massDependent,
    massConstant,
    massConclusion,
    massThoughts
  } = formData;

  let { day2MassRocket } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day2/launch/mass/graph", true, formData);
    if (!profile.day2MassRocket) {
      addData("day2/launch/mass/graph/rocket", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day2/launch/mass/graph", true, formData);
    if (!profile.day2MassRocket) {
      addData("day2/launch/mass/graph/rocket", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section id='launch-mass-graph-container'>
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
                        id='massIndependent'
                        name='massIndependent'
                        value={massIndependent}
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
                        id='massDependent'
                        name='massDependent'
                        value={massDependent}
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
                        id='massConstant'
                        name='massConstant'
                        value={massConstant}
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
                        day2MassRocket: day2MassRocket.getSaveData()
                      });
                    }}
                  >
                    Save
                  </button>
                  <button
                    className='btn-clear'
                    type='button'
                    onClick={() => {
                      if (!profile.day2MassRocket) {
                        day2MassRocket.clear();
                      }
                    }}
                  >
                    Clear
                  </button>
                  <button
                    className='btn-undo'
                    type='button'
                    onClick={() => {
                      if (!profile.day2MassRocket) {
                        day2MassRocket.undo();
                      }
                    }}
                  >
                    Undo
                  </button>
                </div>
                <div className='scroll'>
                  <CanvasDraw
                    className='mass-graph-canvas graph-canvas'
                    ref={(canvasDraw) => (day2MassRocket = canvasDraw)}
                    brushColor='rgba(155,12,60,0.3)'
                    brushRadius={2}
                    lazyRadius={0}
                    canvasWidth={680}
                    canvasHeight={400}
                    hideGrid={true}
                    imgSrc={MassGraph}
                    saveData={profile.day2MassRocket}
                  />
                </div>

                <h3>
                  <span>Data Analysis &#40;Mass as a variable&#41;</span>
                </h3>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          When applying an equal amount of displacement, the
                          rocket with greater mass traveled a
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        placeholder=' greater distance / shorter distance'
                        id='massConclusion'
                        name='massConclusion'
                        value={massConclusion}
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
                          relationship between mass and distance?
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        id='massThoughts'
                        name='massThoughts'
                        value={massThoughts}
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
                  value='/day2'
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
                  value='/day2/launch-displacement'
                ></button>
              </div>
            </Form>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

LaunchMassGraph.propTypes = {
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
})(withRouter(LaunchMassGraph));
