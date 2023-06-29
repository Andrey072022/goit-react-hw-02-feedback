import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions  = ( { options, onLeaveFeedback } = this.props) =>{
    return (
      <div className={css.wrapFeedback}>
        {options.map((btn, index) => (
          <button
            key={index}
            type="button"
            name="btn"
            className={css.btn}
            onClick={() => {
              onLeaveFeedback(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
