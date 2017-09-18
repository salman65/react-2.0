import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FarmerForm from './FarmerForm';

class FarmerView extends Component {
  render() {
    return (
      <div>
      <FarmerForm dispatch={this.props.dispatch}/>
      </div>
    )
  }
};

FarmerView.propTypes = {

};

export default FarmerView;
