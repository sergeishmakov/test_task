import { GET_MEMBERS_SUCCESS } from '../constants';

const initialState = [];

const members = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS_SUCCESS:
      return action.payload;
    default:
      return null;
  }
};

export default members;
