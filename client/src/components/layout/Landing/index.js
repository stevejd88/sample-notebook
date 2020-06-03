import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import Logo from "../../../assets/img/sb-logo.jpg";

import "./landing.scss";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section id='landing-container'>
      <img className='landing-logo img-fluid' src={Logo} alt='starbase logo' />
      <h1>Engineering Notebook</h1>
      <div className='landing-buttons'>
        <button type='button' className='btn btn-lg btn-outline-primary'>
          <Link to='/register'>Sign Up</Link>
        </button>
        <button type='button' className='btn btn-lg btn-outline-primary'>
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
