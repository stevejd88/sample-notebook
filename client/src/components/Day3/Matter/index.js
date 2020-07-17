import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addData, getCurrentProfile } from "../../../actions/profile";
import Spinner from "../../layout/Spinner";

import Atom from "../../../assets/img/day3/atom.png";
import Molecule from "../../../assets/img/day3/molecule.png";
import Element from "../../../assets/img/day3/element.png";
import Compound from "../../../assets/img/day3/compound.png";
import SOM from "../../../assets/img/day3/som.png";
import Period from "../../../assets/img/day3/period.png";

import "./matter.scss";

const initialState = {
  matter: "",
  atomBond: "",
  sameAtoms: "",
  difAtoms: ""
};

const Matter = ({
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
      for (const key in profile.day3Matter) {
        if (key in profileData) profileData[key] = profile.day3Matter[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { matter, atomBond, sameAtoms, difAtoms } = formData;

  const arrowClick = (e) => {
    e.preventDefault();
    addData("day3/matter", true, formData);
    if (e.target.value) {
      history.push(e.target.value);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addData("day3/matter", true, formData);
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id='matter-container'>
            <Form onSubmit={onSubmit}>
              <fieldset>
                <legend>
                  <h2>What's the Matter?</h2>
                </legend>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>
                      All <span>matter</span> is made of small particles called
                    </Form.Label>
                    <Form.Control
                      type='text'
                      className='bs-input'
                      id='day-three-matter'
                      name='matter'
                      value={matter}
                      onChange={onChange}
                    />
                    <img className='img-fluid' src={Atom} alt='atom' />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>
                      <span>Atoms</span> bond together to form
                    </Form.Label>
                    <Form.Control
                      type='text'
                      className='bs-input'
                      id='atomBond'
                      name='atomBond'
                      value={atomBond}
                      onChange={onChange}
                    />
                    <img className='img-fluid' src={Molecule} alt='atom' />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>
                      If all atoms in the molecule are the{" "}
                      <span>same kind</span>, they form a&#40;n&#41;
                    </Form.Label>
                    <Form.Control
                      type='text'
                      className='bs-input'
                      id='sameAtoms'
                      name='sameAtoms'
                      value={sameAtoms}
                      onChange={onChange}
                    />
                    <img className='img-fluid' src={Element} alt='atom' />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>
                      If two or more <span>different</span> kinds of atoms bond
                      together, they form a&#40;n&#41;
                    </Form.Label>
                    <Form.Control
                      type='text'
                      className='bs-input'
                      id='difAtoms'
                      name='difAtoms'
                      value={difAtoms}
                      onChange={onChange}
                    />
                    <img className='img-fluid' src={Compound} alt='atom' />
                  </Form.Group>
                </Form.Row>
              </fieldset>

              <div className='submit-btns'>
                <button
                  type='submit'
                  className='submit-left'
                  onClick={arrowClick}
                  name='left-button'
                  value='/day3/thermal-energy'
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

              <p className='kinetic-energy'>
                <span>Kinetic</span> Energy &#58; <span>Movement</span> Energy
              </p>
              <img
                className='som img-fluid '
                src={SOM}
                alt='States of Matter'
              />
            </Form>

            <img
              className='p-table  img-fluid'
              src={Period}
              alt='Periodic Table of Elements'
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Matter.propTypes = {
  addData: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addData, getCurrentProfile })(
  withRouter(Matter)
);
