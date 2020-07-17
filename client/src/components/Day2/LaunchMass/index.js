import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";

import Spinner from "../../layout/Spinner";
import "./launchmass.scss";

const initialState = {
  longerIsChecked: false,
  mass1eraser: "",
  mass2eraser: "",
  mass3eraser: "",
  distance1eraser: "",
  distance2eraser: "",
  distance3eraser: ""
};

const LaunchMass = ({
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
      for (const key in profile.day2Mass) {
        if (key in profileData) profileData[key] = profile.day2Mass[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    longerIsChecked,
    mass1eraser,
    mass2eraser,
    mass3eraser,
    distance1eraser,
    distance2eraser,
    distance3eraser
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day2/launch/mass", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day2/launch/mass", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section id='launch-mass-container'>
            <h2>
              <span>Launch: Mass as a Variable</span>
            </h2>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <span>Predict:</span> As I <span>increase</span> the{" "}
                  <span>mass</span> but keep the applied force the same, the
                  rocket will
                </legend>
                <Form.Check
                  custom
                  inline
                  label='travel a longer distance'
                  type='checkbox'
                  id='longerIsChecked'
                  value={longerIsChecked}
                  checked={longerIsChecked}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      longerIsChecked: !longerIsChecked
                    });
                  }}
                />
                <Form.Check
                  custom
                  inline
                  label='travel a shorter distance'
                  type='checkbox'
                  id='notLongerIsChecked'
                  value={!longerIsChecked}
                  checked={!longerIsChecked}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      longerIsChecked: !longerIsChecked
                    });
                  }}
                />
              </fieldset>

              <fieldset>
                <legend>
                  <strong>Rocket Data</strong>
                </legend>
                <div className='table-scroll'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>
                          Mass of Rocket <br /> <span>&#40;x axis&#41;</span>
                        </th>
                        <th>Launch Angle</th>
                        <th>Launch Displacement</th>
                        <th>
                          Distance Traveled <span>&#40;y axis&#41;</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Launch 1</td>
                        <td>
                          <input
                            type='text'
                            id='masseraser'
                            name='mass1eraser'
                            value={mass1eraser}
                            onChange={onChange}
                          />
                        </td>
                        <td>45'</td>
                        <td>20 cm </td>
                        <td>
                          <input
                            type='text'
                            id='distance1eraser'
                            name='distance1eraser'
                            value={distance1eraser}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Launch 2</td>
                        <td>
                          <input
                            type='text'
                            id='mass2eraser'
                            name='mass2eraser'
                            value={mass2eraser}
                            onChange={onChange}
                          />
                        </td>
                        <td>45'</td>
                        <td>20 cm </td>
                        <td>
                          <input
                            type='text'
                            id='distance-2eraser'
                            name='distance2eraser'
                            value={distance2eraser}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Launch 3</td>
                        <td>
                          <input
                            type='text'
                            id='mass3eraser'
                            name='mass3eraser'
                            value={mass3eraser}
                            onChange={onChange}
                          />
                        </td>
                        <td>45'</td>
                        <td>20 cm </td>
                        <td>
                          <input
                            type='text'
                            id='distance3eraser'
                            name='distance3eraser'
                            value={distance3eraser}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </fieldset>

              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
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
                  value='/day2/mass-graph'
                ></button>
              </div>
            </Form>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

LaunchMass.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(LaunchMass)
);
