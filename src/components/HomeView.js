import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';

import SatMap from './SatMap';
import Card from './Card';

class HomeView extends Component {
  state = {
    trigger: false
  }

  render() {
    const { trigger } = this.state;
    const { officers, agronomists, farms} = this.props;
    return (
      <div className="home">
        {
          officers.map((o) => <Card key={o.id} name={o.name} details={trigger} />)
        }
      </div>
    )
  }
}

HomeView.propTypes = {
  officers: arrayOf(object),
  agronomists: arrayOf(object),
  farms: arrayOf(object)
};

export default HomeView;
