import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Heat from "../../../assets/img/day3/fire.png";
import Light from "../../../assets/img/day3/sun.png";
import Mech from "../../../assets/img/day3/gear.png";
import Elec from "../../../assets/img/day3/battery.png";
import Sound from "../../../assets/img/day3/sax.png";

import "./energy.scss";

const initialState = {
  energyIs: "",
  heat: "",
  light: "",
  mech: "",
  electrical: "",
  sound: ""
};

const Energy = ({
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
      for (const key in profile.day3Energy) {
        if (key in profileData) profileData[key] = profile.day3Energy[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { energyIs, heat, light, mech, electrical, sound } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day3/energy", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day3/energy", true, formData);
  };
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='energy-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>What is Energy?</h2>
                </legend>
                <Form.Row className='what-is-energy'>
                  <Form.Group>
                    <span>
                      <span className='energy-name'>Energy</span> is the ability
                      to do
                      <input
                        type='text'
                        id='energyIs'
                        className='bs-input'
                        name='energyIs'
                        value={energyIs}
                        onChange={onChange}
                      />
                      .
                    </span>
                  </Form.Group>
                </Form.Row>
                <p>
                  <span className='energy-name'>Energy</span> comes in many
                  forms!
                </p>
                <div className='types-of-energy'>
                  <Form.Row>
                    <Form.Group>
                      <img className='img-fluid' src={Heat} alt='Fire' />
                      <span>
                        <input
                          type='text'
                          id='energyHeat'
                          className='bs-input'
                          name='heat'
                          value={heat}
                          onChange={onChange}
                        />
                        energy
                      </span>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <img className='img-fluid' src={Light} alt='Sun' />
                      <span>
                        <input
                          type='text'
                          id='energyLight'
                          className='bs-input'
                          name='light'
                          value={light}
                          onChange={onChange}
                        />{" "}
                        energy
                      </span>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <img className='img-fluid' src={Mech} alt='gears' />
                      <span>
                        <input
                          type='text'
                          id='energyMech'
                          className='bs-input'
                          name='mech'
                          value={mech}
                          onChange={onChange}
                        />{" "}
                        energy
                      </span>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <img className='img-fluid' src={Elec} alt='Circuit' />
                      <span>
                        <input
                          type='text'
                          id='energyElectrical'
                          className='bs-input'
                          name='electrical'
                          value={electrical}
                          onChange={onChange}
                        />{" "}
                        energy
                      </span>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <img className='img-fluid' src={Sound} alt='Saxaphone' />
                      <span>
                        <input
                          type='text'
                          id='energySound'
                          className='bs-input'
                          name='sound'
                          value={sound}
                          onChange={onChange}
                        />{" "}
                        energy
                      </span>
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
                  value='/day3/mars'
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
                  value='/day3/sound-energy'
                ></button>
              </div>
            </Form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Energy.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Energy)
);
