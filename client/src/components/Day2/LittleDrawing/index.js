import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLittleDraw, getCurrentProfile } from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";
import Spinner from "../../layout/Spinner";

import "./littledrawing.scss";

const initialState = {
  day2LittleDraw: ""
};

const LittleDrawing = ({
  profile: { profile, loading },
  addLittleDraw,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  let { day2LittleDraw } = formData;

  useEffect(() => {
    if (!profile) getCurrentProfile();
  }, [profile, getCurrentProfile]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!profile.day2LittleDraw) {
      addLittleDraw(formData);
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
              <button type='submit' className='btn btn-primary sbm-btm'>
                Submit
              </button>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

LittleDrawing.propTypes = {
  addLittleDraw: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addLittleDraw,
  getCurrentProfile
})(withRouter(LittleDrawing));
