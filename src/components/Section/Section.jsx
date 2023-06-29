import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section  =({ title, children } = this.props) => {
    return (
      <div className={css.conteiner}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }


export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
