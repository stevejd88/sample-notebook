import React, { Fragment, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLittleCircuit, getCurrentProfile } from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";
import Spinner from "../../layout/Spinner";
import LittleTitle from "../../../assets/img/day2/little-bits.png";

const initialState = {
  day2LittleCircuit: ""
};

const LittleBits = ({
  profile: { profile, loading },
  addLittleCircuit,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  let { day2LittleCircuit } = formData;

  useEffect(() => {
    if (!profile) getCurrentProfile();
  }, [profile, getCurrentProfile]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!profile.day2LittleCircuit) {
      addLittleCircuit(formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='littlebits-container'>
            <img className='img-fluid' src={LittleTitle} alt='Little Bits' />

            <Form onSubmit={onSubmit}>
              <div className='btns-scu'>
                <button
                  className='btn-save'
                  type='button'
                  onClick={() => {
                    setFormData({
                      ...formData,
                      day2LittleCircuit: day2LittleCircuit.getSaveData()
                    });
                  }}
                >
                  Save
                </button>
                <button
                  className='btn-clear'
                  type='button'
                  onClick={() => {
                    if (!profile.day2LittleCircuit) {
                      day2LittleCircuit.clear();
                    }
                  }}
                >
                  Clear
                </button>
                <button
                  className='btn-undo'
                  type='button'
                  onClick={() => {
                    if (!profile.day2LittleCircuit) {
                      day2LittleCircuit.undo();
                    }
                  }}
                >
                  Undo
                </button>
              </div>

              <br />
              <p>
                <strong>Draw a picture of your circuit</strong>
              </p>
              <CanvasDraw
                className='little-circuit-canvas free-canvas'
                ref={(canvasDraw) => (day2LittleCircuit = canvasDraw)}
                brushColor='rgba(155,12,60,0.3)'
                lazyRadius={0}
                brushRadius={4}
                canvasWidth={600}
                canvasHeight={600}
                hideGrid={false}
                saveData={profile.day2LittleCircuit}
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

LittleBits.propTypes = {
  addLittleCircuit: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addLittleCircuit,
  getCurrentProfile
})(withRouter(LittleBits));
