import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../../actions/alert";
import { register } from "../../../actions/auth";
import Logo from "../../../assets/img/sb-logo.jpg";
import PropTypes from "prop-types";

import "./csv.scss";

const Csv = ({ setAlert, register }) => {
  const parse = require("csv-parse");
  const output = [];

  const onChange = (e) => {
    const file = e.target.files[0];

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
    })(file);
    reader.readAsText(file);
  };

  let signCode = " ";
  const code = (e) => {
    signCode = e.target.value;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (signCode !== "qwerty") {
      setAlert("Please enter correct Sign-up Code", "danger");
    } else {
      for (let i = 0; i < output.length; i++) {
        let username = output[i][0];
        let password = output[i][1];
        register({ username, password });
        if (i === output.length - 1) {
          setAlert("User profiles Created", "success");
        }
      }
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
          <label htmlFor='fileupload'> Select a file to upload</label>
          <input
            type='file'
            name='fileupload'
            id='fileupload'
            onChange={onChange}
            accept='.csv'
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
      </section>
    </Fragment>
  );
};

Csv.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default connect(null, { setAlert, register })(Csv);
