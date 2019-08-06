import { client } from './client';

let teams = [
  { id: 1, name: 'Team 1', description: 'Description 1' },
  { id: 2, name: 'Team 2', description: 'Description 2' },
  { id: 3, name: 'Team 3', description: 'Description 3' }
];

export async function createTeam(values) {
  // const res = await client.post('teams', values);
  const team = { ...values, id: teams.pop.id + 1 };
  return team;
}
export function getTeams() {
  // const res = client.get('teams');
  return teams;
}
export function updateTeams(values, id) {
  const res = client.put(`teams/${id}`, values);
  return res;
}
export function deleteTeams(id) {
  const res = client.delete(`teams/${id}`);
  return res;
}
