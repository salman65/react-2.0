import { connect } from 'react-redux';

import HomeView from '../components/HomeView';
import { withJS } from '../utils/wrapper';

const mapStateToProps = state => ({
  immutables: state.get("home")
});

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withJS(HomeView));
