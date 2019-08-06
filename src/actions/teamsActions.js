import { GET_TEAMS_SUCCESS, CREATE_TEAM_SUCCESS } from '../constants';
import { getTeams, createTeam } from '../api/teams';

export function getTeamsAction() {
  return async function(dispatch) {
    const teams = await getTeams();
    if (teams) {
      dispatch({
        type: GET_TEAMS_SUCCESS,
        payload: teams
      });
    } else {
      dispatch({
        type: 'GET_TEAMS_FAILURE',
        payload: null
      });
    }
  };
}

export function createTeamAction(data) {
  return async function(dispatch) {
    const team = await createTeam(data);
    if (team) {
      dispatch({
        type: CREATE_TEAM_SUCCESS,
        payload: team
      });
    } else {
      dispatch({
        type: 'CREATE_TEAM_FAILURE',
        payload: null
      });
    }
  };
}
