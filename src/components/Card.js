import React from 'react';
import { string, bool } from 'prop-types';

const Card = ({ name, details }) => (
  <div className="box card">
    {
      details === true &&
      <div className="card-details">
        <h2>
          this is details for {name}
        </h2>
      </div>
    }
    {
      details === false &&
      <div className="card-summary">
        {name}
      </div>
    }
  </div>
)

Card.propTypes = {
  name: string
}

export default Card;
