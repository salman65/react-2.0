import { connect } from 'react-redux';

import FarmerView from '../components/FarmerView';
import { withJS } from '../utils/wrapper';

const mapStateToProps = state => ({
  immutables: state.get('farmers')
})

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withJS(FarmerView));
