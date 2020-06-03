import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./gallerywalk1.scss";

const initialState = {
  bannekerBefore: "",
  bannekerAfter: "",
  easleyBefore: "",
  easleyAfter: "",
  douglasBefore: "",
  douglasAfter: "",
  krafftBefore: "",
  krafftAfter: "",
  merianBefore: "",
  merianAfter: "",
  mirzBefore: "",
  mirzAfter: "",
  molinaBefore: "",
  molinaAfter: "",
  wuBefore: "",
  wuAfter: ""
};

const GalleryWalk1 = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day5EggbertTrial1) {
        if (key in profileData)
          profileData[key] = profile.day5EggbertTrial1[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    bannekerBefore,
    bannekerAfter,
    easleyBefore,
    easleyAfter,
    douglasBefore,
    douglasAfter,
    krafftBefore,
    krafftAfter,
    merianBefore,
    merianAfter,
    mirzBefore,
    mirzAfter,
    molinaBefore,
    molinaAfter,
    wuBefore,
    wuAfter
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/eggbert/trial1", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='eggbert-gallery1-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Eggbert Trial #1</h2>
                </legend>
                <div className='rating-scale'>
                  <p>
                    <strong>Rate teams before and after their launch.</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>5</strong> &#61; WOW&#33;
                    </li>
                    <li>
                      <strong>4</strong> &#61; Got It
                    </li>
                    <li>
                      <strong>3</strong> &#61; Okay
                    </li>
                    <li>
                      <strong>2</strong> &#61; Shaky
                    </li>
                    <li>
                      <strong>1</strong> &#61; Ouch&#33;
                    </li>
                  </ul>
                </div>

                <div className='table-scroll'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>TEAM NAME</th>
                        <th>
                          <span>Before launch</span> Restraint System Prediction
                        </th>
                        <th>
                          <span>After launch</span> Restraint System Final
                          Analysis
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='banneker'>Banneker</td>
                        <td>
                          <input
                            type='text'
                            id='bannekerBefore'
                            name='bannekerBefore'
                            value={bannekerBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='bannekerAfter'
                            name='bannekerAfter'
                            value={bannekerAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='easley'>Easley</td>
                        <td>
                          <input
                            type='text'
                            id='easleyBefore'
                            name='easleyBefore'
                            value={easleyBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='easleyAfter'
                            name='easleyAfter'
                            value={easleyAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='douglas'>Douglas</td>
                        <td>
                          <input
                            type='text'
                            id='douglasBefore'
                            name='douglasBefore'
                            value={douglasBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='douglasAfter'
                            name='douglasAfter'
                            value={douglasAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='krafft'>Krafft</td>
                        <td>
                          <input
                            type='text'
                            id='krafftBefore'
                            name='krafftBefore'
                            value={krafftBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='krafftAfter'
                            name='krafftAfter'
                            value={krafftAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='merian'>Merian</td>
                        <td>
                          <input
                            type='text'
                            id='merianBefore'
                            name='merianBefore'
                            value={merianBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='merianAfter'
                            name='merianAfter'
                            value={merianAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='mirzakhani'>Mirzakhani</td>
                        <td>
                          <input
                            type='text'
                            id='mirzBefore'
                            name='mirzBefore'
                            value={mirzBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='mirzAfter'
                            name='mirzAfter'
                            value={mirzAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='molina'>Molina</td>
                        <td>
                          <input
                            type='text'
                            id='molinaBefore'
                            name='molinaBefore'
                            value={molinaBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='molinaAfter'
                            name='molinaAfter'
                            value={molinaAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='wu'>Wu</td>
                        <td>
                          <input
                            type='text'
                            id='wuBefore'
                            name='wuBefore'
                            value={wuBefore}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='wuAfter'
                            name='wuAfter'
                            value={wuAfter}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </fieldset>
              <button className='btn btn-primary' type='submit'>
                Save
              </button>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

GalleryWalk1.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(GalleryWalk1)
);
