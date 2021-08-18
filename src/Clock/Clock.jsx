/* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';

import './Clock.scss';

//! так принимаем пропсы
export class Clock extends React.Component {
  render() {
    const { isClockVisible, time } = this.props;
    return (
      <>
        <p>
          {`Current time: `}
          {isClockVisible ? (
            <span>
              {time}
            </span>
          ) : (null)}
        </p>
        
      </>
    )
  }
};
