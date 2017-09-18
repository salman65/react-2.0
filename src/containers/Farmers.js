import { connect } from 'react-redux';

import FarmerView from '../components/FarmerView';
import { withJS } from '../utils/wrapper';

const mapStateToProps = state => ({
  immutables: state.get('home')
})

const mapDispatchToProps = dispatch => {
  return {dispatch: dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(withJS(FarmerView));
