import { fromJS } from 'immutable';

const initialState = fromJS({
  farms: [
    {id: 0, name: 'Rawr'},
    {id: 1, name: 'Rawr'},
    {id: 2, name: 'Rawr'},
    {id: 3, name: 'Rawr'}
  ]
});

function farmersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default farmersReducer;
