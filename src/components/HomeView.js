import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';

import CustomMap from './CustomMap';
import Card from './Card';

class HomeView extends Component {
  state = {
    trigger: false
  }

  toggleTrigger = () => {
    this.setState({ trigger: !this.state.trigger})
  }

  render() {
    const { trigger } = this.state;
    const { officers, agronomists, farms} = this.props;
    return (
      <div className="home">
        {/* {
          officers.map((o) => <Card key={o.id} name={o.name} details={trigger} trigger={this.toggleTrigger} />)
        } */}
        <CustomMap />
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
