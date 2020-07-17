import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./gallerywalk2.scss";

const initialState = {
  bannekerBefore2: "",
  bannekerAfter2: "",
  easleyBefore2: "",
  easleyAfter2: "",
  douglasBefore2: "",
  douglasAfter2: "",
  krafftBefore2: "",
  krafftAfter2: "",
  merianBefore2: "",
  merianAfter2: "",
  mirzBefore2: "",
  mirzAfter2: "",
  molinaBefore2: "",
  molinaAfter2: "",
  wuBefore2: "",
  wuAfter2: ""
};

const GalleryWalk2 = ({
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
      for (const key in profile.day5EggbertTrial2) {
        if (key in profileData)
          profileData[key] = profile.day5EggbertTrial2[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    bannekerBefore2,
    bannekerAfter2,
    easleyBefore2,
    easleyAfter2,
    douglasBefore2,
    douglasAfter2,
    krafftBefore2,
    krafftAfter2,
    merianBefore2,
    merianAfter2,
    mirzBefore2,
    mirzAfter2,
    molinaBefore2,
    molinaAfter2,
    wuBefore2,
    wuAfter2
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day5/eggbert/trial2", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/eggbert/trial2", true, formData);
  };
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='eggbert-gallery2-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>
                    Eggbert Trial <span>#2</span>
                  </h2>
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
                            id='bannekerBefore2'
                            name='bannekerBefore2'
                            value={bannekerBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='bannekerAfter2'
                            name='bannekerAfter2'
                            value={bannekerAfter2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='easley'>Easley</td>
                        <td>
                          <input
                            type='text'
                            id='easleyBefore2'
                            name='easleyBefore2'
                            value={easleyBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='easleyAfter2'
                            name='easleyAfter2'
                            value={easleyAfter2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='douglas'>Douglas</td>
                        <td>
                          <input
                            type='text'
                            id='douglasBefore2'
                            name='douglasBefore2'
                            value={douglasBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='douglasAfter2'
                            name='douglasAfter2'
                            value={douglasAfter2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='krafft'>Krafft</td>
                        <td>
                          <input
                            type='text'
                            id='krafftBefore2'
                            name='krafftBefore2'
                            value={krafftBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='krafftAfter2'
                            name='krafftAfter2'
                            value={krafftAfter2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='merian'>Merian</td>
                        <td>
                          <input
                            type='text'
                            id='merianBefore2'
                            name='merianBefore2'
                            value={merianBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='merianAfter2'
                            name='merianAfter2'
                            value={merianAfter2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='mirzakhani'>Mirzakhani</td>
                        <td>
                          <input
                            type='text'
                            id='mirzBefore2'
                            name='mirzBefore2'
                            value={mirzBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='mirzAfter2'
                            name='mirzAfter2'
                            value={mirzAfter2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='molina'>Molina</td>
                        <td>
                          <input
                            type='text'
                            id='molinaBefore2'
                            name='molinaBefore2'
                            value={molinaBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='molinaAfter2'
                            name='molinaAfter2'
                            value={molinaAfter2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='wu'>Wu</td>
                        <td>
                          <input
                            type='text'
                            id='wuBefore2'
                            name='wuBefore2'
                            value={wuBefore2}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='wuAfter2'
                            name='wuAfter2'
                            value={wuAfter2}
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
                  value='/day5/eggbert/trial1'
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
                  value='/day5/eggbert/evaluate'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

GalleryWalk2.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(GalleryWalk2)
);
