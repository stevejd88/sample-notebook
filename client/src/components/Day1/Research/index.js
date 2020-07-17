import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import BridgeModal from "./BridgeModal";

import "./research.scss";

const initialState = {
  bSpan: false,
  bLoad: false,
  bTime: false,
  bTemp: false,
  sSpan: false,
  sLoad: false,
  sTime: false,
  sTemp: false,
  aSpan: false,
  aLoad: false,
  aTime: false,
  aTemp: false,
  fSpan: false,
  fLoad: false,
  fTime: false,
  fTemp: false
};

const Research = ({
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
      for (const key in profile.day1Rsrch) {
        if (key in profileData) profileData[key] = profile.day1Rsrch[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    bSpan,
    bLoad,
    bTime,
    bTemp,
    sSpan,
    sLoad,
    sTime,
    sTemp,
    aSpan,
    aLoad,
    aTime,
    aTemp,
    fSpan,
    fLoad,
    fTime,
    fTemp
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day1/obq/research", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day1/obq/research", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='obq-research-container container'>
            <h3>Step 2: Research the Problem</h3>
            <p>
              <strong>Research each type of bridge with your team.</strong>
            </p>
            <p>
              Place a &#40; &#10004; &#41; in the box for the criteria met by
              each bridge
            </p>
            <form onSubmit={onSubmit}>
              <div className='table-scroll'>
                <table className='research-table table table-striped'>
                  <thead>
                    <tr>
                      <th scope='col'>
                        <strong>Bridge Type</strong>
                      </th>
                      <th scope='col'>
                        <strong>Span</strong>
                        <br />A minimum of 200 meters.
                      </th>
                      <th scope='col'>
                        <strong>Load</strong>
                        <br />A minimum of Light Loads
                      </th>
                      <th scope='col'>
                        <strong>Construction Time</strong>
                        <br />
                        Must be done quickly!
                      </th>
                      <th scope='col'>
                        <strong>It can be temporary</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>
                        <strong>Beam</strong>
                      </th>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            id='beamCheck1'
                            className='custom-control-input'
                            name='bSpan'
                            checked={bSpan}
                            value={bSpan}
                            onChange={(e) => {
                              setFormData({ ...formData, bSpan: !bSpan });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='beamCheck1'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='beamCheck2'
                            name='bLoad'
                            checked={bLoad}
                            value={bLoad}
                            onChange={(e) => {
                              setFormData({ ...formData, bLoad: !bLoad });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='beamCheck2'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='beamCheck3'
                            name='bTime'
                            checked={bTime}
                            value={bTime}
                            onChange={(e) => {
                              setFormData({ ...formData, bTime: !bTime });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='beamCheck3'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='beamCheck4'
                            name='bSpan'
                            checked={bTemp}
                            value={bTemp}
                            onChange={(e) => {
                              setFormData({ ...formData, bTemp: !bTemp });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='beamCheck4'
                          ></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <strong>Suspension</strong>
                      </th>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='suspensionCheck1'
                            name='sSpan'
                            checked={sSpan}
                            value={sSpan}
                            onChange={(e) => {
                              setFormData({ ...formData, sSpan: !sSpan });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='suspensionCheck1'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='suspensionCheck2'
                            name='sSpan'
                            checked={sLoad}
                            value={sLoad}
                            onChange={(e) => {
                              setFormData({ ...formData, sLoad: !sLoad });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='suspensionCheck2'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='suspensionCheck3'
                            name='sSpan'
                            checked={sTime}
                            value={sTime}
                            onChange={(e) => {
                              setFormData({ ...formData, sTime: !sTime });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='suspensionCheck3'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='suspensionCheck4'
                            name='sSpan'
                            checked={sTemp}
                            value={sTemp}
                            onChange={(e) => {
                              setFormData({ ...formData, sTemp: !sTemp });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='suspensionCheck4'
                          ></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <strong>Arch</strong>
                      </th>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='archCheck1'
                            name='aSpan'
                            checked={aSpan}
                            value={aSpan}
                            onChange={(e) => {
                              setFormData({ ...formData, aSpan: !aSpan });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='archCheck1'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='archCheck2'
                            name='sTime'
                            checked={aLoad}
                            value={aLoad}
                            onChange={(e) => {
                              setFormData({ ...formData, aLoad: !aLoad });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='archCheck2'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='archCheck3'
                            name='aSpan'
                            checked={aTime}
                            value={aTime}
                            onChange={(e) => {
                              setFormData({ ...formData, aTime: !aTime });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='archCheck3'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='archCheck4'
                            name='aTemp'
                            checked={aTemp}
                            value={aTemp}
                            onChange={(e) => {
                              setFormData({ ...formData, aTemp: !aTemp });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='archCheck4'
                          ></label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <strong>Floating</strong>
                      </th>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='floatingCheck1'
                            name='fSpan'
                            checked={fSpan}
                            value={fSpan}
                            onChange={(e) => {
                              setFormData({ ...formData, fSpan: !fSpan });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='floatingCheck1'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='floatingCheck2'
                            name='fLoad'
                            checked={fLoad}
                            value={fLoad}
                            onChange={(e) => {
                              setFormData({ ...formData, fLoad: !fLoad });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='floatingCheck2'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='floatingCheck3'
                            name='fTime'
                            checked={fTime}
                            value={fTime}
                            onChange={(e) => {
                              setFormData({ ...formData, fTime: !fTime });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='floatingCheck3'
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div className='custom-control custom-checkbox'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='floatingCheck4'
                            name='fTemp'
                            checked={fTemp}
                            value={fTemp}
                            onChange={(e) => {
                              setFormData({ ...formData, fTemp: !fTemp });
                            }}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='floatingCheck4'
                          ></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day1/figure-that'
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
                  value='/day1/develop-choose'
                ></button>
              </div>
            </form>

            <BridgeModal />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Research.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Research)
);
