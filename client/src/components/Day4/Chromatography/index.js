import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import "./chroma.scss";

const initialState = {
  solvent: "",
  solute: "",
  paper: "",
  crayola: "",
  lePlume: "",
  visAVis: "",
  sketch: "",
  whoNote: "",
  suspectMarker: "",
  guilty: "",
  pigmentSoluble: "",
  pigmentLeast: ""
};

const Chromatography = ({
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
      for (const key in profile.day4Chroma) {
        if (key in profileData) profileData[key] = profile.day4Chroma[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    solvent,
    solute,
    paper,
    crayola,
    lePlume,
    visAVis,
    sketch,
    whoNote,
    suspectMarker,
    guilty,
    pigmentSoluble,
    pigmentLeast
  } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day4/chromatography", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day4/chromatography", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='chromatography-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Chromatography</h2>
                </legend>
                <p>
                  <strong>
                    Using the analytical chemistry process called
                    chromatography, investigate each marker’s solubility
                    &#40;how easily it dissolves&#41;.
                  </strong>
                </p>
                <div className='chroma-qs-top'>
                  <Form.Row className='chroma-top-item chroma-solvent'>
                    <Form.Group>
                      <p>
                        <span>
                          <strong>1.</strong> The solvent, or substance you use
                          to make the ink dissolve, is{" "}
                          <input
                            type='text'
                            className='bs-input'
                            id='chroma-solvent'
                            name='solvent'
                            value={solvent}
                            onChange={onChange}
                          />{" "}
                          .
                        </span>
                      </p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className='chroma-top-item chroma-solute'>
                    <Form.Group>
                      <p>
                        <span>
                          <strong>2.</strong> The solute, or substance you will
                          dissolve, is{" "}
                          <input
                            type='text'
                            className='bs-input'
                            id='chroma-solute'
                            name='solute'
                            value={solute}
                            onChange={onChange}
                          />{" "}
                          .
                        </span>
                      </p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className='chroma-top-item chroma-medium'>
                    <Form.Group>
                      <p>
                        <span>
                          <strong>3.</strong> The medium to hold the substance
                          is{" "}
                          <input
                            type='text'
                            className='bs-input'
                            id='chroma-paper'
                            name='paper'
                            value={paper}
                            onChange={onChange}
                          />{" "}
                          .
                        </span>
                      </p>
                    </Form.Group>
                  </Form.Row>
                </div>
                {/* end chroma-qs-top div */}
                <div className='table-scroll'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Suspect</th>
                        <th>Marker Brand</th>
                        <th>Matching Chromatogram</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Crayola</td>
                        <td>
                          <input
                            type='text'
                            id='crayola'
                            name='crayola'
                            value={crayola}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Le Plume</td>
                        <td>
                          <input
                            type='text'
                            id='lePlume'
                            name='lePlume'
                            value={lePlume}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Vis a Vis</td>
                        <td>
                          <input
                            type='text'
                            id='visAVis'
                            name='visAVis'
                            value={visAVis}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Mr. Sketch</td>
                        <td>
                          <input
                            type='text'
                            id='sketch'
                            name='sketch'
                            value={sketch}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className='chroma-qs-bottom'>
                  <Form.Row className='chroma-bottom-item'>
                    <Form.Group>
                      <p>
                        <span>
                          <strong>4.</strong> The chromatogram of the marker
                          that left the note was:{" "}
                          <input
                            type='text'
                            className='bs-input'
                            id='whoNote'
                            name='whoNote'
                            value={whoNote}
                            onChange={onChange}
                            placeholder='A / B / C / D'
                          />{" "}
                        </span>
                      </p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className='chroma-bottom-item'>
                    <Form.Group>
                      <p>
                        <span>
                          <strong>5.</strong> Which suspect’s marker matched
                          that chromatogram?{" "}
                          <input
                            type='text'
                            className='bs-input'
                            id='suspectMarker'
                            name='suspectMarker'
                            value={suspectMarker}
                            onChange={onChange}
                            placeholder='#1 #2 #3 #4'
                          />{" "}
                        </span>
                      </p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className='chroma-bottom-item'>
                    <Form.Group>
                      <p>
                        <span>
                          <strong>6.</strong> Is this conclusive evidence that
                          the suspect who owned the marker was the one who left
                          the note?{" "}
                          <input
                            type='text'
                            className='bs-input'
                            id='guilty'
                            name='guilty'
                            value={guilty}
                            onChange={onChange}
                            placeholder='YES / NO'
                          />{" "}
                        </span>
                      </p>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className='chroma-bottom-item chroma-q-seven'>
                    <p>
                      <strong>7.</strong> Of the pigments mixed to create the
                      black ink, which pigment do you think is the most soluble?
                      &#40;traveled the furthest&#41;
                    </p>
                    <div className='radio-div'>
                      <div className='chroma-seven-radio'>
                        <input
                          type='radio'
                          id='chroma-orange'
                          name='pigmentSoluble'
                          value='orange'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-orange'>orange</label>
                        <br />
                        <input
                          type='radio'
                          id='chroma-red'
                          name='pigmentSoluble'
                          value='red'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-red'>red</label>
                        <br />
                        <input
                          type='radio'
                          id='chroma-purple'
                          name='pigmentSoluble'
                          value='purple'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-purple'>purple</label>
                        <br />
                        <input
                          type='radio'
                          id='chroma-blue-black'
                          name='pigmentSoluble'
                          value='blue-black'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-blue-black'>blue / black</label>
                        <br />
                      </div>
                      <div className={`color-${pigmentSoluble}`}></div>
                    </div>
                  </Form.Row>
                  <Form.Row className='chroma-bottom-item chroma-q-eight'>
                    <p>
                      <strong>8.</strong> Which is least soluble? &#40;showed up
                      last&#41;
                    </p>

                    <div className='radio-div'>
                      <div className='chroma-eight-radio'>
                        <input
                          type='radio'
                          id='chroma-orange2'
                          name='pigmentLeast'
                          value='orange'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-orange2'>orange</label>
                        <br />
                        <input
                          type='radio'
                          id='chroma-red2'
                          name='pigmentLeast'
                          value='red'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-red2'>red</label>
                        <br />
                        <input
                          type='radio'
                          id='chroma-purple2'
                          name='pigmentLeast'
                          value='purple'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-purple2'>purple</label>
                        <br />
                        <input
                          type='radio'
                          id='chroma-blue-black2'
                          name='pigmentLeast'
                          value='blue-black'
                          onChange={onChange}
                        />
                        <label htmlFor='chroma-blue-black2'>blue / black</label>
                        <br />
                      </div>
                      <div className={`color-${pigmentLeast}`}></div>
                    </div>
                  </Form.Row>
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day4/solubility'
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
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Chromatography.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Chromatography)
);
