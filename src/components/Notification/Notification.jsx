import React from 'react';
import PropTypes from 'prop-types';

import css from './Notification.module.css';

export const Notification = ({ message } = this.props) => {
  return <p className={css.text_notyfication}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
