import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import "./eggredesign.scss";

const initialState = {
  day5RedesignDraw: ""
};

const EggRedesign = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
  }, [profile, getCurrentProfile]);

  let { day5RedesignDraw } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    if (!profile.day5RedesignDraw) {
      addData("day5/eggbert/redesign", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!profile.day5RedesignDraw) {
      addData("day5/eggbert/redesign", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='eggbert-redesign-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Eggbert Redesign</h2>
                </legend>

                <div className='eggbert-redesign-div'>
                  <p>
                    <strong>Redesign your safety restraint device.</strong>
                  </p>
                  <div className='btns-scu'>
                    <button
                      className='btn-save'
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          day5RedesignDraw: day5RedesignDraw.getSaveData()
                        });
                      }}
                    >
                      Save
                    </button>
                    <button
                      className='btn-clear'
                      type='button'
                      onClick={() => {
                        if (!profile.day5RedesignDraw) {
                          day5RedesignDraw.clear();
                        }
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className='btn-undo'
                      type='button'
                      onClick={() => {
                        if (!profile.day5RedesignDraw) {
                          day5RedesignDraw.undo();
                        }
                      }}
                    >
                      Undo
                    </button>
                  </div>

                  <CanvasDraw
                    className='eggbert-redesign-canvas free-canvas'
                    ref={(canvasDraw) => (day5RedesignDraw = canvasDraw)}
                    lazyRadius={0}
                    brushColor='rgba(155,12,60,0.3)'
                    brushRadius={2}
                    canvasWidth={600}
                    canvasHeight={600}
                    saveData={profile.day5RedesignDraw}
                  />
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day5/eggbert/evaluate'
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
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

EggRedesign.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(EggRedesign)
);
