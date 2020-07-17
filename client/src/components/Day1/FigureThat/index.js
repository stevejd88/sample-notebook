import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";

import Spinner from "../../layout/Spinner";
import Pie from "../../../assets/img/obq/company-pie.png";
import Fractions from "../../../assets/img/obq/company-fractions.png";

import "./figurethat.scss";

const initialState = {
  fractionA: "",
  percentA: "",
  decimalA: "",
  fractionB: "",
  percentB: "",
  decimalB: "",
  fractionC: "",
  percentC: "",
  decimalC: "",
  fractionD: "",
  percentD: "",
  decimalD: "",
  eliminateCompany: "",
  companyToSelect: "",
  solveProblem: ""
};

const FigureThat = ({
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
      for (const key in profile.day1FigureThat) {
        if (key in profileData) profileData[key] = profile.day1FigureThat[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    fractionA,
    percentA,
    decimalA,
    fractionB,
    percentB,
    decimalB,
    fractionC,
    percentC,
    decimalC,
    fractionD,
    percentD,
    decimalD,
    eliminateCompany,
    companyToSelect,
    solveProblem
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day1/obq/figure-that", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day1/obq/figure-that", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='figure-that-container'>
            <h3>
              PROBLEM 1:
              <br />
              WHICH COMPANY’S PROPOSAL BEST MEETS THE CRITERIA
            </h3>
            <p>
              As a member of the city’s engineering department, you must select
              a company to build a bridge. You have been presented with
              proposals from four companies. You will analyze the proposals and
              select the company that meets the most criteria.
            </p>
            <div className='ft-imgs'>
              <div>
                <img
                  className='img-fluid pie-img'
                  src={Pie}
                  alt='Company pie graph'
                />
              </div>
              <div>
                <img
                  className='img-fluid fracs-img'
                  src={Fractions}
                  alt='Company fraction display'
                />
              </div>
            </div>

            <div className='company-fill-in'>
              <p>
                <strong>
                  Quantify the data by showing each company's proposal
                  information as a fraction, decimal, and percent.
                </strong>
              </p>
              <form onSubmit={onSubmit}>
                <div className='figure-that-div'>
                  <div className='table-scroll'>
                    <table className='figure-that-table table table-striped'>
                      <thead>
                        <tr>
                          <th scope='col'>
                            <strong>Company</strong>
                          </th>
                          <th scope='col'>
                            <strong>Fraction</strong>
                          </th>
                          <th scope='col'>
                            <strong>Percent</strong>
                          </th>
                          <th scope='col'>
                            <strong>Decimal Equivelant</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope='row'>
                            <strong>A</strong>
                          </th>
                          <td>
                            <input
                              type='text'
                              id='AFraction'
                              name='fractionA'
                              value={fractionA}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='APercent'
                              name='percentA'
                              value={percentA}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='ADecimal'
                              name='decimalA'
                              value={decimalA}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>
                            <strong>B</strong>
                          </th>
                          <td>
                            <input
                              type='text'
                              id='BFraction'
                              name='fractionB'
                              value={fractionB}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='BPercent'
                              name='percentB'
                              value={percentB}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='BDecimal'
                              name='decimalB'
                              value={decimalB}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>
                            <strong>C</strong>
                          </th>
                          <td>
                            <input
                              type='text'
                              id='CFraction'
                              name='fractionC'
                              value={fractionC}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='CPercent'
                              name='percentC'
                              value={percentC}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='CDecimal'
                              name='decimalC'
                              value={decimalC}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>
                            <strong>D</strong>
                          </th>
                          <td>
                            <input
                              type='text'
                              id='DFraction'
                              name='fractionD'
                              value={fractionD}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='DPercent'
                              name='percentD'
                              value={percentD}
                              onChange={onChange}
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              id='DDecimal'
                              name='decimalD'
                              value={decimalD}
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='figure-qs'>
                  <label htmlFor='comp-eliminate'>
                    <strong>
                      1. If you were eliminating the company that meets only 50%
                      or less of the criteria, what <u>fraction</u> of the
                      companies would you eliminate?
                    </strong>
                  </label>
                  <input
                    type='text'
                    id='comp-eliminate'
                    name='eliminateCompany'
                    value={eliminateCompany}
                    onChange={onChange}
                  />

                  <label htmlFor='comp-select'>
                    <strong>
                      2. Based on the data, which company's proposal should be
                      selected?
                    </strong>
                  </label>
                  <input
                    type='text'
                    id='comp-select'
                    name='companyToSelect'
                    value={companyToSelect}
                    onChange={onChange}
                  />

                  <label htmlFor='solve-prob'>
                    <strong>
                      3. Describe a time you needed to use fractions, decimals,
                      and percents to help solve a problem.
                    </strong>
                  </label>
                  <textarea
                    id='solve-prob'
                    name='solveProblem'
                    value={solveProblem}
                    onChange={onChange}
                    cols='30'
                    rows='2'
                  ></textarea>
                </div>

                <div className='submit-btns'>
                  <button
                    type='submit'
                    className='submit-left'
                    onClick={arrowClick}
                    name='left-button'
                    value='/day1/edp'
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
                    value='/day1/research'
                  ></button>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

FigureThat.propTypes = {
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
})(withRouter(FigureThat));
