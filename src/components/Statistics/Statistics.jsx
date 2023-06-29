import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics =({ good, neutral, bad, total, positivePercentage } = this.props) =>{
    return (
      <div className={css.wrapStat}>
        <p>
          Good <span className={css.textStat}>{good}</span>{' '}
        </p>
        <p>
          Neutrals <span className={css.textStat}>{neutral}</span>
        </p>
        <p>
          Bad <span className={css.textStat}>{bad}</span>
        </p>
        <p>
          Total <span className={css.textStat}>{total}</span>
        </p>
        <p>
          Positive feedback{' '}
          <span className={css.textStat}>{positivePercentage} %</span>
        </p>
      </div>
    );
  }


export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
