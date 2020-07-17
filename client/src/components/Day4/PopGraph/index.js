import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";
import CanvasDraw from "react-canvas-draw";

import Pop from "../../../assets/img/day4/pop-graph.png";

import "./popgraph.scss";

const initialState = {
  popBanneker: "",
  popEasley: "",
  popDouglas: "",
  popKrafft: "",
  popMerian: "",
  popMirz: "",
  popMolina: "",
  popWu: "",
  popMean1: "",
  popMean2: "",
  popConclusion: "",
  day4PopDraw: ""
};

const PopGraph = ({
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
      for (const key in profile.day4PopResults) {
        if (key in profileData) profileData[key] = profile.day4PopResults[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    popBanneker,
    popEasley,
    popDouglas,
    popKrafft,
    popMerian,
    popMirz,
    popMolina,
    popWu,
    popMean1,
    popMean2,
    popConclusion
  } = formData;

  let { day4PopDraw } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day4/pop-results", true, formData);
    if (!profile.day4PopDraw) {
      addData("day4/pop/draw", false, formData);
    }
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day4/pop-results", true, formData);
    if (!profile.day4PopDraw) {
      addData("day4/pop/draw", false, formData);
    }
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='pop-graph-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>POP! Goes the Results</h2>
                </legend>

                <div className='table-scroll'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>TEAMS</th>
                        <th className='teamA-title'>Team A</th>
                        <th className='teamB-title'>Team B</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='banneker'>Banneker</td>
                        <td>
                          <input
                            type='text'
                            id='popBanneker'
                            name='popBanneker'
                            value={popBanneker}
                            onChange={onChange}
                          />
                        </td>
                        <td className='blank'></td>
                      </tr>
                      <tr>
                        <td className='easley'>Easley</td>
                        <td>
                          <input
                            type='text'
                            id='popEasley'
                            name='popEasley'
                            value={popEasley}
                            onChange={onChange}
                          />
                        </td>
                        <td className='blank'></td>
                      </tr>
                      <tr>
                        <td className='douglas'>Douglas</td>
                        <td>
                          <input
                            type='text'
                            id='popDouglas'
                            name='popDouglas'
                            value={popDouglas}
                            onChange={onChange}
                          />
                        </td>
                        <td className='blank'></td>
                      </tr>
                      <tr>
                        <td className='krafft'>Krafft</td>
                        <td>
                          <input
                            type='text'
                            id='popKrafft'
                            name='popKrafft'
                            value={popKrafft}
                            onChange={onChange}
                          />
                        </td>
                        <td className='blank'></td>
                      </tr>
                      <tr>
                        <td className='merian'>Merian</td>
                        <td className='blank'></td>
                        <td>
                          <input
                            type='text'
                            id='popMerian'
                            name='popMerian'
                            value={popMerian}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='mirzakhani'>Mirzakhani</td>
                        <td className='blank'></td>
                        <td>
                          <input
                            type='text'
                            id='popMirz'
                            name='popMirz'
                            value={popMirz}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='molina'>Molina</td>
                        <td className='blank'></td>
                        <td>
                          <input
                            type='text'
                            id='popMolina'
                            name='popMolina'
                            value={popMolina}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='wu'>Wu</td>
                        <td className='blank'></td>
                        <td>
                          <input
                            type='text'
                            id='popWu'
                            name='popWu'
                            value={popWu}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className='class-mean'>Class Mean</td>
                        <td>
                          <input
                            type='text'
                            id='popMean1'
                            name='popMean1'
                            value={popMean1}
                            onChange={onChange}
                          />
                        </td>
                        <td>
                          <input
                            type='text'
                            id='popMean2'
                            name='popMean2'
                            value={popMean2}
                            onChange={onChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className='pop-canvas-div'>
                  <div className='btns-scu'>
                    <button
                      className='btn-save'
                      type='button'
                      onClick={() => {
                        setFormData({
                          ...formData,
                          day4PopDraw: day4PopDraw.getSaveData()
                        });
                      }}
                    >
                      Save
                    </button>
                    <button
                      className='btn-clear'
                      type='button'
                      onClick={() => {
                        if (!profile.day4PopDraw) {
                          day4PopDraw.clear();
                        }
                      }}
                    >
                      Clear
                    </button>
                    <button
                      className='btn-undo'
                      type='button'
                      onClick={() => {
                        if (!profile.day4PopDraw) {
                          day4PopDraw.undo();
                        }
                      }}
                    >
                      Undo
                    </button>
                  </div>
                  <CanvasDraw
                    className='pop-canvas free-canvas'
                    ref={(canvasDraw) => (day4PopDraw = canvasDraw)}
                    lazyRadius={0}
                    brushColor='rgba(155,12,60,0.3)'
                    brushRadius={2}
                    canvasWidth={500}
                    canvasHeight={500}
                    imgSrc={Pop}
                    saveData={profile.day4PopDraw}
                  />
                </div>

                <div className='pop-graph-bottom'>
                  <Form.Row>
                    <Form.Group>
                      <Form.Label>
                        <strong>
                          Do you think the Department of Defense should buy
                          twice as much fuel? Why or why not?
                        </strong>
                      </Form.Label>
                      <textarea
                        className='bs-input'
                        id='popConclusion'
                        name='popConclusion'
                        value={popConclusion}
                        onChange={onChange}
                        cols='20'
                        rows='3'
                      ></textarea>
                    </Form.Group>
                  </Form.Row>
                </div>
              </fieldset>
              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day4/pop-data'
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
                  value='/day4/kinetic-energy'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

PopGraph.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(PopGraph)
);
