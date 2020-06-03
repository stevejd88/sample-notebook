import React, { Fragment, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import Logo from "../../../assets/img/sb-logo.jpg";
import PropTypes from "prop-types";

import "./register.scss";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: ""
  });

  const { username, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let signCode = " ";
  const code = (e) => {
    signCode = e.target.value;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else if (signCode !== "gigabyte") {
      setAlert("Please enter correct Sign-up Code", "danger");
    } else {
      register({ username, password });
    }
  };

  // REDIRECT IF SIGNED UP
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section id='register-container'>
        <div>
          <img
            className='register-logo img-fluid'
            src={Logo}
            alt='starbase logo'
          />
          <h1>Create an account</h1>
        </div>
        <form id='register-form' onSubmit={(e) => onSubmit(e)}>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={(e) => onChange(e)}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
          />
          <input
            type='text'
            placeholder='Sign-up Code'
            name='signCode'
            onChange={(e) => code(e)}
          />
          <input
            type='submit'
            className='registerButton btn btn-lg btn-outline-primary'
            value='Register'
          />
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
