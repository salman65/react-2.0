import React from 'react';
import { string, bool, func } from 'prop-types';

import CardDetails from './CardDetails';
import CardSummary from './CardSummary';

const Card = ({ name, details, trigger }) => (
  <div className="box card" onClick={trigger}>
    {
      details === true &&
      <CardDetails name={name} />
    }
  </div>
)

Card.propTypes = {
  name: string,
  details: bool,
  trigger: func
}

export default Card;
