import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";

import "./alert.scss";

const AlertDiv = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Alert key={alert.id} className='alert' variant={alert.alertType}>
      <Alert.Heading>{alert.msg}</Alert.Heading>
    </Alert>
  ));

AlertDiv.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(AlertDiv);
