import * as types from './berry-points.types';




export function pointsData(state = [], action) {
  switch (action.type) {
    case types.GET_POINTS_DATA:
      return action.payload;
    default:
      return state;
  }
}