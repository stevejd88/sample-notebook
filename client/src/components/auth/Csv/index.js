import React, { Fragment, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import Logo from "../../../assets/img/sb-logo.jpg";
import PropTypes from "prop-types";

// import "./register.scss";

const Csv = ({ setAlert, register, isAuthenticated }) => {
  const parse = require("csv-parse");
  const output = [];

  const onChange = (e) => {
    const f = e.target.files[0];

    const parser = parse({
      delimeter: ","
    });
    parser.on("readable", function () {
      let record;
      while ((record = parser.read())) {
        output.push(record);
      }
    });

    parser.on("error", function (err) {
      console.error(err.message);
    });

    const reader = new FileReader();
    reader.onload = (function () {
      return function (e) {
        parser.write(e.target.result);
        parser.end();
      };
    })(f);
    reader.readAsText(f);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < output.length; i++) {
      let username = output[i][0];
      let password = output[i][1];
      register({ username, password });
    }
  };

  return (
    <Fragment>
      <section id='csv-container'>
        <div>
          <img className='csv-logo img-fluid' src={Logo} alt='starbase logo' />
          <h1>Upload Multiple Users</h1>
        </div>
        <form id='csv-form' onSubmit={onSubmit}>
          <input
            type='file'
            name='fileupload'
            id='fileupload'
            onChange={onChange}
          />
          <label htmlFor='fileupload'> Select a file to upload</label>

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

Csv.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Csv);
