import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addLaunchDisGraph,
  addLaunchDisGraphRocket,
  getCurrentProfile
} from "../../../actions/profile";
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
  addLaunchDisGraph,
  addLaunchDisGraphRocket,
  getCurrentProfile
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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addLaunchDisGraph(formData);
    if (!profile.day2DisRocket) {
      addLaunchDisGraphRocket(formData);
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
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
            </Form>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

LaunchDisplacementGraph.propTypes = {
  addLaunchDisGraph: PropTypes.func.isRequired,
  addLaunchDisGraphRocket: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addLaunchDisGraph,
  addLaunchDisGraphRocket,
  getCurrentProfile
})(withRouter(LaunchDisplacementGraph));
