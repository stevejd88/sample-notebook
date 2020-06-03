import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addObqPrototype, getCurrentProfile } from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";
import Spinner from "../../layout/Spinner";

import "./bridgeprototype.scss";

const initialState = {
  day1Prototype: ""
};

const BridgePrototype = ({
  profile: { profile, loading },
  addObqPrototype,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  let { day1Prototype } = formData;

  useEffect(() => {
    if (!profile) getCurrentProfile();
  }, [profile, getCurrentProfile]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!profile.day1Prototype) {
      addObqPrototype(formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='bridge-prototype-container'>
            <h3>Step 5: Create a Prototype</h3>
            <p className='sketch'>
              <strong>Sketch ideas for your bridge design below.</strong>
            </p>
            <form onSubmit={onSubmit}>
              <p>
                <strong>Your bridge must...</strong> Support a load of 50 grams,
                Not tilt &#40;must remain parallel to the water&#41;, Maintain a
                clearance of 1.5 cm above the water.
              </p>
              <div className='btns-scu'>
                <button
                  className='btn-save'
                  type='button'
                  onClick={() => {
                    setFormData({
                      ...formData,
                      day1Prototype: day1Prototype.getSaveData()
                    });
                  }}
                >
                  Save
                </button>
                <button
                  className='btn-clear'
                  type='button'
                  onClick={() => {
                    if (!profile.day1Prototype) {
                      day1Prototype.clear();
                    }
                  }}
                >
                  Clear
                </button>
                <button
                  className='btn-undo'
                  type='button'
                  onClick={() => {
                    if (!profile.day1Prototype) {
                      day1Prototype.undo();
                    }
                  }}
                >
                  Undo
                </button>
              </div>

              <br />

              <CanvasDraw
                className='bridge-canvas free-canvas'
                ref={(canvasDraw) => (day1Prototype = canvasDraw)}
                brushColor='rgba(155,12,60,0.3)'
                lazyRadius={0}
                brushRadius={4}
                canvasWidth={600}
                canvasHeight={600}
                hideGrid={false}
                saveData={profile.day1Prototype}
              />
              <button type='submit' className='btn btn-primary sbm-btm'>
                Submit
              </button>
            </form>
            <span className='bridge-supplies'>
              <strong>Bridge Supplies:</strong> Popsicle Sticks, Styrofoam
              balls, Fetuccine noodles, Lasagna Noodles
            </span>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

BridgePrototype.propTypes = {
  addObqPrototype: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addObqPrototype,
  getCurrentProfile
})(withRouter(BridgePrototype));
