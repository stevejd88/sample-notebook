import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";

import Spinner from "../../layout/Spinner";
import "./displacement.scss";

const initialState = {
  longerIsChecked: false,
  mass1: "",
  mass2: "",
  mass3: "",
  distance1: "",
  distance2: "",
  distance3: ""
};

const LaunchDisplacement = ({
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
      for (const key in profile.day2Displacement) {
        if (key in profileData)
          profileData[key] = profile.day2Displacement[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    longerIsChecked,
    mass1,
    mass2,
    mass3,
    distance1,
    distance2,
    distance3
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day2/launch/displacement", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day2/launch/displacement", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section id='launch-displacement-container'>
            <h2>
              <span>Launch: Displacement as a Variable</span>
            </h2>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <span>Predict:</span> As I <span>increase</span> the{" "}
                  <span>displacement</span> but keep the mass the same, the
                  rocket will
                </legend>
                <Form.Check
                  custom
                  inline
                  label='travel a greater distance'
                  type='checkbox'
                  id='furtherIsChecked'
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
                  id='notfurtherIsChecked'
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
                        <th>Mass of Rocket </th>
                        <th>Launch Angle</th>
                        <th>
                          Launch Displacement <span>&#40;x axis&#41;</span>
                        </th>
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
                            id='mass1'
                            name='mass1'
                            value={mass1}
                            onChange={onChange}
                          />
                        </td>
                        <td>45'</td>
                        <td>8 cm </td>
                        <td>
                          <input
                            type='text'
                            id='distance1'
                            name='distance1'
                            value={distance1}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Launch 2</td>
                        <td>
                          <input
                            type='text'
                            id='mass2'
                            name='mass2'
                            value={mass2}
                            onChange={onChange}
                          />
                        </td>
                        <td>45'</td>
                        <td>16 cm </td>
                        <td>
                          <input
                            type='text'
                            id='distance2'
                            name='distance2'
                            value={distance2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Launch 3</td>
                        <td>
                          <input
                            type='text'
                            id='mass3'
                            name='mass3'
                            value={mass3}
                            onChange={onChange}
                          />
                        </td>
                        <td>45'</td>
                        <td>24 cm </td>
                        <td>
                          <input
                            type='text'
                            id='distance3'
                            name='distance3'
                            value={distance3}
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
                  value='/day2/mass-graph'
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
                  value='/day2/displacement-graph'
                ></button>
              </div>
            </Form>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

LaunchDisplacement.propTypes = {
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
})(withRouter(LaunchDisplacement));
