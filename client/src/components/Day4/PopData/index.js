import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./popdata.scss";

const initialState = {
  popHypothesis: "",
  teamA1: "",
  teamA2: "",
  teamA3: "",
  teamAMean: "",
  teamB1: "",
  teamB2: "",
  teamB3: "",
  teamBMean: ""
};

const PopData = ({
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
      for (const key in profile.day4PopData) {
        if (key in profileData) profileData[key] = profile.day4PopData[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    popHypothesis,
    teamA1,
    teamA2,
    teamA3,
    teamAMean,
    teamB1,
    teamB2,
    teamB3,
    teamBMean
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day4/pop-data", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day4/pop-data", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='pop-data-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>POP! Goes the Data</h2>
                </legend>

                <div className='pop-hypothesis'>
                  <h3>HYPOTHESIS</h3>
                  <p>
                    <strong>
                      Will increasing the amount of fuel affect the vertical
                      launch height of a rocket &#40;film canister&#41;?
                    </strong>
                  </p>
                  <Form.Row className='pop-jobs-top'>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          If I increase the amount of Alka Seltzer &reg;
                          &#34;fuel&#34;, then the vertical launch height of the
                          film canister &#34;rocket&#34; will
                        </strong>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        className='bs-input'
                        placeholder='increase / decrease / not change.'
                        id='popHypothesis'
                        name='popHypothesis'
                        value={popHypothesis}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                </div>
                {/* end pop-hypothesis div  */}

                <div className='team-data'>
                  <div className='teamA-data'>
                    <h4>
                      <strong>Team A: One Tablet</strong>
                    </h4>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Trial</th>
                          <th>Height in cm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <input
                              type='text'
                              id='teamA1'
                              name='teamA1'
                              value={teamA1}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <input
                              type='text'
                              id='teamA2'
                              name='teamA2'
                              value={teamA2}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <input
                              type='text'
                              id='teamA3'
                              name='teamA3'
                              value={teamA3}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Mean</td>
                          <td>
                            <input
                              type='text'
                              id='teamAMean'
                              name='teamAMean'
                              value={teamAMean}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <p className='data0-colab'>
                    <strong>
                      Collaborate with your table to complete data for both
                      teams.
                    </strong>
                  </p>

                  <div className='teamB-data'>
                    <h4>
                      <strong>Team B: 1/2 Tablet</strong>
                    </h4>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Trial</th>
                          <th>Height in cm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <input
                              type='text'
                              id='teamB1'
                              name='teamB1'
                              value={teamB1}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <input
                              type='text'
                              id='teamB2'
                              name='teamB2'
                              value={teamB2}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <input
                              type='text'
                              id='teamB3'
                              name='teamB3'
                              value={teamB3}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Mean</td>
                          <td>
                            <input
                              type='text'
                              id='teamBMean'
                              name='teamBMean'
                              value={teamBMean}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day4'
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
                  value='/day4/pop-results'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

PopData.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(PopData)
);
