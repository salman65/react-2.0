import React from 'react';
import { string } from 'prop-types';

const CardSummary = ({ name }) => (
  <div className="card-summary">
    {name}
  </div>
)

CardSummary.propTypes = {
  name: string
}

export default CardSummary;
