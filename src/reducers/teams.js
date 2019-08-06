import { GET_TEAMS_SUCCESS, CREATE_TEAM_SUCCESS } from '../constants';

const initialState = [];

function teams(state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS_SUCCESS:
      return action.payload;
    case CREATE_TEAM_SUCCESS:
      return [...state, action.payload];
    // TODO: This functionality may not be needed
    // case UPDATE_TEAM_SUCCESS:
    //   return state.map(team => (team.id === action.payload.id ? action.payload : team));
    // case DELETE_TEAM_SUCCESS:
    //   return state.filter(team => team.id === action.payload.id);
    default:
      return state;
  }
}

export default teams;
