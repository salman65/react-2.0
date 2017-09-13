import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

// importing all reducers
import homeReducer from './reducers/home.reducer';
import farmersReducer from './reducers/farmers.reducer';

// main reducer combiner
export default combineReducers({
  routing: routerReducer,
  home: homeReducer,
  farmers: farmersReducer
})
