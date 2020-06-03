import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import "./eggdesign.scss";

const initialState = {
  define: "",
  day5EggbertDesign: ""
};

const EggDesign = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day5EggbertDefine) {
        if (key in profileData)
          profileData[key] = profile.day5EggbertDefine[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { define } = formData;

  let { day5EggbertDesign } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/eggbert/define", true, formData);
    if (!profile.day5EggbertDesign) {
      addData("day5/eggbert/design", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='eggbert-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Eggbert</h2>
                </legend>

                <Form.Row className='egg-define'>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <span>
                          <strong>Define the problem!</strong>
                        </span>{" "}
                        Summarize Eggbert's dilemma:
                      </Form.Label>
                      <textarea
                        className='bs-input'
                        id='define'
                        name='define'
                        value={define}
                        onChange={onChange}
                        cols='30'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Form.Row>

                <div className='eggbert-canvas-div'>
                  <p>
                    <strong>Design your safety restraint device.</strong>
                  </p>
                  <p>
                    <span>
                      <strong>Reminder!</strong>{" "}
                    </span>
                    The prototype must <strong>not</strong> weigh more than
                    40/50 g &#40;Seat + restraint device&#41;
                  </p>
                  <div className='btns-scu'>
                    <button
                      className='btn-save'
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          day5EggbertDesign: day5EggbertDesign.getSaveData()
                        });
                      }}
                    >
                      Save
                    </button>
                    <button
                      className='btn-clear'
                      type='button'
                      onClick={() => {
                        if (!profile.day5EggbertDesign) {
                          day5EggbertDesign.clear();
                        }
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className='btn-undo'
                      type='button'
                      onClick={() => {
                        if (!profile.day5EggbertDesign) {
                          day5EggbertDesign.undo();
                        }
                      }}
                    >
                      Undo
                    </button>
                  </div>

                  <CanvasDraw
                    className='eggbert-canvas free-canvas'
                    ref={(canvasDraw) => (day5EggbertDesign = canvasDraw)}
                    lazyRadius={0}
                    brushColor='rgba(155,12,60,0.3)'
                    brushRadius={2}
                    canvasWidth={600}
                    canvasHeight={600}
                    saveData={profile.day5EggbertDesign}
                  />
                  <p>
                    <span>
                      <strong>Eggbert Supplies:</strong>
                    </span>{" "}
                    Cotton Ball, String, Rubber band, Sponge, Pipe cleaner, 25
                    cm of tape, plastic, bag
                  </p>
                </div>
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

EggDesign.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(EggDesign)
);
