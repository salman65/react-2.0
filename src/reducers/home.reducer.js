import { fromJS } from 'immutable';

const initialState = fromJS({
  officers: [
    {id: 0, name: 'Meow'},
    {id: 1, name: 'Meow'},
    {id: 2, name: 'Meow'},
    {id: 3, name: 'Meow'}
  ],
  farms: [
    {id: 0, name: 'Rawr'},
    {id: 1, name: 'Rawr'},
    {id: 2, name: 'Rawr'},
    {id: 3, name: 'Rawr'}
  ],
  agronomists: [
    {id: 0, name: 'Yolo', off_id: 0, farm_id: 0},
    {id: 1, name: 'Yolo', off_id: 1, farm_id: 1},
    {id: 2, name: 'Yolo', off_id: 2, farm_id: 2},
    {id: 3, name: 'Yolo', off_id: 3, farm_id: 3}
  ]
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homeReducer;
