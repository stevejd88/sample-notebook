import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Graph from "../../../assets/img/day5/graph.png";

import "./eggevaluate.scss";

const initialState = {
  evaluate: ""
};

const Evaluate = ({
  profile: { profile, loading },
  addData,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile.day5EggbertEval) {
        if (key in profileData) profileData[key] = profile.day5EggbertEval[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { evaluate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day5/eggbert/evaluate", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='eggbert-evaluate-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>Eggbert Design Brief</h2>
                </legend>
                <img src={Graph} alt='chart' className='img-fluid' />
                <Form.Row>
                  <Form.Group>
                    <Form.Label>
                      <strong>
                        <p>
                          In complete sentences record your thoughts for
                          redesigning Eggbert’s restraint device:{" "}
                        </p>
                        <br />
                        <p>
                          What worked, what didn't work, what could be changed,
                          and how can you best prepare Eggbert for Newton's Laws
                          of Motion?
                        </p>
                      </strong>
                    </Form.Label>
                    <textarea
                      className='bs-input'
                      id='eggbert-evaluate'
                      name='evaluate'
                      value={evaluate}
                      onChange={onChange}
                      cols='30'
                      rows='3'
                    ></textarea>
                  </Form.Group>
                </Form.Row>
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

Evaluate.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Evaluate)
);
