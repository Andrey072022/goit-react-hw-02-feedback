import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Notification.module.css';

class Notification extends Component {
  render() {
    return <p className={css.text_notyfication}>{this.props.message}</p>;
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
