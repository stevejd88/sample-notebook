import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addObqCeilingFly, getCurrentProfile } from "../../../actions/profile";
import CanvasDraw from "react-canvas-draw";
import Spinner from "../../layout/Spinner";
import Fly from "../../../assets/img/obq/fly3.png";
import FlyName from "../../../assets/img/obq/fly-title.png";
import FlyRules from "../../../assets/img/obq/fly-rules.png";

const initialState = {
  day1CeilingFly: ""
};

const FlyOnCeiling = ({
  profile: { profile, loading },
  addObqCeilingFly,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  let { day1CeilingFly } = formData;

  useEffect(() => {
    if (!profile) getCurrentProfile();
  }, [profile, getCurrentProfile]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!profile.day1CeilingFly) {
      console.log(formData);
      addObqCeilingFly(formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <form onSubmit={onSubmit}>
            <img className='img-fluid' src={FlyName} alt='title' />

            <div className='btns-scu'>
              <button
                className='btn-save'
                type='button'
                onClick={() => {
                  setFormData({
                    ...formData,
                    day1CeilingFly: day1CeilingFly.getSaveData()
                  });
                }}
              >
                Save
              </button>
              <button
                className='btn-clear'
                type='button'
                onClick={() => {
                  if (!profile.day1CeilingFly) {
                    day1CeilingFly.clear();
                  }
                }}
              >
                Clear
              </button>
              <button
                className='btn-undo'
                type='button'
                onClick={() => {
                  if (!profile.day1CeilingFly) {
                    day1CeilingFly.undo();
                  }
                }}
              >
                Undo
              </button>
            </div>

            <CanvasDraw
              className='graph-canvas'
              ref={(canvasDraw) => (day1CeilingFly = canvasDraw)}
              brushColor='rgba(155,12,60,0.3)'
              lazyRadius={0}
              brushRadius={4}
              canvasWidth={600}
              canvasHeight={400}
              imgSrc={Fly}
              saveData={profile.day1CeilingFly}
            />
            <button type='submit' className='btn btn-primary sbm-btm'>
              Submit
            </button>
            <img className='img-fluid' src={FlyRules} alt='rules' />
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

FlyOnCeiling.propTypes = {
  addObqCeilingFly: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  addObqCeilingFly,
  getCurrentProfile
})(withRouter(FlyOnCeiling));
