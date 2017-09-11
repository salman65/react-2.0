import React from 'react';
import { string } from 'prop-types';

const CardDetails = ({ name }) => (
  <div className="card-details">
    <h2>
      this is details for {name}
    </h2>
  </div>
)

CardDetails.propTypes = {
  name: string
}

export default CardDetails;
