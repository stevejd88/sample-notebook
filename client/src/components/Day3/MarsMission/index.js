import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profile";

import Spinner from "../../layout/Spinner";
import "./mars.scss";

const MarsMission = ({ profile: { profile, loading }, history }) => {
  const arrowClick = (e) => {
    e.preventDefault();
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='mars-container'>
            <h2>Mission on Mars</h2>
            <div className='vid-div'>
              <iframe
                title='Mission on Mars'
                src='https://www.youtube.com/embed/nQ365jzwk5w?rel=0'
                allowfullscreen
                webkitallowfullscreen
                mozallowfullscreen
                oallowfullscreen
                msallowfullscreen
              ></iframe>
            </div>

            <div className='submit-btns'>
              <button
                type='button'
                className='submit-left'
                onClick={arrowClick}
                name='left-button'
                value='/day3'
              ></button>

              <button
                type='button'
                className='btn btn-primary my-1 main-save'
                name='save-button'
                value='save'
              >
                {" "}
                Save
              </button>

              <button
                type='button'
                className=' submit-right'
                onClick={arrowClick}
                name='right-button'
                value='/day3/energy'
              ></button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

MarsMission.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile
})(withRouter(MarsMission));
