import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addObqTestEval, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./testeval.scss";

const initialState = {
  parallelIsChecked: false,
  clearedIsChecked: false,
  supportsIsChecked: false,
  successIsChecked: false,
  successExplain: ""
};

const TestEval = ({
  profile: { profile, loading },
  addObqTestEval,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day1Tsteval) {
        if (key in profileData) profileData[key] = profile.day1Tsteval[key];
      }
      setFormData(profileData);
    }
  }, [loading, profile, getCurrentProfile]);

  const {
    parallelIsChecked,
    clearedIsChecked,
    supportsIsChecked,
    successIsChecked,
    successExplain
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addObqTestEval(formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='obq-test-eval-container'>
            <h3>Step 6: Test and Evaluate</h3>
            <p>
              <strong>
                Once you have constructed your bridge, go to the testing station
                and test your bridge. Record and evaluate your results in the
                table below. Then proceed to step 7.
              </strong>
            </p>
            <br />
            <p>
              <strong>
                &#40;BEFORE testing, MAKE SURE your roadbed is unobstructed and
                clear for traffic to pass through. &#41;
              </strong>
            </p>

            <form className='tr' onSubmit={onSubmit}>
              <div className='test-questions'>
                <p>
                  <strong>Stays parallel to water without tilting?</strong>
                </p>
                <div className='test-input-div'>
                  <input
                    id='parallelYes'
                    className='td'
                    type='checkbox'
                    value={parallelIsChecked}
                    checked={parallelIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        parallelIsChecked: !parallelIsChecked
                      });
                    }}
                  />
                  <label htmlFor='parallelYes'>Yes</label>

                  <input
                    className='td'
                    type='checkbox'
                    id='parallelNo'
                    value={!parallelIsChecked}
                    checked={!parallelIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        parallelIsChecked: !parallelIsChecked
                      });
                    }}
                  />
                  <label htmlFor='parallelNo'>No</label>
                </div>
              </div>

              <div className='test-questions'>
                <p>
                  <strong>Maintains required clearance?</strong> &#40;1.5cm&#41;
                </p>
                <div className='test-input-div'>
                  <input
                    className='td'
                    type='checkbox'
                    id='clearedYes'
                    value={clearedIsChecked}
                    checked={clearedIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        clearedIsChecked: !clearedIsChecked
                      });
                    }}
                  />
                  <label htmlFor='clearedYes'>Yes</label>

                  <input
                    className='td'
                    type='checkbox'
                    id='clearedNo'
                    value={!clearedIsChecked}
                    checked={!clearedIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        clearedIsChecked: !clearedIsChecked
                      });
                    }}
                  />
                  <label htmlFor='clearedNo'>No</label>
                </div>
              </div>

              <div className='test-questions'>
                <p>
                  <strong>Supports required load? &#40;50 grams&#41;</strong>
                </p>
                <div className='test-input-div'>
                  <input
                    className='td'
                    type='checkbox'
                    id='supportsYes'
                    value={supportsIsChecked}
                    checked={supportsIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        supportsIsChecked: !supportsIsChecked
                      });
                    }}
                  />
                  <label htmlFor='supportsYes'>Yes</label>

                  <input
                    className='td'
                    type='checkbox'
                    id='supportsNo'
                    value={!supportsIsChecked}
                    checked={!supportsIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        supportsIsChecked: !supportsIsChecked
                      });
                    }}
                  />
                  <label htmlFor='supportsNo'>No</label>
                </div>
              </div>

              <div className='test-questions'>
                <p>
                  <strong>Evaluate:</strong> Was the design a success?
                </p>
                <div className='test-input-div'>
                  <input
                    className='td'
                    type='checkbox'
                    id='successYes'
                    value={successIsChecked}
                    checked={successIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        successIsChecked: !successIsChecked
                      });
                    }}
                  />
                  <label htmlFor='successYes-yes'>Yes</label>

                  <input
                    className='td'
                    type='checkbox'
                    id='successNo'
                    value={!successIsChecked}
                    checked={!successIsChecked}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        successIsChecked: !successIsChecked
                      });
                    }}
                  />
                  <label htmlFor='successNo'>No</label>
                </div>
              </div>

              <div className='evaluate-success'>
                <label htmlFor='why-success'>
                  <strong>Why or why not?</strong>
                </label>
                <textarea
                  id='why-success'
                  name='successExplain'
                  value={successExplain}
                  onChange={onChange}
                  cols='30'
                  rows='3'
                ></textarea>
              </div>

              <button className='btn btn-primary' type='submit'>
                Save
              </button>
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

TestEval.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addObqTestEval, getCurrentProfile })(
  withRouter(TestEval)
);
