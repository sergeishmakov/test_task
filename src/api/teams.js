import { client } from './client';

export async function getTeams() {
  const res = await client.get('teams');
  return res.data;
}

export async function inviteToTeam(data) {
  await client.post('team/invite', data);
}
