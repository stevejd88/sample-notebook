import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";
import Spinner from "../../layout/Spinner";

import "./littledrawing.scss";

const initialState = {
  day2LittleDraw: ""
};

const LittleDrawing = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  let { day2LittleDraw } = formData;

  useEffect(() => {
    if (!profile) getCurrentProfile();
  }, [profile, getCurrentProfile]);

  const arrowClick = (e) => {
    e.preventDefault();
    if (!profile.day2LittleDraw) {
      addData("day2/littleDraw", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!profile.day2LittleDraw) {
      addData("day2/littleDraw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='little-drawing-container'>
            <h2>littleBits Challenge Drawing</h2>

            <Form onSubmit={onSubmit}>
              <div className='btns-scu'>
                <button
                  className='btn-save'
                  type='button'
                  onClick={() => {
                    setFormData({
                      ...formData,
                      day2LittleDraw: day2LittleDraw.getSaveData()
                    });
                  }}
                >
                  Save
                </button>
                <button
                  className='btn-clear'
                  type='button'
                  onClick={() => {
                    if (!profile.day2LittleDraw) {
                      day2LittleDraw.clear();
                    }
                  }}
                >
                  Clear
                </button>
                <button
                  className='btn-undo'
                  type='button'
                  onClick={() => {
                    if (!profile.day2LittleDraw) {
                      day2LittleDraw.undo();
                    }
                  }}
                >
                  Undo
                </button>
              </div>

              <br />
              <p>
                <strong>Draw your littleBits product</strong>
              </p>
              <CanvasDraw
                className='little-draw-canvas free-canvas'
                ref={(canvasDraw) => (day2LittleDraw = canvasDraw)}
                brushColor='rgba(155,12,60,0.3)'
                lazyRadius={0}
                brushRadius={4}
                canvasWidth={600}
                canvasHeight={600}
                hideGrid={false}
                saveData={profile.day2LittleDraw}
              />
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day2/little-challenge'
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
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

LittleDrawing.propTypes = {
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
})(withRouter(LittleDrawing));
