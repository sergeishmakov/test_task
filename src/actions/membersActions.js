import { GET_MEMBERS_SUCCESS } from '../constants';
import { getMembers } from '../api/members';

export function getMembersAction(teamId) {
  return async function(dispatch) {
    const members = await getMembers(teamId);
    if (members) {
      dispatch({
        type: GET_MEMBERS_SUCCESS,
        payload: members
      });
    } else {
      dispatch({
        type: 'GET_MEMBERS_FAILURE',
        payload: null
      });
    }
  };
}
