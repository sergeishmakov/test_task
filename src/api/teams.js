// import { client } from './client';

let teams = [
  { id: 1, name: 'Team 1', description: 'Description 1' },
  { id: 2, name: 'Team 2', description: 'Description 2' },
  { id: 3, name: 'Team 3', description: 'Description 3' }
];

export function getTeams() {
  // const res = client.get('teams');
  return teams;
}
